//
//
// document.addEventListener('DOMContentLoaded', () => {
//   const selector = '#player';
//
//   // Setup the player
//   const player = new Plyr(selector, {
//     debug: true,
//     title: 'Westworld',
//     iconUrl: 'https://cdn.plyr.io/3.6.7/plyr.svg',
//     keyboard: {
//       global: true,
//     },
//     tooltips: {
//       controls: true,
//     },
//     captions: {
//       active: true,
//     },
//     previewThumbnails: {
//       enabled: true,
//       src: ['https://cdn.plyr.io/static/demo/thumbs/100p.vtt', 'https://cdn.plyr.io/static/demo/thumbs/240p.vtt'],
//     }
//   });
//
//   // Expose for tinkering in the console
//   window.player = player;
//
//   // const file = document.getElementById("player");
//   //
//   // const context = new AudioContext();
//   // const src = context.createMediaElementSource(file.src);
//   // const analyser = context.createAnalyser();
//   //
//   // const canvas = document.getElementById("canvas");
//   // canvas.width = window.innerWidth;
//   // canvas.height = window.innerHeight;
//   // const ctx = canvas.getContext("2d");
//   //
//   // src.connect(analyser);
//   // analyser.connect(context.destination);
//   //
//   // analyser.fftSize = 256;
//   //
//   // const bufferLength = analyser.frequencyBinCount;
//   // console.log(bufferLength);
//   //
//   // const dataArray = new Uint8Array(bufferLength);
//   //
//   // const WIDTH = canvas.width;
//   // const HEIGHT = canvas.height;
//   //
//   // const barWidth = (WIDTH / bufferLength) * 2.5;
//   // let barHeight;
//   // let x = 0;
//   //
//   // function renderFrame() {
//   //   requestAnimationFrame(renderFrame);
//   //
//   //   x = 0;
//   //
//   //   analyser.getByteFrequencyData(dataArray);
//   //
//   //   ctx.fillStyle = "#000";
//   //   ctx.fillRect(0, 0, WIDTH, HEIGHT);
//   //
//   //   for (const i = 0; i < bufferLength; i++) {
//   //     barHeight = dataArray[i];
//   //
//   //     const r = barHeight + (25 * (i/bufferLength));
//   //     const g = 250 * (i/bufferLength);
//   //     const b = 50;
//   //
//   //     ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
//   //     ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);
//   //
//   //     x += barWidth + 1;
//   //   }
//   //
//   // }
//   //
//   // renderFrame();
//
// })
