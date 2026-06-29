// Simple auth using localStorage
const USERS = [{ username: 'admin', password: 'admin123' }];

function login() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const err = document.getElementById('login-error');

  const user = USERS.find(u => u.username === username && u.password === password);
  if (user) {
    localStorage.setItem('intrack_auth', JSON.stringify({ username, loggedIn: true }));
    window.location.href = 'pages/dashboard.html';
  } else {
    err.style.display = 'block';
  }
}

function logout() {
  localStorage.removeItem('intrack_auth');
  window.location.href = '../index.html';
}

function checkAuth() {
  const auth = JSON.parse(localStorage.getItem('intrack_auth') || '{}');
  if (!auth.loggedIn) {
    window.location.href = '../index.html';
  }
}
