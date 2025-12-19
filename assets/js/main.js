document.addEventListener('DOMContentLoaded', () => {

  const worksToggle = document.getElementById('works-toggle');
  const worksList = document.getElementById('works-list');
  const workDisplay = document.getElementById('work-display');
  const workCaption = document.getElementById('work-caption');
  const firstScreenImg = document.getElementById('first-screen-img');

  if (!worksToggle || !worksList) return;

  worksToggle.addEventListener('click', () => {
    worksList.classList.toggle('show');
  });

  WORKS.forEach(work => {
    const item = document.createElement('div');
    item.className = 'work-item';
    item.textContent = work.title;

    item.addEventListener('click', () => {
      if (firstScreenImg) firstScreenImg.style.display = 'none';

      workDisplay
        .querySelectorAll('.work-img-item, .video-wrapper')
        .forEach(el => el.remove());

      if (work.video) {
        const videoWrapper = document.createElement('div');
        videoWrapper.className = 'video-wrapper';

        const iframe = document.createElement('iframe');
        iframe.src = work.video;
        iframe.allowFullscreen = true;

        videoWrapper.appendChild(iframe);
        workDisplay.insertBefore(videoWrapper, workCaption);
      }

      work.imgs.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.className = 'work-img-item';
        img.loading = 'lazy';
        workDisplay.insertBefore(img, workCaption);
      });

      workCaption.textContent = work.caption || '';
      workCaption.style.display = work.caption ? 'block' : 'none';
    });

    worksList.appendChild(item);
  });

});
