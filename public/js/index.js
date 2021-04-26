document.addEventListener('DOMContentLoaded', () => {
  let ind = 0;
  const video = document.getElementById("player")

  video.addEventListener('click', () => {

    if(ind !== 0) {
      console.log('hello')
    } else {


      const context = new (window.AudioContext || window.webkitAudioContext)()
      const src = context.createMediaElementSource(video)
      const analyser = context.createAnalyser()

      // Set canvas width
      const canvas = document.getElementById("canvas")
      canvas.width = 600
      canvas.height = 300

      // Set context object
      const ctx = canvas.getContext("2d")

      // Connect the analyser to the video
      src.connect(analyser)
      analyser.connect(context.destination)

      // Set buffer length
      analyser.fftSize = 256
      const bufferLength = analyser.frequencyBinCount

      // Create an array of the buffers
      const dataArray = new Uint8Array(bufferLength)

      // Get canvas width
      const WIDTH = canvas.width
      const HEIGHT = canvas.height

      // Set the width of a single bar
      const barWidth = (WIDTH / bufferLength) * 1.5
      let barHeight
      let x = 0

      function renderFrame() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Callback to animate the next frame
        requestAnimationFrame(renderFrame)

        x = 0;

        analyser.getByteFrequencyData(dataArray)

        // Create each bar
        for (let i = 0; i < bufferLength; i++) {


          barHeight = dataArray[i]
          // Make it a lil shorter
          barHeight = barHeight < 20 ? barHeight : barHeight - 20

          // ctx.globalAlpha = 1;

          ctx.fillStyle = 'rgb(255,255,255)'
          ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight)

          x += barWidth + 15
        }

      }

      renderFrame()

      // Don't replace the canvas
      ind++
    }


  }) // checks if element is playing right now



})
