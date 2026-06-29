// Data helpers
function getApps() {
  return JSON.parse(localStorage.getItem('intrack_apps') || '[]');
}
function saveApps(apps) {
  localStorage.setItem('intrack_apps', JSON.stringify(apps));
}

// Stats
function updateStats(apps) {
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('stat-total',       apps.length);
  set('stat-shortlisted', apps.filter(a => a.status === 'Shortlisted').length);
  set('stat-interview',   apps.filter(a => a.status === 'Interview').length);
  set('stat-offer',       apps.filter(a => a.status === 'Offer').length);
  set('stat-rejected',    apps.filter(a => a.status === 'Rejected').length);
}

// Status badge HTML
function statusBadge(status) {
  const map = {
    'Applied':     'badge-applied',
    'Shortlisted': 'badge-shortlisted',
    'Interview':   'badge-interview',
    'Offer':       'badge-offer',
    'Rejected':    'badge-rejected'
  };
  return `<span class="badge ${map[status] || 'badge-applied'}">${status}</span>`;
}

// Format date
function formatDate(d) {
  if (!d) return '—';
  const [y, m, day] = d.split('-');
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return `${day} ${months[+m - 1]} ${y}`;
}

// Toast notification
function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}
