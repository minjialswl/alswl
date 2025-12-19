const worksToggle = document.getElementById('works-toggle');
const worksList = document.getElementById('works-list');
const workItems = document.querySelectorAll('.work-item');
const workDisplay = document.getElementById('work-display');
const workCaption = document.getElementById('work-caption');
const firstScreenImg = document.getElementById('first-screen-img');

worksToggle.addEventListener('click', () => {
  worksList.classList.toggle('show');
});

workItems.forEach(item => {
  item.addEventListener('click', () => {
    firstScreenImg.style.display = 'none';

    workDisplay
      .querySelectorAll('.work-img-item, .video-wrapper')
      .forEach(el => el.remove());

    const videoSrc = item.getAttribute('data-video');
    if (videoSrc) {
      const videoWrapper = document.createElement('div');
      videoWrapper.className = 'video-wrapper';

      const iframe = document.createElement('iframe');
      iframe.src = videoSrc;
      iframe.allow =
        'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      iframe.allowFullscreen = true;

      videoWrapper.appendChild(iframe);
      workDisplay.insertBefore(videoWrapper, workCaption);
    }

    const imgData = item.getAttribute('data-img');
    if (imgData) {
      imgData.split('|').forEach(src => {
        const img = document.createElement('img');
        img.src = src.trim();
        img.className = 'work-img-item';
        img.loading = 'lazy';
        workDisplay.insertBefore(img, workCaption);
      });
    }

    const captionText = item.getAttribute('data-caption');
    workCaption.textContent = captionText || '';
    workCaption.style.display = captionText ? 'block' : 'none';
  });
});

document
  .getElementById('top-left-link')
  .addEventListener('click', e => {
    e.preventDefault();
    location.reload();
  });

const langLinks = document.querySelectorAll('.lang-switch a');

langLinks.forEach(link => {
  const path = location.pathname.replace(/^\/alswl\/(ko|en)/, '');
  link.href = `/alswl/${link.textContent}${path}`;
});

// ----------------------
// works list 자동 생성
// ----------------------

const worksListEl = document.getElementById('works-list');

// 현재 언어 판별 (URL 기준)
const currentLang = location.pathname.includes('/en/') ? 'en' : 'ko';

WORKS.forEach(work => {
  const item = document.createElement('div');
  item.className = 'work-item';

  // 제목
  item.textContent = work.title[currentLang];

  // 이미지 데이터
  if (work.images && work.images.length) {
    item.setAttribute('data-img', work.images.join('|'));
  }

  // 비디오 데이터
  if (work.video) {
    item.setAttribute('data-video', work.video);
  }

  // 캡션
  if (work.caption && work.caption[currentLang]) {
    item.setAttribute('data-caption', work.caption[currentLang]);
  }

  worksListEl.appendChild(item);
});

