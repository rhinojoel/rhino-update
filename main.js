// Carousel prev/next buttons
document.querySelectorAll('[data-carousel]').forEach((section) => {
  const track = section.querySelector('.track');
  if (!track) return;
  const step = () => Math.max(track.clientWidth * 0.8, 280);
  section.querySelector('[data-prev]')?.addEventListener('click', () => track.scrollBy({ left: -step(), behavior: 'smooth' }));
  section.querySelector('[data-next]')?.addEventListener('click', () => track.scrollBy({ left: step(), behavior: 'smooth' }));
});

// Level of cover buttons
const levels = document.querySelectorAll('#levels .level');
const quoteBtn = document.getElementById('quote-btn');
levels.forEach((b) => b.addEventListener('click', () => {
  levels.forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
  if (quoteBtn) quoteBtn.textContent = 'Add to quote';
}));
