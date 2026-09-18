/* ==========================================================================
   FUSIONX 1.0 — Hackathon Timer & Stopwatch Sync Engine
   Syncs timer state across problem-statements.html and admin-portal.html
   Controls (Start, Stop, Hold, Restart) are admin-restricted.
   ========================================================================== */

(function () {
  var TIMER_KEY = 'fusionx_timer_state';
  var DEFAULT_DURATION_MS = 24 * 60 * 60 * 1000; // 24 Hours Hackathon (86,400,000 ms)

  var DEFAULT_STATE = {
    status: 'stopped', // 'stopped' | 'running' | 'held'
    mode: 'countdown', // 'countdown' | 'stopwatch'
    durationMs: DEFAULT_DURATION_MS,
    startTime: null,
    elapsedBeforePauseMs: 0,
    lastUpdated: Date.now()
  };

  function loadState() {
    try {
      var raw = localStorage.getItem(TIMER_KEY);
      if (raw) {
        var parsed = JSON.parse(raw);
        if (parsed && typeof parsed === 'object') {
          return Object.assign({}, DEFAULT_STATE, parsed);
        }
      }
    } catch (e) {
      console.warn('[FusionX Timer] Failed to load timer state:', e);
    }
    return Object.assign({}, DEFAULT_STATE);
  }

  function saveState(state) {
    state.lastUpdated = Date.now();
    try {
      localStorage.setItem(TIMER_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn('[FusionX Timer] Failed to save timer state:', e);
    }
    // Also push to Firestore if connected
    if (window.FX_DOC) {
      window.FX_DOC.set({ timerState: state }, { merge: true }).catch(function () {});
    }
    window.dispatchEvent(new CustomEvent('fx:timer-change', { detail: state }));
  }

  var currentState = loadState();

  window.addEventListener('storage', function (e) {
    if (e.key === TIMER_KEY) {
      currentState = loadState();
      window.dispatchEvent(new CustomEvent('fx:timer-change', { detail: currentState }));
    }
  });

  window.addEventListener('fx:live-update', function (e) {
    if (e.detail && e.detail.timerState) {
      currentState = Object.assign({}, DEFAULT_STATE, e.detail.timerState);
      try {
        localStorage.setItem(TIMER_KEY, JSON.stringify(currentState));
      } catch (err) {}
      window.dispatchEvent(new CustomEvent('fx:timer-change', { detail: currentState }));
    }
  });

  function getCalculatedTime() {
    var now = Date.now();
    var elapsedMs = currentState.elapsedBeforePauseMs;

    if (currentState.status === 'running' && currentState.startTime) {
      elapsedMs += Math.max(0, now - currentState.startTime);
    }

    var totalDuration = currentState.durationMs || DEFAULT_DURATION_MS;

    if (currentState.mode === 'countdown') {
      var remainingMs = Math.max(0, totalDuration - elapsedMs);
      var isComplete = elapsedMs >= totalDuration;

      var totalSec = Math.floor(remainingMs / 1000);
      var hours = Math.floor(totalSec / 3600);
      var minutes = Math.floor((totalSec % 3600) / 60);
      var seconds = totalSec % 60;
      var ms = Math.floor((remainingMs % 1000) / 10); // 2 digits

      return {
        mode: 'countdown',
        status: isComplete ? 'completed' : currentState.status,
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0'),
        ms: String(ms).padStart(2, '0'),
        remainingMs: remainingMs,
        elapsedMs: elapsedMs,
        totalDurationMs: totalDuration,
        progressPct: Math.min(100, Math.max(0, (elapsedMs / totalDuration) * 100))
      };
    } else {
      // Stopwatch mode: count upwards
      var totalSec = Math.floor(elapsedMs / 1000);
      var hours = Math.floor(totalSec / 3600);
      var minutes = Math.floor((totalSec % 3600) / 60);
      var seconds = totalSec % 60;
      var ms = Math.floor((elapsedMs % 1000) / 10);

      return {
        mode: 'stopwatch',
        status: currentState.status,
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0'),
        ms: String(ms).padStart(2, '0'),
        elapsedMs: elapsedMs,
        totalDurationMs: totalDuration,
        progressPct: Math.min(100, (elapsedMs / totalDuration) * 100)
      };
    }
  }

  // Exposed API
  window.FX_Timer = {
    getState: function () {
      return Object.assign({}, currentState);
    },
    getTime: getCalculatedTime,

    // Admin-Only actions:
    start: function () {
      if (currentState.status === 'running') return;
      currentState.status = 'running';
      currentState.startTime = Date.now();
      saveState(currentState);
    },

    hold: function () {
      if (currentState.status !== 'running') return;
      var now = Date.now();
      currentState.elapsedBeforePauseMs += Math.max(0, now - currentState.startTime);
      currentState.status = 'held';
      currentState.startTime = null;
      saveState(currentState);
    },

    stop: function () {
      if (currentState.status === 'running') {
        var now = Date.now();
        currentState.elapsedBeforePauseMs += Math.max(0, now - currentState.startTime);
      }
      currentState.status = 'stopped';
      currentState.startTime = null;
      saveState(currentState);
    },

    restart: function (customDurationHours) {
      if (customDurationHours && !isNaN(customDurationHours)) {
        currentState.durationMs = Number(customDurationHours) * 3600 * 1000;
      }
      currentState.status = 'running';
      currentState.elapsedBeforePauseMs = 0;
      currentState.startTime = Date.now();
      saveState(currentState);
    },

    reset: function (customDurationHours) {
      if (customDurationHours && !isNaN(customDurationHours)) {
        currentState.durationMs = Number(customDurationHours) * 3600 * 1000;
      }
      currentState.status = 'stopped';
      currentState.elapsedBeforePauseMs = 0;
      currentState.startTime = null;
      saveState(currentState);
    },

    setMode: function (mode) {
      if (mode === 'countdown' || mode === 'stopwatch') {
        currentState.mode = mode;
        saveState(currentState);
      }
    },

    setDuration: function (hours) {
      var h = parseFloat(hours);
      if (!isNaN(h) && h > 0) {
        currentState.durationMs = Math.round(h * 3600 * 1000);
        saveState(currentState);
      }
    }
  };
})();
