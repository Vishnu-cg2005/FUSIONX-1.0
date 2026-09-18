/* ==========================================================================
   FUSIONX 1.0 — Problem Statements Database
   Paavai Engineering College, Namakkal · Department of Information Technology
   24 Hours Hackathon (Programmer's Day)
   ========================================================================== */

window.FX_PROBLEM_STATEMENTS = [
  // -------------------------------------------------------------
  // 1. Smart Campus & Education
  // -------------------------------------------------------------
  {
    id: "SCE-01",
    track: "Smart Campus & Education",
    trackId: "campus",
    trackCode: "SCE",
    number: 1,
    title: "AI-Based Academic Risk Prediction and Personalized Intervention System",
    problem: "Students who are heading towards failure are usually identified only after internal marks are published, which leaves no time to act.",
    solution: "Build a system that continuously reads attendance, assignment scores, test marks and submission delays to score each student's academic risk. It should then generate a personalized intervention plan — remedial topics, mentor alerts, extra practice — instead of a generic warning.",
    outcome: "Faculty get a ranked watchlist with reasons behind each prediction."
  },
  {
    id: "SCE-02",
    track: "Smart Campus & Education",
    trackId: "campus",
    trackCode: "SCE",
    number: 2,
    title: "Intelligent Campus Resource Allocation and Conflict-Free Scheduling Platform",
    problem: "Classrooms, labs, seminar halls and faculty hours are booked manually, which causes double-bookings and idle rooms.",
    solution: "Build a platform that takes staff availability, course load, room capacity and lab equipment as constraints and generates a clash-free timetable automatically. It should handle mid-semester changes like faculty leave or an extra lab session by re-optimizing only the affected slots.",
    outcome: "Utilization reports show which resources are over- or under-used."
  },
  {
    id: "SCE-03",
    track: "Smart Campus & Education",
    trackId: "campus",
    trackCode: "SCE",
    number: 3,
    title: "Adaptive Learning Platform with AI-Based Knowledge Gap Detection",
    problem: "In a common classroom pace, weak students fall behind and fast learners get bored.",
    solution: "Build a platform that analyses quiz responses and wrong-answer patterns to locate the exact concept a learner has not understood, not just the topic. Content difficulty, hints and the next question should adapt in real time to that gap.",
    outcome: "The learner sees a concept mastery map that updates as they practice."
  },
  {
    id: "SCE-04",
    track: "Smart Campus & Education",
    trackId: "campus",
    trackCode: "SCE",
    number: 4,
    title: "AI-Based Student Dropout Risk Prediction and Preventive Support System",
    problem: "Dropout is rarely sudden — attendance decline, fee delays, hostel issues and falling marks appear months earlier.",
    solution: "Build a model that combines academic, financial, attendance and engagement signals to flag students at risk of discontinuing. The system should recommend the right support channel: counselling, scholarship guidance, mentoring or parent contact.",
    outcome: "Privacy and non-stigmatizing presentation of risk are essential."
  },
  {
    id: "SCE-05",
    track: "Smart Campus & Education",
    trackId: "campus",
    trackCode: "SCE",
    number: 5,
    title: "Intelligent Skill-Gap Analysis and Personalized Career Roadmap Generation System",
    problem: "Students do not know which skills separate them from the role they want.",
    solution: "Build a system that compares a student's current profile — subjects, projects, certifications, coding activity — against live requirements for a target role. It should output the missing skills ranked by importance and a time-bound roadmap of courses, projects and milestones.",
    outcome: "The roadmap must update as the student completes each step."
  },
  {
    id: "SCE-06",
    track: "Smart Campus & Education",
    trackId: "campus",
    trackCode: "SCE",
    number: 6,
    title: "AI-Powered Campus Complaint Classification, Prioritization and Resolution System",
    problem: "Campus complaints arrive through scattered channels and often reach the wrong department or nobody at all.",
    solution: "Build a system that reads a free-text or voice complaint, classifies it by department, assigns urgency, and routes it to the responsible staff. Duplicate and repeated complaints about the same issue should be merged into a single tracked case.",
    outcome: "Dashboards show pending load, resolution time and recurring problem areas."
  },
  {
    id: "SCE-07",
    track: "Smart Campus & Education",
    trackId: "campus",
    trackCode: "SCE",
    number: 7,
    title: "Context-Aware Student Query Routing and Knowledge Retrieval Platform",
    problem: "Students waste time asking offices questions that are already answered in circulars, handbooks and notices.",
    solution: "Build a platform that understands a natural-language question, retrieves the answer from official campus documents with the source cited, and answers instantly. When no reliable answer exists, it should route the query to the correct department instead of guessing.",
    outcome: "Context like the student's year, branch and hostel status should shape the answer."
  },
  {
    id: "SCE-08",
    track: "Smart Campus & Education",
    trackId: "campus",
    trackCode: "SCE",
    number: 8,
    title: "AI-Based Examination Question Generation and Difficulty Balancing System",
    problem: "Setting balanced question papers by hand is slow and often repeats questions or skews difficulty.",
    solution: "Build a system that generates questions from the syllabus and course material, tagged by topic, Bloom's level and difficulty. It should assemble a paper that meets a target difficulty distribution and full syllabus coverage.",
    outcome: "Similarity checks prevent repetition from previous papers."
  },
  {
    id: "SCE-09",
    track: "Smart Campus & Education",
    trackId: "campus",
    trackCode: "SCE",
    number: 9,
    title: "Secure Digital Academic Certificate Verification and Fraud Detection Platform",
    problem: "Employers and institutions cannot easily confirm whether a marksheet or certificate is genuine.",
    solution: "Build a platform that issues tamper-evident digital certificates and allows instant verification through a code or QR scan. Forged, edited or expired documents should be detected and flagged with the reason.",
    outcome: "Verification must work without exposing the student's full academic record."
  },
  {
    id: "SCE-10",
    track: "Smart Campus & Education",
    trackId: "campus",
    trackCode: "SCE",
    number: 10,
    title: "Predictive Hostel Management and Recurring Complaint Analytics System",
    problem: "Hostel issues like water shortage, electrical faults and mess complaints repeat in predictable patterns but are handled reactively.",
    solution: "Build a system that logs complaints, clusters recurring ones by block, room and category, and predicts likely failures before they happen. It should support room allocation, maintenance scheduling and staff workload planning.",
    outcome: "Wardens get analytics on which blocks consume the most maintenance effort."
  },
  {
    id: "SCE-11",
    track: "Smart Campus & Education",
    trackId: "campus",
    trackCode: "SCE",
    number: 11,
    title: "AI-Powered Accessibility Assistance Platform for Students with Disabilities",
    problem: "Campus content and navigation are largely designed for able-bodied students.",
    solution: "Build a platform that converts notes, slides and notices into accessible formats — speech, captions, simplified text, high-contrast or braille-ready output. It should also assist with navigation, exam accommodations and real-time classroom support.",
    outcome: "The interface itself must be operable by keyboard, voice and screen reader."
  },
  {
    id: "SCE-12",
    track: "Smart Campus & Education",
    trackId: "campus",
    trackCode: "SCE",
    number: 12,
    title: "Intelligent Attendance, Engagement and Academic Behaviour Analytics System",
    problem: "Attendance registers record presence but say nothing about actual engagement.",
    solution: "Build a system that captures attendance reliably and combines it with participation, assignment timeliness and lab activity to model behaviour trends. It should surface patterns such as sudden disengagement or subject-specific avoidance.",
    outcome: "Reports help faculty act early rather than at semester end."
  },
  {
    id: "SCE-13",
    track: "Smart Campus & Education",
    trackId: "campus",
    trackCode: "SCE",
    number: 13,
    title: "Personalized Campus Information and Context-Aware Notification Platform",
    problem: "Mass notices flood students with information that is irrelevant to them, so real announcements get ignored.",
    solution: "Build a platform that filters and delivers notices based on the student's branch, year, section, clubs and hostel. Timing and channel should adapt to urgency — exam changes push immediately, events can wait.",
    outcome: "Read and action tracking tells administrators whether the message actually landed."
  },
  {
    id: "SCE-14",
    track: "Smart Campus & Education",
    trackId: "campus",
    trackCode: "SCE",
    number: 14,
    title: "Collaborative Peer Learning and AI-Assisted Knowledge Sharing Platform",
    problem: "Good student notes, doubts and explanations stay locked in private chats and never reach juniors.",
    solution: "Build a platform where students post doubts, answer peers and share resources, with AI organizing everything by subject and topic. It should match a doubt to the peer or senior best able to answer it and summarize long discussion threads.",
    outcome: "Quality control through voting and moderation keeps the knowledge base trustworthy."
  },
  {
    id: "SCE-15",
    track: "Smart Campus & Education",
    trackId: "campus",
    trackCode: "SCE",
    number: 15,
    title: "AI-Based Course Selection, Skill Gap Analysis and Career Recommendation System",
    problem: "Electives and certifications are often chosen on hearsay rather than on career fit.",
    solution: "Build a system that recommends electives and courses based on a student's performance pattern, interests and target career path. It should explain why each course is suggested and what career outcomes it supports.",
    outcome: "Recommendations should be revised as the student's performance and goals change."
  },

  // -------------------------------------------------------------
  // 2. Sustainability & Environment
  // -------------------------------------------------------------
  {
    id: "SUS-01",
    track: "Sustainability & Environment",
    trackId: "sustainability",
    trackCode: "SUS",
    number: 1,
    title: "AI-Based Waste Generation Prediction and Dynamic Collection Optimization System",
    problem: "Fixed collection routes mean some bins overflow while trucks visit empty ones.",
    solution: "Build a system that predicts waste generation per location using history, day of week, events and seasonality. It should then generate collection routes that prioritize bins likely to be full and minimize distance travelled.",
    outcome: "Savings in fuel, trips and overflow incidents should be measurable."
  },
  {
    id: "SUS-02",
    track: "Sustainability & Environment",
    trackId: "sustainability",
    trackCode: "SUS",
    number: 2,
    title: "Intelligent Water Consumption Anomaly Detection and Leakage Risk Analysis Platform",
    problem: "Underground leaks and silent overflows waste enormous volumes before anyone notices.",
    solution: "Build a platform that learns normal consumption patterns per building or zone and flags deviations such as continuous night-time flow. It should estimate leak probability and rank locations by urgency for inspection.",
    outcome: "Alerts must include the expected volume and cost of the loss."
  },
  {
    id: "SUS-03",
    track: "Sustainability & Environment",
    trackId: "sustainability",
    trackCode: "SUS",
    number: 3,
    title: "AI-Based Building Energy Demand Forecasting and Consumption Optimization System",
    problem: "Electricity bills are reviewed after the fact, when nothing can be changed.",
    solution: "Build a system that forecasts a building's energy demand using occupancy, weather, schedules and appliance usage. It should recommend concrete actions — load shifting, HVAC setpoints, shutdown schedules — with estimated savings.",
    outcome: "Anomalous consumption should be flagged as a possible fault or wastage."
  },
  {
    id: "SUS-04",
    track: "Sustainability & Environment",
    trackId: "sustainability",
    trackCode: "SUS",
    number: 4,
    title: "Multi-Source Air Pollution Prediction and Environmental Risk Analysis Platform",
    problem: "Air quality data exists but is rarely turned into usable local guidance.",
    solution: "Build a platform that fuses sensor readings, weather, traffic and industrial data to forecast pollution levels for a locality. It should identify likely contributing sources and issue health-risk advisories for sensitive groups.",
    outcome: "Visualization should show how risk shifts across hours and zones."
  },
  {
    id: "SUS-05",
    track: "Sustainability & Environment",
    trackId: "sustainability",
    trackCode: "SUS",
    number: 5,
    title: "AI-Powered Plastic Waste Image Classification and Recycling Recommendation System",
    problem: "Most people cannot tell which plastics are recyclable, so recyclable material ends up in landfill.",
    solution: "Build a system that identifies plastic type and category from a photograph of the item. It should then give a clear disposal or recycling recommendation suited to the user's local facilities.",
    outcome: "Aggregated scans reveal what waste a community actually produces."
  },
  {
    id: "SUS-06",
    track: "Sustainability & Environment",
    trackId: "sustainability",
    trackCode: "SUS",
    number: 6,
    title: "Food Waste Prediction and Intelligent Surplus Redistribution Platform",
    problem: "Hostels, canteens and events discard edible food daily while nearby people go without.",
    solution: "Build a platform that predicts surplus quantity ahead of time from consumption history, headcount and menu. It should match confirmed surplus to nearby NGOs or collection points within the safe consumption window.",
    outcome: "Tracking should record quantity saved and reduce over-preparation over time."
  },
  {
    id: "SUS-07",
    track: "Sustainability & Environment",
    trackId: "sustainability",
    trackCode: "SUS",
    number: 7,
    title: "AI-Based Agricultural Resource Optimization and Crop Recommendation System",
    problem: "Farmers often choose crops and input quantities by habit rather than by conditions.",
    solution: "Build a system that recommends suitable crops using soil data, weather forecast, water availability and market trends. It should also advise on irrigation scheduling and fertilizer quantity to avoid waste.",
    outcome: "Recommendations must be explainable and usable in the local language."
  },
  {
    id: "SUS-08",
    track: "Sustainability & Environment",
    trackId: "sustainability",
    trackCode: "SUS",
    number: 8,
    title: "Environmental Anomaly Detection and Early Warning Analytics Platform",
    problem: "Environmental damage is usually confirmed only after it becomes visible.",
    solution: "Build a platform that monitors streams of environmental data and detects abnormal patterns such as sudden pollutant spikes or unusual temperature shifts. It should classify severity and issue early warnings to the responsible authority.",
    outcome: "False-alarm control is as important as detection sensitivity."
  },
  {
    id: "SUS-09",
    track: "Sustainability & Environment",
    trackId: "sustainability",
    trackCode: "SUS",
    number: 9,
    title: "E-Waste Lifecycle Tracking, Classification and Responsible Disposal Platform",
    problem: "Discarded electronics disappear into informal channels with no record of safe handling.",
    solution: "Build a platform that registers devices, tracks them from disposal to recycler, and classifies them by hazardous content and recoverable material. It should guide users to certified disposal points and confirm final handling.",
    outcome: "Institutions get compliance-ready reports of what was disposed and where."
  },
  {
    id: "SUS-10",
    track: "Sustainability & Environment",
    trackId: "sustainability",
    trackCode: "SUS",
    number: 10,
    title: "AI-Based Extreme Weather Risk Prediction and Community Response Planning System",
    problem: "Weather warnings are broadcast generally and rarely translate into local action.",
    solution: "Build a system that converts forecasts into locality-level risk — flooding, heat stress, crop damage — using terrain, drainage and population data. It should generate a response plan naming shelters, vulnerable groups and priority actions.",
    outcome: "Plans must be readable by local officials, not only by experts."
  },
  {
    id: "SUS-11",
    track: "Sustainability & Environment",
    trackId: "sustainability",
    trackCode: "SUS",
    number: 11,
    title: "Sustainable Transportation Route Optimization and Emission Analysis Platform",
    problem: "Routes are optimized for time, almost never for emissions.",
    solution: "Build a platform that computes routes and transport mode combinations that reduce carbon output while staying practical. It should quantify emissions saved per trip and compare alternatives such as pooling or shifting to public transport.",
    outcome: "Organizations can use the aggregate view to report commute emissions."
  },
  {
    id: "SUS-12",
    track: "Sustainability & Environment",
    trackId: "sustainability",
    trackCode: "SUS",
    number: 12,
    title: "AI-Based Rainwater Harvesting Potential Analysis and Planning System",
    problem: "Buildings ignore rainwater harvesting because the benefit is unclear upfront.",
    solution: "Build a system that estimates harvestable volume from roof area, rainfall records and runoff coefficients for a given location. It should recommend tank sizing, filtration and expected annual savings with a payback estimate.",
    outcome: "Output should be a plan a building owner can act on."
  },
  {
    id: "SUS-13",
    track: "Sustainability & Environment",
    trackId: "sustainability",
    trackCode: "SUS",
    number: 13,
    title: "Personalized Carbon Footprint Prediction and Reduction Recommendation Platform",
    problem: "Generic carbon calculators give a number and no path forward.",
    solution: "Build a platform that estimates an individual's footprint from real activity — travel, electricity, diet, purchases — and predicts future emissions. It should recommend a small set of high-impact changes ranked by effort and savings.",
    outcome: "Progress tracking keeps the user engaged beyond the first calculation."
  },
  {
    id: "SUS-14",
    track: "Sustainability & Environment",
    trackId: "sustainability",
    trackCode: "SUS",
    number: 14,
    title: "AI-Based Public Waste Pattern Detection and Collection Optimization System",
    problem: "Illegal dumping spots and chronically overflowing public bins are known to residents but not to planners.",
    solution: "Build a system that detects waste accumulation patterns from images or citizen reports and maps hotspot locations. It should recommend bin placement changes and collection frequency adjustments.",
    outcome: "Repeat-offender locations should be highlighted for enforcement."
  },
  {
    id: "SUS-15",
    track: "Sustainability & Environment",
    trackId: "sustainability",
    trackCode: "SUS",
    number: 15,
    title: "Climate Risk Analytics and Community Resilience Decision-Support Platform",
    problem: "Local bodies lack tools to convert long-term climate data into planning decisions.",
    solution: "Build a platform that assesses climate risks for a region and identifies the most vulnerable infrastructure and populations. It should compare intervention options by cost, benefit and reduced exposure.",
    outcome: "Output must support budget and priority decisions, not just visualization."
  },

  // -------------------------------------------------------------
  // 3. AI for Social Good
  // -------------------------------------------------------------
  {
    id: "ASG-01",
    track: "AI for Social Good",
    trackId: "social",
    trackCode: "ASG",
    number: 1,
    title: "Multilingual AI Knowledge Retrieval and Context-Aware Translation Platform",
    problem: "Critical information stays inaccessible to people who do not read the language it was published in.",
    solution: "Build a platform that answers questions from a document collection and delivers the answer in the user's language. Translation must preserve domain meaning — legal, medical, agricultural terms cannot be translated loosely.",
    outcome: "Answers should cite the source so users can verify them."
  },
  {
    id: "ASG-02",
    track: "AI for Social Good",
    trackId: "social",
    trackCode: "ASG",
    number: 2,
    title: "AI-Based Multimodal Accessibility Assistant for Diverse User Needs",
    problem: "Accessibility tools are usually built for one disability and fail everyone else.",
    solution: "Build an assistant that accepts and produces multiple modalities — speech, text, image and gesture — and adapts to the user's specific need. It should describe images, read text aloud, simplify complex language and caption audio within one interface.",
    outcome: "The user should configure the combination they need rather than pick a fixed mode."
  },
  {
    id: "ASG-03",
    track: "AI for Social Good",
    trackId: "social",
    trackCode: "ASG",
    number: 3,
    title: "Personalized AI Tutor with Learning Behaviour Analysis and Adaptive Content Generation",
    problem: "One explanation style does not work for every learner.",
    solution: "Build a tutor that observes how a learner responds — where they hesitate, what they repeat, which format they engage with — and adapts its teaching approach. It should generate fresh explanations, examples and practice items at the right difficulty.",
    outcome: "The system must show progress transparently to the learner."
  },
  {
    id: "ASG-04",
    track: "AI for Social Good",
    trackId: "social",
    trackCode: "ASG",
    number: 4,
    title: "AI-Based Misinformation Detection and Evidence Retrieval Platform",
    problem: "False claims spread faster than corrections, especially in forwarded messages.",
    solution: "Build a platform that takes a claim in text or image form and assesses its credibility. It must retrieve supporting or contradicting evidence from reliable sources and present both.",
    outcome: "The verdict should be explained with evidence rather than delivered as a bare label."
  },
  {
    id: "ASG-05",
    track: "AI for Social Good",
    trackId: "social",
    trackCode: "ASG",
    number: 5,
    title: "AI Digital Assistant for Elderly Users with Natural-Language Task Assistance",
    problem: "Digital services assume comfort with apps, menus and forms that many elderly users do not have.",
    solution: "Build an assistant that accepts plain spoken instructions and completes tasks like reminders, bill queries, calls and appointment booking. The interface should be voice-first, patient and forgiving of unclear phrasing.",
    outcome: "Safety features should protect against scams and accidental actions."
  },
  {
    id: "ASG-06",
    track: "AI for Social Good",
    trackId: "social",
    trackCode: "ASG",
    number: 6,
    title: "Intelligent Emergency Information Prioritization and Multi-Channel Alert System",
    problem: "During emergencies, responders drown in unstructured reports and cannot tell what matters first.",
    solution: "Build a system that ingests reports from multiple channels, removes duplicates and ranks incidents by severity and urgency. It should dispatch alerts through the channel most likely to reach each recipient.",
    outcome: "Location clustering should reveal where the crisis is concentrated."
  },
  {
    id: "ASG-07",
    track: "AI for Social Good",
    trackId: "social",
    trackCode: "ASG",
    number: 7,
    title: "AI-Based Rural Service Discovery and Personalized Assistance Platform",
    problem: "Rural users often do not know which schemes, services or facilities they are eligible for.",
    solution: "Build a platform that takes a user's situation in their own words and identifies relevant services nearby. It should explain eligibility, required documents and the application process in simple local language.",
    outcome: "Offline or low-bandwidth operation matters for real adoption."
  },
  {
    id: "ASG-08",
    track: "AI for Social Good",
    trackId: "social",
    trackCode: "ASG",
    number: 8,
    title: "AI-Based Speech and Sign Language Communication Assistance System",
    problem: "Communication between sign language users and speakers usually requires a human interpreter.",
    solution: "Build a system that translates between sign language, speech and text in near real time. It should handle continuous signing rather than isolated letters, and speak or display the result clearly.",
    outcome: "Latency and accuracy trade-offs must be handled for live conversation."
  },
  {
    id: "ASG-09",
    track: "AI for Social Good",
    trackId: "social",
    trackCode: "ASG",
    number: 9,
    title: "AI-Powered Job Matching, Resume Intelligence and Skill-Gap Analysis Platform",
    problem: "Keyword-based job portals reject capable candidates and flood recruiters with poor matches.",
    solution: "Build a platform that understands a resume semantically and matches it to roles by actual capability. It should tell the candidate exactly which skills are missing for a target job and how to close the gap.",
    outcome: "Bias in matching must be actively checked and reduced."
  },
  {
    id: "ASG-10",
    track: "AI for Social Good",
    trackId: "social",
    trackCode: "ASG",
    number: 10,
    title: "AI-Based Community Problem Detection, Clustering and Solution Prioritization System",
    problem: "Civic complaints are recorded individually, so systemic problems stay invisible.",
    solution: "Build a system that collects community reports, clusters them into underlying issues and ranks them by impact and affected population. It should suggest and prioritize interventions with expected benefit.",
    outcome: "Authorities get an evidence-based priority list instead of a complaint queue."
  },
  {
    id: "ASG-11",
    track: "AI for Social Good",
    trackId: "social",
    trackCode: "ASG",
    number: 11,
    title: "Intelligent Financial Information Analysis and Personalized Explanation Platform",
    problem: "Loan terms, insurance policies and investment documents are written in language most people cannot decode.",
    solution: "Build a platform that reads a financial document and explains its real implications in plain language. It should highlight hidden charges, penalties and risk in the user's context.",
    outcome: "The system must inform rather than advise on specific products."
  },
  {
    id: "ASG-12",
    track: "AI for Social Good",
    trackId: "social",
    trackCode: "ASG",
    number: 12,
    title: "AI-Based Support Resource Discovery and Context-Aware Recommendation System",
    problem: "People in difficulty often do not know that help exists or which one fits them.",
    solution: "Build a system that understands a person's described situation and recommends relevant support resources — counselling, legal aid, shelters, helplines. Recommendations should account for location, language, cost and urgency.",
    outcome: "Sensitive handling and privacy are non-negotiable requirements."
  },
  {
    id: "ASG-13",
    track: "AI for Social Good",
    trackId: "social",
    trackCode: "ASG",
    number: 13,
    title: "AI-Based Government Service Query Understanding and Guidance Platform",
    problem: "Citizens abandon government processes because procedures and documents are unclear.",
    solution: "Build a platform that interprets a citizen's question and maps it to the correct scheme, form and office. It should walk the user through required documents, fees, timelines and next steps.",
    outcome: "Answers must be grounded in official sources and updated when rules change."
  },
  {
    id: "ASG-14",
    track: "AI for Social Good",
    trackId: "social",
    trackCode: "ASG",
    number: 14,
    title: "AI-Powered Educational Accessibility and Personalized Learning Assistance System",
    problem: "Learners with disabilities or from disadvantaged backgrounds face content designed without them in mind.",
    solution: "Build a system that adapts educational material to each learner's access needs and pace. It should support alternative formats, simplified language, extra scaffolding and flexible assessment.",
    outcome: "Learning outcomes, not just access, should be measured."
  },
  {
    id: "ASG-15",
    track: "AI for Social Good",
    trackId: "social",
    trackCode: "ASG",
    number: 15,
    title: "AI-Based Social Issue Detection, Trend Analysis and Decision-Support Platform",
    problem: "Emerging social problems are noticed late, after they become crises.",
    solution: "Build a platform that analyses public data sources to detect rising social issues and track how they evolve. It should distinguish genuine trends from noise and identify affected regions and groups.",
    outcome: "Output should support policy and NGO decisions with evidence."
  },

  // -------------------------------------------------------------
  // 4. Healthcare & Medical Innovation
  // -------------------------------------------------------------
  {
    id: "HMI-01",
    track: "Healthcare & Medical Innovation",
    trackId: "healthcare",
    trackCode: "HMI",
    number: 1,
    title: "AI-Based Multi-Parameter Health Risk Prediction and Early Warning Platform",
    problem: "Health deterioration shows up across several parameters long before it becomes an emergency.",
    solution: "Build a platform that combines vitals, lab results, history and lifestyle data to predict risk of specific conditions. It should issue graded early warnings with the factors driving the prediction.",
    outcome: "Clinicians must be able to inspect and override the reasoning."
  },
  {
    id: "HMI-02",
    track: "Healthcare & Medical Innovation",
    trackId: "healthcare",
    trackCode: "HMI",
    number: 2,
    title: "Intelligent Hospital Queue Prediction and Patient Flow Optimization System",
    problem: "Outpatient waiting rooms overflow while some departments sit idle.",
    solution: "Build a system that predicts patient arrivals and consultation durations by department and time. It should optimize sequencing, staffing and room allocation to reduce waiting time.",
    outcome: "Patients should receive realistic wait estimates instead of open-ended waiting."
  },
  {
    id: "HMI-03",
    track: "Healthcare & Medical Innovation",
    trackId: "healthcare",
    trackCode: "HMI",
    number: 3,
    title: "AI-Based Medication Adherence Prediction and Personalized Reminder Platform",
    problem: "Treatment fails often because patients stop taking medicines correctly.",
    solution: "Build a platform that predicts which patients are likely to miss doses based on regimen complexity, history and side effects. Reminders should adapt in timing, channel and tone to the individual.",
    outcome: "Caregivers or doctors should be alerted when adherence risk becomes serious."
  },
  {
    id: "HMI-04",
    track: "Healthcare & Medical Innovation",
    trackId: "healthcare",
    trackCode: "HMI",
    number: 4,
    title: "Medical Document Intelligence and Automated Patient Information Extraction System",
    problem: "Prescriptions, discharge summaries and lab reports hold vital data trapped in unstructured formats.",
    solution: "Build a system that extracts structured information — diagnoses, medicines, dosages, values — from scanned or typed medical documents. It should normalize terminology and flag low-confidence extractions for human review.",
    outcome: "Extracted data should be exportable into patient records."
  },
  {
    id: "HMI-05",
    track: "Healthcare & Medical Innovation",
    trackId: "healthcare",
    trackCode: "HMI",
    number: 5,
    title: "AI-Based Emergency Case Prioritization and Healthcare Resource Allocation Platform",
    problem: "In a crowded emergency department, delays in triage cost lives.",
    solution: "Build a platform that assesses incoming cases on symptoms and vitals and assigns a priority level. It should simultaneously allocate beds, staff and equipment based on current load.",
    outcome: "Reprioritization must happen automatically as patient conditions change."
  },
  {
    id: "HMI-06",
    track: "Healthcare & Medical Innovation",
    trackId: "healthcare",
    trackCode: "HMI",
    number: 6,
    title: "Secure Medical Record Access with Anomaly and Unauthorized Access Detection",
    problem: "Patient records are frequently accessed by staff with no clinical reason to view them.",
    solution: "Build a system that enforces role-based access and monitors every access event for abnormal behaviour. It should detect patterns like bulk access, off-hours viewing or unrelated-department access and raise alerts.",
    outcome: "A tamper-evident audit trail must support investigation."
  },
  {
    id: "HMI-07",
    track: "Healthcare & Medical Innovation",
    trackId: "healthcare",
    trackCode: "HMI",
    number: 7,
    title: "AI-Based Patient-Doctor Consultation Summarization and Follow-Up Intelligence System",
    problem: "Patients forget most of what is said in a consultation, and doctors lose time on documentation.",
    solution: "Build a system that turns a consultation into an accurate clinical summary and a plain-language patient version. It should extract instructions, prescriptions and follow-up dates automatically.",
    outcome: "Consent and accuracy verification must be built in."
  },
  {
    id: "HMI-08",
    track: "Healthcare & Medical Innovation",
    trackId: "healthcare",
    trackCode: "HMI",
    number: 8,
    title: "Predictive Hospital Readmission Risk Analysis and Preventive Follow-Up Platform",
    problem: "A large share of readmissions is preventable with the right follow-up.",
    solution: "Build a platform that scores readmission risk at discharge using diagnosis, comorbidities, social factors and prior history. It should generate a targeted follow-up plan for high-risk patients.",
    outcome: "Outcomes should be tracked to refine the model over time."
  },
  {
    id: "HMI-09",
    track: "Healthcare & Medical Innovation",
    trackId: "healthcare",
    trackCode: "HMI",
    number: 9,
    title: "AI-Based Medical Information Retrieval and Context-Aware Simplification System",
    problem: "Reliable medical information exists but is written for clinicians, not patients.",
    solution: "Build a system that retrieves accurate medical information and rewrites it at the reader's level of understanding. Simplification must not distort clinical meaning or imply a diagnosis.",
    outcome: "Every answer should cite its source and encourage professional consultation."
  },
  {
    id: "HMI-10",
    track: "Healthcare & Medical Innovation",
    trackId: "healthcare",
    trackCode: "HMI",
    number: 10,
    title: "Post-Hospitalization Recovery Monitoring and Risk Prediction Platform",
    problem: "Once discharged, patients are largely unmonitored until something goes wrong.",
    solution: "Build a platform that tracks recovery through symptom check-ins, vitals and wearable data. It should detect deviations from the expected recovery path and predict complications early.",
    outcome: "Alerts should reach the care team with enough context to act."
  },
  {
    id: "HMI-11",
    track: "Healthcare & Medical Innovation",
    trackId: "healthcare",
    trackCode: "HMI",
    number: 11,
    title: "AI-Based Appointment No-Show Prediction and Dynamic Scheduling System",
    problem: "No-shows waste clinician time and block slots other patients needed.",
    solution: "Build a system that predicts no-show probability per appointment from history, distance, lead time and appointment type. It should use those predictions to overbook intelligently and send targeted reminders.",
    outcome: "Waitlisted patients should be offered released slots automatically."
  },
  {
    id: "HMI-12",
    track: "Healthcare & Medical Innovation",
    trackId: "healthcare",
    trackCode: "HMI",
    number: 12,
    title: "Intelligent Patient Record Deduplication and Data Quality Management System",
    problem: "The same patient often exists several times in a hospital database under slightly different details.",
    solution: "Build a system that detects and merges duplicate records despite spelling variations, missing fields and inconsistent formats. It should score match confidence and route uncertain cases for human confirmation.",
    outcome: "Ongoing data quality checks should prevent new duplicates."
  },
  {
    id: "HMI-13",
    track: "Healthcare & Medical Innovation",
    trackId: "healthcare",
    trackCode: "HMI",
    number: 13,
    title: "AI-Based Clinical Workflow Bottleneck Detection and Process Optimization Platform",
    problem: "Hospitals know processes are slow but not exactly where time is lost.",
    solution: "Build a platform that reconstructs actual patient journeys from timestamped events and locates bottleneck steps. It should quantify delay cost and simulate the effect of proposed changes.",
    outcome: "Recommendations must be specific to a step, shift or department."
  },
  {
    id: "HMI-14",
    track: "Healthcare & Medical Innovation",
    trackId: "healthcare",
    trackCode: "HMI",
    number: 14,
    title: "Secure Healthcare Data Sharing with Fine-Grained Access Control and Audit Analytics",
    problem: "Sharing records between hospitals, labs and insurers usually means sharing far more than necessary.",
    solution: "Build a system that allows sharing at field level, with patient consent and time-bound access. Every access must be logged in a tamper-evident audit trail with analytics over usage.",
    outcome: "Revocation of access should be immediate and verifiable."
  },
  {
    id: "HMI-15",
    track: "Healthcare & Medical Innovation",
    trackId: "healthcare",
    trackCode: "HMI",
    number: 15,
    title: "AI-Based Patient Feedback Analysis and Healthcare Service Improvement Platform",
    problem: "Feedback forms are collected in volume and read by no one.",
    solution: "Build a platform that analyses free-text patient feedback to extract themes, sentiment and specific service failures. It should link issues to departments and rank them by frequency and severity.",
    outcome: "Administrators get a prioritized improvement list with tracking of whether fixes worked."
  }
];
