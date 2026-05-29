/* ── null.po1nt audio — launch site main.js ─────────────────────────── */

/* ── ACTIVE NAV LINK ────────────────────────────────────────────────── */
(function () {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-center a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
})();

/* ── SCROLL-REVEAL ──────────────────────────────────────────────────── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.drop-card, .value-tile, .perk-tile, .quote-section').forEach(el => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});

/* ── CURSOR GLOW ────────────────────────────────────────────────────── */
const glow = document.createElement('div');
glow.style.cssText = `
  position:fixed;pointer-events:none;z-index:9999;
  width:320px;height:320px;border-radius:50%;
  background:radial-gradient(circle,rgba(168,159,212,0.04) 0%,transparent 70%);
  transform:translate(-50%,-50%);transition:opacity .3s;
`;
document.body.appendChild(glow);
document.addEventListener('mousemove', e => { glow.style.left = e.clientX + 'px'; glow.style.top = e.clientY + 'px'; });

/* ── SMOOTH ANCHOR SCROLL ───────────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});

/* ── TOAST ──────────────────────────────────────────────────────────── */
function showToast(title, message) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<strong>${title}</strong>${message}`;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 4500);
}

/* ── COMING-SOON EMAIL FORM ─────────────────────────────────────────── */
document.querySelectorAll('.cs-form').forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const input = form.querySelector('input');
    const email = (input.value || '').trim();
    if (!email.includes('@')) { input.focus(); return; }
    input.value = '';
    showToast('You\'re on the list ★', `We'll email ${email} as soon as we launch.`);
  });
});

/* ── BETA SIGNUP FORM ───────────────────────────────────────────────── */
const betaForm = document.getElementById('beta-form');
if (betaForm) {
  betaForm.addEventListener('submit', e => {
    e.preventDefault();
    const data = new FormData(betaForm);
    if (!data.get('email') || !data.get('email').includes('@')) {
      betaForm.querySelector('[name="email"]').focus(); return;
    }
    if (!data.get('agree')) {
      showToast('Almost there', 'Please confirm you\'re happy to provide feedback during the beta.');
      return;
    }
    betaForm.reset();
    showToast('Application received ★', 'We\'ll review and email you within 7 days about your beta slot.');
  });
}
