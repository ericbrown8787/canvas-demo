function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
button = document.querySelector('#button');
console.log('Hello World!');

button.addEventListener('click', () =>
  console.log(`Button clicked! Here's a random number: ${getRandomInt(10)}`)
);
