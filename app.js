/* ========================================
   AdaptLearn — App Logic
   Handles before/after dashboard rendering
   ======================================== */

// State
let currentMode = 'before'; // 'before' or 'after'
let currentPersona = 'visual'; // 'visual', 'text', 'struggling'

// ========================================
// GENERIC (BEFORE) DASHBOARD DATA
// ========================================
const genericDashboard = {
  welcome: {
    title: 'Welcome, Student!',
    subtitle: 'Here is your learning overview for today.',
  },
  user: { name: 'Student', avatar: '👤', notifs: 3 },
  cards: [
    {
      type: 'courses',
      icon: '📚',
      title: 'My Courses',
      badge: { label: 'Standard', class: 'badge-generic' },
      desc: 'All enrolled courses listed alphabetically.',
      courses: [
        { icon: '➗', name: 'Mathematics', meta: 'Chapter 5 — Algebra', progress: '45%' },
        { icon: '🔬', name: 'Science', meta: 'Chapter 3 — Motion', progress: '30%' },
        { icon: '📖', name: 'English Literature', meta: 'Chapter 7 — Poetry', progress: '60%' },
        { icon: '🖥️', name: 'Computer Science', meta: 'Chapter 2 — Data Types', progress: '55%' },
        { icon: '🌍', name: 'History', meta: 'Chapter 4 — Independence', progress: '40%' },
      ]
    },
    {
      type: 'stats',
      icon: '📊',
      title: 'Overall Progress',
      badge: { label: 'Standard', class: 'badge-generic' },
      desc: 'Your general performance metrics.',
      stats: [
        { icon: '📈', value: '46%', label: 'Average Score' },
        { icon: '⏱️', value: '2.3h', label: 'Daily Study Time' },
        { icon: '🏆', value: '12', label: 'Assignments Done' },
      ]
    },
    {
      type: 'schedule',
      icon: '📅',
      title: 'Today\'s Schedule',
      badge: { label: 'Fixed', class: 'badge-generic' },
      desc: 'Standard fixed timetable for all students.',
      schedule: [
        { time: '9:00', event: 'Mathematics Lecture', type: 'Lecture' },
        { time: '10:30', event: 'Science Lab Session', type: 'Lab' },
        { time: '12:00', event: 'English Class', type: 'Lecture' },
        { time: '14:00', event: 'CS Assignment Due', type: 'Deadline' },
        { time: '15:30', event: 'History Discussion', type: 'Discussion' },
      ]
    },
    {
      type: 'announcements',
      icon: '📢',
      title: 'Announcements',
      badge: { label: 'General', class: 'badge-generic' },
      desc: 'Same announcements shown to all students.',
      items: [
        '📌 Mid-term exams start from March 1st',
        '📌 Library hours extended till 8 PM',
        '📌 Submit all pending assignments by Friday',
        '📌 Guest lecture on AI in Education — Feb 15',
      ]
    },
    {
      type: 'resources',
      icon: '🔗',
      title: 'Learning Resources',
      badge: { label: 'Default', class: 'badge-generic' },
      desc: 'Generic resource list — same for everyone.',
      items: [
        '📄 Textbook PDFs (All subjects)',
        '📄 Previous year question papers',
        '📄 General study tips document',
        '📄 Reference links compilation',
      ]
    },
    {
      type: 'deadlines',
      icon: '⏰',
      title: 'Upcoming Deadlines',
      badge: { label: 'Standard', class: 'badge-generic' },
      desc: 'Fixed deadlines for all students.',
      items: [
        '🔴 Feb 14 — Math Assignment due',
        '🟡 Feb 18 — Science Project submission',
        '🟡 Feb 20 — English Essay',
        '🟢 Feb 25 — CS Lab Report',
      ]
    },
  ]
};

// ========================================
// PERSONALIZED (AFTER) DASHBOARD DATA
// ========================================
const personalizedDashboards = {
  visual: {
    welcome: {
      title: 'Good evening, Priya! 🌙',
      subtitle: 'Your AI tutor has prepared tonight\'s personalized study plan. You learn best with videos — here\'s what we found.',
    },
    user: { name: 'Priya', avatar: '🎨', notifs: 5 },
    cards: [
      {
        type: 'ai-rec',
        icon: '🤖',
        title: 'AI Recommendations for You',
        badge: { label: '✨ AI Powered', class: 'badge-ai' },
        desc: 'Based on your visual learning style and recent quiz performance:',
        isAI: true,
        items: [
          '🎬 Watch: "Algebra Made Visual" — animated explainer (12 min)',
          '🖼️ Infographic: Newton\'s Laws in 1 page',
          '🎨 Interactive Diagram: Data flow in Programming',
          '🧩 Visual Quiz: Match the formula to the graph',
        ]
      },
      {
        type: 'courses',
        icon: '📚',
        title: 'Your Priority Courses',
        badge: { label: '✨ Personalized', class: 'badge-ai' },
        desc: 'Sorted by where you need the most help. Video content prioritized.',
        courses: [
          { icon: '🎬', name: 'Mathematics — Visual Algebra', meta: '🔴 Struggling — Watch video first', progress: '28%' },
          { icon: '🎬', name: 'Science — Motion Animations', meta: '🟡 Improving — 2 videos left', progress: '52%' },
          { icon: '📖', name: 'English Literature', meta: '🟢 On track', progress: '60%' },
          { icon: '🎬', name: 'Computer Science — Visual IDE', meta: '🟢 Strong — Unlock advanced', progress: '78%' },
        ]
      },
      {
        type: 'revision',
        icon: '🔄',
        title: 'Quick Revision Cards',
        badge: { label: '✨ AI Generated', class: 'badge-ai' },
        desc: 'Visual flashcards for your weak topics.',
        isAI: true,
        revisions: [
          { topic: 'Quadratic Equations', score: 'Score: 32% → Need review', level: 'weak' },
          { topic: 'Chemical Bonding', score: 'Score: 48% → Improving', level: 'medium' },
          { topic: 'Grammar Rules', score: 'Score: 72% → Almost there', level: 'strong' },
          { topic: 'Loop Structures', score: 'Score: 85% → Mastered!', level: 'strong' },
        ]
      },
      {
        type: 'schedule',
        icon: '📅',
        title: 'Your Smart Schedule',
        badge: { label: '✨ Adapted', class: 'badge-ai' },
        desc: 'Optimized for your night-owl study pattern.',
        schedule: [
          { time: '18:00', event: '🎬 Visual Algebra Session', type: 'Video' },
          { time: '19:30', event: '🧩 Interactive Science Quiz', type: 'Practice' },
          { time: '21:00', event: '📖 English Reading (Light)', type: 'Reading' },
          { time: '22:00', event: '💻 CS Coding Challenge', type: 'Hands-on' },
          { time: '23:00', event: '🔄 Quick Revision Cards', type: 'Review' },
        ]
      },
      {
        type: 'stats',
        icon: '📊',
        title: 'Your Learning Insights',
        badge: { label: '✨ Analytics', class: 'badge-ai' },
        desc: 'AI-tracked performance trends this week.',
        stats: [
          { icon: '📈', value: '62%', label: 'Avg Score (↑8%)' },
          { icon: '🎬', value: '4.1h', label: 'Video Time/Day' },
          { icon: '🎯', value: '89%', label: 'Engagement Rate' },
        ]
      },
      {
        type: 'deadlines',
        icon: '⏰',
        title: 'Smart Deadlines',
        badge: { label: '✨ Adapted', class: 'badge-ai' },
        desc: 'Adjusted to your evening study pattern.',
        items: [
          '🔴 Tonight 11 PM — Math Visual Quiz (easy start)',
          '🟡 Feb 14 — Science Animation Project',
          '🟢 Feb 18 — English Essay (draft ready)',
          '🟢 Feb 22 — CS Visual Diagram',
        ]
      },
    ]
  },

  text: {
    welcome: {
      title: 'Good morning, Arjun! ☀️',
      subtitle: 'Your deep-reading plan is ready. We\'ve curated article-based content matching your analytical style.',
    },
    user: { name: 'Arjun', avatar: '📚', notifs: 4 },
    cards: [
      {
        type: 'ai-rec',
        icon: '🤖',
        title: 'AI Reading Recommendations',
        badge: { label: '✨ AI Powered', class: 'badge-ai' },
        desc: 'Based on your text-based learning preference and strong analytical skills:',
        isAI: true,
        items: [
          '📄 Deep Dive: "Advanced Algebra — Theory & Proofs" (25 min read)',
          '📝 Research Summary: Newton\'s Laws — Full Derivations',
          '📖 Article: "Data Structures Explained" with code snippets',
          '📑 Practice: Written problem sets with solutions',
        ]
      },
      {
        type: 'courses',
        icon: '📚',
        title: 'Your Priority Courses',
        badge: { label: '✨ Personalized', class: 'badge-ai' },
        desc: 'Sorted by relevance. Article & text content prioritized.',
        courses: [
          { icon: '📄', name: 'Mathematics — Detailed Notes', meta: '🟢 Strong — Advanced problems', progress: '75%' },
          { icon: '📄', name: 'Science — Research Articles', meta: '🟢 On track — Lab reports pending', progress: '65%' },
          { icon: '📖', name: 'English Literature — Analysis', meta: '🟢 Excelling — Critical essays', progress: '82%' },
          { icon: '📄', name: 'CS — Technical Documentation', meta: '🟡 Needs practical work', progress: '50%' },
        ]
      },
      {
        type: 'revision',
        icon: '🔄',
        title: 'Theory Revision Notes',
        badge: { label: '✨ AI Generated', class: 'badge-ai' },
        desc: 'Detailed summaries for quick theory revision.',
        isAI: true,
        revisions: [
          { topic: 'Practical Lab Skills', score: 'Score: 38% → Needs hands-on work', level: 'weak' },
          { topic: 'Physics Numericals', score: 'Score: 55% → Practice more', level: 'medium' },
          { topic: 'Literary Analysis', score: 'Score: 91% → Excellent!', level: 'strong' },
          { topic: 'Algorithm Theory', score: 'Score: 88% → Very Strong', level: 'strong' },
        ]
      },
      {
        type: 'schedule',
        icon: '📅',
        title: 'Your Smart Schedule',
        badge: { label: '✨ Adapted', class: 'badge-ai' },
        desc: 'Optimized for your early-morning focus hours.',
        schedule: [
          { time: '06:00', event: '📖 Deep Reading — Algebra Theory', type: 'Reading' },
          { time: '07:30', event: '📝 Written Problem Practice', type: 'Practice' },
          { time: '09:00', event: '📄 Science Article Review', type: 'Reading' },
          { time: '10:30', event: '💻 CS Documentation Study', type: 'Study' },
          { time: '12:00', event: '✍️ Essay Writing Session', type: 'Writing' },
        ]
      },
      {
        type: 'stats',
        icon: '📊',
        title: 'Your Learning Insights',
        badge: { label: '✨ Analytics', class: 'badge-ai' },
        desc: 'AI-tracked performance based on reading engagement.',
        stats: [
          { icon: '📈', value: '74%', label: 'Avg Score (↑5%)' },
          { icon: '📖', value: '3.8h', label: 'Reading Time/Day' },
          { icon: '🎯', value: '92%', label: 'Comprehension' },
        ]
      },
      {
        type: 'deadlines',
        icon: '⏰',
        title: 'Smart Deadlines',
        badge: { label: '✨ Adapted', class: 'badge-ai' },
        desc: 'Aligned with your morning productivity peak.',
        items: [
          '🔴 Tomorrow 8 AM — Math Theory Quiz',
          '🟡 Feb 15 — Science Lab Report',
          '🟢 Feb 18 — English Critical Essay',
          '🟢 Feb 22 — CS Written Analysis',
        ]
      },
    ]
  },

  struggling: {
    welcome: {
      title: 'Hi Sneha! 👋 You\'re doing great!',
      subtitle: 'Don\'t worry — your AI tutor has simplified today\'s plan. Small steps lead to big progress! 💪',
    },
    user: { name: 'Sneha', avatar: '💪', notifs: 7 },
    cards: [
      {
        type: 'ai-rec',
        icon: '🆘',
        title: 'Your Support Plan',
        badge: { label: '✨ AI Support', class: 'badge-urgent' },
        desc: 'We\'ve detected you\'re finding these topics difficult. Here\'s simplified help:',
        isAI: true,
        items: [
          '🟢 Start Easy: "What is Algebra?" — 5 min simplified video',
          '🟢 Step-by-step: Solving your first equation (with hints)',
          '🟢 Mini Quiz: 5 basic questions (no pressure, no grading)',
          '💬 Schedule a 1-on-1 session with a peer tutor',
        ]
      },
      {
        type: 'courses',
        icon: '📚',
        title: 'Focus Courses (Simplified)',
        badge: { label: '✨ Simplified', class: 'badge-urgent' },
        desc: 'We\'ve reduced your workload to focus on fundamentals first.',
        courses: [
          { icon: '🟢', name: 'Math Basics — Start Here', meta: '🔴 Needs attention — Easy mode on', progress: '15%' },
          { icon: '🟢', name: 'Science Fundamentals', meta: '🔴 Simplified explanations ready', progress: '20%' },
          { icon: '🟡', name: 'English Basics', meta: '🟡 Some progress — Keep going!', progress: '35%' },
        ]
      },
      {
        type: 'revision',
        icon: '🔄',
        title: 'Quick Revision (Easy Mode)',
        badge: { label: '✨ Simplified', class: 'badge-urgent' },
        desc: 'Bite-sized revision cards with simple explanations.',
        isAI: true,
        revisions: [
          { topic: 'Basic Addition & Subtraction', score: 'Mastery: 40% → Let\'s practice!', level: 'weak' },
          { topic: 'What is Force?', score: 'Mastery: 35% → Watch explainer', level: 'weak' },
          { topic: 'Sentence Formation', score: 'Mastery: 55% → Getting better!', level: 'medium' },
          { topic: 'Using a Computer', score: 'Mastery: 65% → Nice progress!', level: 'strong' },
        ]
      },
      {
        type: 'schedule',
        icon: '📅',
        title: 'Your Gentle Schedule',
        badge: { label: '✨ Relaxed Pace', class: 'badge-ai' },
        desc: 'Shorter sessions with breaks. Adapted for evening study.',
        schedule: [
          { time: '16:00', event: '🟢 Easy Math — 20 min only', type: 'Easy' },
          { time: '16:30', event: '☕ Break + Relax', type: 'Break' },
          { time: '17:00', event: '🟢 Fun Science Video', type: 'Video' },
          { time: '17:30', event: '☕ Break + Snack', type: 'Break' },
          { time: '18:00', event: '📖 Light English Reading', type: 'Reading' },
        ]
      },
      {
        type: 'stats',
        icon: '📊',
        title: 'Your Progress (Celebrating Wins!)',
        badge: { label: '✨ Encouraging', class: 'badge-new' },
        desc: 'Every small step counts — look how far you\'ve come!',
        stats: [
          { icon: '⭐', value: '5 day', label: 'Study Streak! 🔥' },
          { icon: '📈', value: '+12%', label: 'Score Improvement' },
          { icon: '💪', value: '3', label: 'Topics Improving' },
        ]
      },
      {
        type: 'deadlines',
        icon: '⏰',
        title: 'Extended Deadlines',
        badge: { label: '✨ Extended', class: 'badge-new' },
        desc: 'AI has extended your deadlines — focus on understanding, not rushing.',
        items: [
          '🟢 Feb 18 — Math Basics (extended from Feb 14)',
          '🟢 Feb 22 — Science Fundamentals (extended)',
          '🟢 Feb 25 — English Exercise (no rush)',
          '💬 Talk to tutor anytime',
        ]
      },
    ]
  },
};

// ========================================
// RENDERING FUNCTIONS
// ========================================

function renderCard(card, index) {
  const delay = index * 0.1;
  let content = '';

  if (card.type === 'courses') {
    content = `<ul class="course-list">
      ${card.courses.map(c => `
        <li class="course-item">
          <span class="course-icon">${c.icon}</span>
          <div class="course-info">
            <div class="course-name">${c.name}</div>
            <div class="course-meta">${c.meta}</div>
          </div>
          <span class="course-progress">${c.progress}</span>
        </li>
      `).join('')}
    </ul>`;
  }

  else if (card.type === 'stats') {
    content = `<div style="display:flex;flex-direction:column;gap:0.75rem;">
      ${card.stats.map(s => `
        <div class="stat-widget">
          <span class="stat-widget-icon">${s.icon}</span>
          <div>
            <div class="stat-widget-value">${s.value}</div>
            <div class="stat-widget-label">${s.label}</div>
          </div>
        </div>
      `).join('')}
    </div>`;
  }

  else if (card.type === 'schedule') {
    content = `<div class="schedule-list">
      ${card.schedule.map(s => `
        <div class="schedule-item">
          <span class="schedule-time">${s.time}</span>
          <span class="schedule-event">${s.event}</span>
          <span class="schedule-type">${s.type}</span>
        </div>
      `).join('')}
    </div>`;
  }

  else if (card.type === 'ai-rec' || card.type === 'announcements' || card.type === 'resources' || card.type === 'deadlines') {
    const items = card.items || [];
    content = `<ul style="list-style:none;display:flex;flex-direction:column;gap:0.5rem;">
      ${items.map(item => `
        <li style="padding:0.6rem 0.75rem;background:var(--bg-surface);border-radius:var(--radius-sm);font-size:0.88rem;color:var(--text-secondary);">
          ${item}
        </li>
      `).join('')}
    </ul>`;
  }

  else if (card.type === 'revision') {
    content = `<div class="revision-grid">
      ${card.revisions.map(r => `
        <div class="revision-card ${r.level}">
          <div class="revision-topic">${r.topic}</div>
          <div class="revision-score">${r.score}</div>
        </div>
      `).join('')}
    </div>`;
  }

  const aiClass = card.isAI ? ' ai-rec' : '';

  return `
    <div class="dash-card${aiClass}" style="animation-delay: ${delay}s">
      <div class="card-header">
        <span class="card-icon">${card.icon}</span>
        <span class="card-badge ${card.badge.class}">${card.badge.label}</span>
      </div>
      <div class="card-title">${card.title}</div>
      <div class="card-desc">${card.desc}</div>
      ${content}
    </div>
  `;
}

function renderDashboard(data) {
  const grid = document.getElementById('dashboardGrid');
  grid.innerHTML = data.cards.map((card, i) => renderCard(card, i)).join('');

  // Update welcome
  document.getElementById('welcomeMsg').textContent = data.welcome.title;
  document.getElementById('welcomeSub').textContent = data.welcome.subtitle;
  document.getElementById('userName').textContent = data.user.name;
  document.getElementById('userAvatar').textContent = data.user.avatar;
  document.getElementById('notifBadge').textContent = data.user.notifs;
}

// ========================================
// NAVIGATION FUNCTIONS
// ========================================

function showDashboard(mode) {
  currentMode = mode;
  document.getElementById('hero').classList.add('hidden');
  document.getElementById('dashboard').classList.remove('hidden');

  const modeIndicator = document.getElementById('modeIndicator');
  const toggleBtn = document.getElementById('toggleBtn');

  if (mode === 'before') {
    // Show generic dashboard
    document.getElementById('persona-selector').classList.add('hidden');
    document.getElementById('comparison').classList.add('hidden');
    renderDashboard(genericDashboard);
    modeIndicator.className = 'mode-indicator generic';
    document.getElementById('modeText').textContent = 'Generic Mode — Same for all students';
    toggleBtn.textContent = 'Switch to AI-Personalized View ✨';
  } else {
    // Show persona selector + personalized dashboard
    document.getElementById('persona-selector').classList.remove('hidden');
    document.getElementById('comparison').classList.remove('hidden');
    renderDashboard(personalizedDashboards[currentPersona]);
    modeIndicator.className = 'mode-indicator ai';
    document.getElementById('modeText').textContent = `AI Personalized — Adapted for ${personalizedDashboards[currentPersona].user.name}`;
    toggleBtn.textContent = 'Switch to Generic View 📋';
    renderComparison();
  }

  // Scroll to dashboard
  document.getElementById('dashboard').scrollIntoView({ behavior: 'smooth' });
}

function selectPersona(persona) {
  currentPersona = persona;

  // Update active state
  document.querySelectorAll('.persona-card').forEach(card => {
    card.classList.toggle('active', card.dataset.persona === persona);
  });

  // Re-render dashboard
  renderDashboard(personalizedDashboards[persona]);
  const modeIndicator = document.getElementById('modeIndicator');
  modeIndicator.className = 'mode-indicator ai';
  document.getElementById('modeText').textContent = `AI Personalized — Adapted for ${personalizedDashboards[persona].user.name}`;

  renderComparison();

  // Scroll to dashboard
  document.getElementById('dashboard').scrollIntoView({ behavior: 'smooth' });
}

function toggleDashboard() {
  if (currentMode === 'before') {
    showDashboard('after');
  } else {
    showDashboard('before');
  }
}

function backToHero() {
  document.getElementById('hero').classList.remove('hidden');
  document.getElementById('dashboard').classList.add('hidden');
  document.getElementById('persona-selector').classList.add('hidden');
  document.getElementById('comparison').classList.add('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ========================================
// COMPARISON SECTION
// ========================================

function renderComparison() {
  const container = document.getElementById('comparisonContainer');
  const persona = personalizedDashboards[currentPersona];

  container.innerHTML = `
    <div class="comparison-panel before-panel">
      <span class="comparison-label before-label">❌ Before — Generic</span>
      <ul class="comparison-list">
        <li><span class="cross">✗</span> Same layout for every student</li>
        <li><span class="cross">✗</span> Courses listed alphabetically, not by need</li>
        <li><span class="cross">✗</span> Fixed schedule ignoring study habits</li>
        <li><span class="cross">✗</span> No content format preferences</li>
        <li><span class="cross">✗</span> Same deadlines regardless of pace</li>
        <li><span class="cross">✗</span> No identification of weak topics</li>
        <li><span class="cross">✗</span> Generic announcements for all</li>
        <li><span class="cross">✗</span> No AI-powered recommendations</li>
      </ul>
    </div>
    <div class="comparison-panel after-panel">
      <span class="comparison-label after-label">✅ After — AI Personalized (${persona.user.name})</span>
      <ul class="comparison-list">
        <li><span class="check">✓</span> Layout adapted to ${persona.user.name}'s learning style</li>
        <li><span class="check">✓</span> Courses prioritized by student's weak areas</li>
        <li><span class="check">✓</span> Schedule optimized for individual study patterns</li>
        <li><span class="check">✓</span> Content format matches preference (video/text/simplified)</li>
        <li><span class="check">✓</span> Deadlines adapted to learning pace</li>
        <li><span class="check">✓</span> Quick revision cards for struggling topics</li>
        <li><span class="check">✓</span> Personalized notifications and support</li>
        <li><span class="check">✓</span> AI recommendations based on performance data</li>
      </ul>
    </div>
  `;
}
