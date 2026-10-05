// Relative URLs preserve the repository prefix on GitHub Pages.
async function loadNavigation() {
  const header = document.querySelector('#site-header');
  try {
    const response = await fetch('nav.html');
    if (!response.ok) throw new Error(`Navigation HTTP ${response.status}`);
    const html = await response.text();
    // The fragment is our own same-origin static file, never user input.
    header.innerHTML = html;
  } catch (error) {
    // Keep the working fallback navigation when offline or opened as a local file.
    console.warn('Shared navigation unavailable; fallback links retained.', error);
  }
  const current = location.pathname.split('/').pop() || 'index.html';
  for (const link of header.querySelectorAll('.nav-link')) {
    // Both a visible underline and aria-current identify the current page.
    if (link.getAttribute('href') === current) {
      link.setAttribute('aria-current', 'page');
      link.classList.add('active');
    }
  }
}
loadNavigation();
