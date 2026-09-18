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

  function applyIncomingTimerState(incoming) {
    if (!incoming || typeof incoming !== 'object') return;
    currentState = Object.assign({}, DEFAULT_STATE, incoming);
    try {
      localStorage.setItem(TIMER_KEY, JSON.stringify(currentState));
    } catch (err) {}
    window.dispatchEvent(new CustomEvent('fx:timer-change', { detail: currentState }));
  }

  function saveState(state) {
    state.lastUpdated = Date.now();
    try {
      localStorage.setItem(TIMER_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn('[FusionX Timer] Failed to save timer state locally:', e);
    }
    // Also push to Firestore cloud for cross-device real-time sync
    if (window.FX_DOC) {
      window.FX_DOC.set({ timerState: state }, { merge: true }).then(function () {
        console.log('[FusionX Timer] Synced timerState to cloud Firestore');
      }).catch(function (err) {
        console.warn('[FusionX Timer] Cloud sync failed:', err);
      });
    } else {
      // Retry when FX_DOC becomes available
      var retryCount = 0;
      var retryTimer = setInterval(function () {
        retryCount++;
        if (window.FX_DOC) {
          window.FX_DOC.set({ timerState: state }, { merge: true }).catch(function () {});
          clearInterval(retryTimer);
        } else if (retryCount > 20) {
          clearInterval(retryTimer);
        }
      }, 250);
    }
    window.dispatchEvent(new CustomEvent('fx:timer-change', { detail: state }));
  }

  var currentState = loadState();

  // Multi-tab sync on same device
  window.addEventListener('storage', function (e) {
    if (e.key === TIMER_KEY) {
      currentState = loadState();
      window.dispatchEvent(new CustomEvent('fx:timer-change', { detail: currentState }));
    }
  });

  // Event listener from site-live-sync
  window.addEventListener('fx:live-update', function (e) {
    if (e.detail && e.detail.timerState) {
      applyIncomingTimerState(e.detail.timerState);
    }
  });

  // Direct Firestore cross-device live subscription
  function initCloudTimerSync() {
    if (!window.FX_DOC) {
      setTimeout(initCloudTimerSync, 200);
      return;
    }
    try {
      window.FX_DOC.onSnapshot(function (snap) {
        if (snap.exists) {
          var d = snap.data();
          if (d && d.timerState) {
            applyIncomingTimerState(d.timerState);
          }
        }
      }, function (err) {
        console.warn('[FusionX Timer] Firestore timer sync listener warning:', err);
      });
    } catch (err) {
      console.warn('[FusionX Timer] Could not initialize Firestore timer snapshot:', err);
    }
  }
  initCloudTimerSync();

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

  function getCurrentElapsed() {
    var now = Date.now();
    var elapsed = currentState.elapsedBeforePauseMs || 0;
    if (currentState.status === 'running' && currentState.startTime) {
      elapsed += Math.max(0, now - currentState.startTime);
    }
    return elapsed;
  }

  function applyNewElapsed(newElapsed) {
    newElapsed = Math.max(0, newElapsed);
    if (currentState.status === 'running') {
      currentState.startTime = Date.now();
      currentState.elapsedBeforePauseMs = newElapsed;
    } else {
      currentState.startTime = null;
      currentState.elapsedBeforePauseMs = newElapsed;
    }
    saveState(currentState);
  }

  // Exposed API
  window.FX_Timer = {
    getState: function () {
      return Object.assign({}, currentState);
    },
    getTime: getCalculatedTime,
    getCurrentElapsed: getCurrentElapsed,

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

    // Set countdown or stopwatch numbers directly (HH:MM:SS)
    setTime: function (hours, minutes, seconds) {
      var h = Math.max(0, parseInt(hours, 10) || 0);
      var m = Math.max(0, Math.min(59, parseInt(minutes, 10) || 0));
      var s = Math.max(0, Math.min(59, parseInt(seconds, 10) || 0));
      var targetMs = ((h * 3600) + (m * 60) + s) * 1000;

      if (currentState.mode === 'countdown') {
        var totalDur = currentState.durationMs || DEFAULT_DURATION_MS;
        if (targetMs > totalDur) {
          currentState.durationMs = targetMs;
          applyNewElapsed(0);
        } else {
          var newElapsed = totalDur - targetMs;
          applyNewElapsed(newElapsed);
        }
      } else {
        // Stopwatch mode: setting time directly sets elapsed
        applyNewElapsed(targetMs);
      }
    },

    // Move time forward (fast-forward clock / advance time elapsed)
    stepForward: function (seconds) {
      var sec = parseFloat(seconds) || 0;
      if (sec <= 0) return;
      var curElapsed = getCurrentElapsed();
      var deltaMs = Math.round(sec * 1000);
      var totalDur = currentState.durationMs || DEFAULT_DURATION_MS;

      if (currentState.mode === 'countdown') {
        var newElapsed = Math.min(totalDur, curElapsed + deltaMs);
        applyNewElapsed(newElapsed);
      } else {
        applyNewElapsed(curElapsed + deltaMs);
      }
    },

    // Move time backward (rewind clock / increase remaining time)
    stepBackward: function (seconds) {
      var sec = parseFloat(seconds) || 0;
      if (sec <= 0) return;
      var curElapsed = getCurrentElapsed();
      var deltaMs = Math.round(sec * 1000);

      if (currentState.mode === 'countdown') {
        if (curElapsed >= deltaMs) {
          applyNewElapsed(curElapsed - deltaMs);
        } else {
          // Rewound past start, expand duration to preserve remaining
          var extra = deltaMs - curElapsed;
          currentState.durationMs = (currentState.durationMs || DEFAULT_DURATION_MS) + extra;
          applyNewElapsed(0);
        }
      } else {
        applyNewElapsed(Math.max(0, curElapsed - deltaMs));
      }
    },

    // Explicit Add / Subtract remaining time helpers
    addRemaining: function (seconds) {
      var sec = parseFloat(seconds) || 0;
      if (sec <= 0) return;
      this.stepBackward(sec);
    },

    deductRemaining: function (seconds) {
      var sec = parseFloat(seconds) || 0;
      if (sec <= 0) return;
      this.stepForward(sec);
    },

    // General directional adjuster
    adjustTime: function (seconds, direction) {
      var sec = parseFloat(seconds) || 0;
      if (sec <= 0) return;
      if (direction === 'forward' || direction === 'advance' || direction === 'fastforward') {
        this.stepForward(sec);
      } else {
        this.stepBackward(sec);
      }
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
