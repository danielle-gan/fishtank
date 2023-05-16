const fishElement = document.querySelector('.fish1');

function getRandomMovement() {
  return Math.random() > 0.5 ? '80vw' : '-80vw';
}

fishElement.style.setProperty('--random-movement', getRandomMovement());