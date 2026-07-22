(function () {
  var CONSENT_KEY = 'kj_cookie_consent';
  if (localStorage.getItem(CONSENT_KEY)) return;

  var style = document.createElement('style');
  style.textContent = [
    '.cookie-banner {',
    '  position: fixed; left: 24px; right: 24px; bottom: 24px; z-index: 2000;',
    '  background: var(--dark); border: 1px solid rgba(176,122,94,0.3);',
    '  border-radius: 16px; padding: 24px 28px;',
    '  display: flex; align-items: center; justify-content: space-between;',
    '  gap: 24px; flex-wrap: wrap; box-shadow: 0 12px 40px rgba(0,0,0,0.35);',
    '  opacity: 0; transform: translateY(24px);',
    '  transition: opacity 0.5s ease, transform 0.5s ease;',
    '}',
    '.cookie-banner.show { opacity: 1; transform: translateY(0); }',
    '.cookie-banner-text {',
    '  font-family: \'DM Sans\', sans-serif; font-size: 14px; font-weight: 300;',
    '  line-height: 1.6; color: var(--body-dark); max-width: 560px; flex: 1; min-width: 240px;',
    '}',
    '.cookie-banner-actions { display: flex; gap: 12px; flex-shrink: 0; }',
    '.cookie-banner-actions button {',
    '  font-family: \'Montserrat\', sans-serif; font-size: 11px; font-weight: 600;',
    '  letter-spacing: 0.18em; text-transform: uppercase; padding: 12px 26px;',
    '  border-radius: 999px; cursor: pointer; transition: all 0.2s; white-space: nowrap;',
    '}',
    '.cookie-banner-accept { background: var(--copper); color: var(--dark); border: none; }',
    '.cookie-banner-accept:hover { background: #c4926e; }',
    '.cookie-banner-decline { background: transparent; color: var(--copper); border: 1.5px solid var(--copper); }',
    '.cookie-banner-decline:hover { background: var(--copper); color: var(--dark); }',
    '@media (max-width: 640px) {',
    '  .cookie-banner { left: 12px; right: 12px; bottom: 12px; padding: 20px; flex-direction: column; align-items: stretch; text-align: center; }',
    '  .cookie-banner-actions { justify-content: center; }',
    '  .cookie-banner-actions button { flex: 1; }',
    '}'
  ].join('\n');
  document.head.appendChild(style);

  var banner = document.createElement('div');
  banner.className = 'cookie-banner';
  banner.setAttribute('role', 'dialog');
  banner.setAttribute('aria-label', 'Cookie notice');
  banner.innerHTML = [
    '<div class="cookie-banner-text">We use cookies to improve your experience on our site. By continuing to browse, you agree to our use of cookies.</div>',
    '<div class="cookie-banner-actions">',
    '  <button type="button" class="cookie-banner-decline">Decline</button>',
    '  <button type="button" class="cookie-banner-accept">Accept</button>',
    '</div>'
  ].join('');
  document.body.appendChild(banner);

  setTimeout(function () { banner.classList.add('show'); }, 500);

  function dismiss(choice) {
    localStorage.setItem(CONSENT_KEY, choice);
    banner.classList.remove('show');
    setTimeout(function () { banner.remove(); }, 500);
  }

  banner.querySelector('.cookie-banner-accept').addEventListener('click', function () { dismiss('accepted'); });
  banner.querySelector('.cookie-banner-decline').addEventListener('click', function () { dismiss('declined'); });
})();
