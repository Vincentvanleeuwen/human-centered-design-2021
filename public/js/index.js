import "plyr";

document.addEventListener('DOMContentLoaded', () => {
  const selector = '#player';

  // Setup the player
  const player = new Plyr(selector, {
    debug: true,
    title: 'View From A Blue Moon',
    iconUrl: 'dist/demo.svg',
    keyboard: {
      global: true,
    },
    tooltips: {
      controls: true,
    },
    captions: {
      active: true,
    },
    previewThumbnails: {
      enabled: true,
      src: ['https://cdn.plyr.io/static/demo/thumbs/100p.vtt', 'https://cdn.plyr.io/static/demo/thumbs/240p.vtt'],
    },
    vimeo: {
      // Prevent Vimeo blocking plyr.io demo site
      referrerPolicy: 'no-referrer',
    },
  });

  // Expose for tinkering in the console
  window.player = player;
})
