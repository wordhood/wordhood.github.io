const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

document.querySelectorAll('.video-preview').forEach(container => {
  const video = container.querySelector('video');
  const button = container.querySelector('.preview-toggle');
  if (!video || !button) return;

  let playbackRequested = false;
  let playbackRequest = 0;

  const updatePreview = playing => {
    video.classList.toggle('is-playing', playing);
    button.setAttribute('aria-pressed', String(playing));
    button.textContent = playing ? 'Pause preview' : 'Play preview';
  };

  const pausePreview = () => {
    playbackRequested = false;
    playbackRequest += 1;
    video.pause();
    updatePreview(false);
  };

  const playPreview = async () => {
    if (document.hidden) return;
    playbackRequested = true;
    const request = ++playbackRequest;

    try {
      await video.play();
      // Ignore an earlier request if the pointer left while the video loaded.
      if (request === playbackRequest) updatePreview(true);
    } catch {
      if (request === playbackRequest) pausePreview();
    }
  };

  button.hidden = false;
  button.addEventListener('click', () => {
    if (playbackRequested) pausePreview();
    else playPreview();
  });

  container.addEventListener('pointerenter', event => {
    if (event.pointerType === 'mouse' && !reducedMotion.matches) playPreview();
  });

  container.addEventListener('pointerleave', event => {
    if (event.pointerType === 'mouse') pausePreview();
  });

  container.addEventListener('focusout', event => {
    if (!container.contains(event.relatedTarget)) pausePreview();
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) pausePreview();
  });

  reducedMotion.addEventListener('change', pausePreview);
  video.addEventListener('error', pausePreview);

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      if (!entries[0].isIntersecting) pausePreview();
    });
    observer.observe(container);
  }
});
