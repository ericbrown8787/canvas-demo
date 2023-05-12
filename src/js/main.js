// function getRandomInt(max) {
//   return Math.floor(Math.random() * max);
// }
// button = document.querySelector('#button');
// console.log('Hello World!');

// button.addEventListener('click', () =>
//   console.log(`Button clicked! Here's a random number: ${getRandomInt(10)}`)
// );
function renderThem() {
  const canvas = document.querySelector('#main-canvas');
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d');

    // Render body
    ctx.fillRect(50, 280, 220, 40);
    ctx.fillRect(60, 260, 200, 20);
    ctx.fillRect(70, 240, 180, 20);
    ctx.fillRect(80, 220, 160, 20);
    ctx.fillRect(70, 200, 180, 20);
    ctx.fillRect(60, 140, 200, 60);
    ctx.fillRect(70, 120, 180, 20);
    ctx.fillRect(80, 100, 160, 20);
    // Render ears
    //First layer
    ctx.fillRect(90, 90, 50, 10);
    ctx.fillRect(180, 90, 50, 10);

    //Second layer
    ctx.fillRect(100, 80, 30, 10);
    ctx.fillRect(190, 80, 30, 10);

    //Third Layer
    ctx.fillRect(110, 70, 10, 10);
    ctx.fillRect(200, 70, 10, 10);

    // Eyes
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(100, 150, 30, 30);
    ctx.fillRect(190, 150, 30, 30);
    ctx.fillRect(110, 140, 10, 50);
    ctx.fillRect(200, 140, 10, 50);

    // Mouth
    for (let i = 0, x = 120; i < 8; i++) {
      if (i % 2 === 0) {
        ctx.fillRect(x, 210, 10, 10);
      } else if (i < 7) {
        ctx.fillRect(x, 220, 10, 10);
      }
      x += 10;
    }
    // ctx.fillStyle = 'rgb(200,0,0)';
    // ctx.fillRect(10, 10, 50, 50);

    // ctx.strokeStyle = 'rgba(0, 0, 200, 0.5)';
    // ctx.strokeRect(30, 30, 50, 50);
  }
}
renderThem();
