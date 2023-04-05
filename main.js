const car = document.querySelector('.car');
document.addEventListener('keydown', turnCar);

// const data = {
//   x: 0,
//   y: 0,
//   forward: 7 + 'px',
//   backward: -7 + 'px'
// };

function turnCar(event) {

  switch (event.key) {
    case 'ArrowUp':
      car.className = 'north';
      break;
    case 'ArrowDown':
      car.className = 'south';
      break;
    case 'ArrowLeft':
      car.className = 'west';
      break;
    case 'ArrowRight':
      car.className = 'east';
      break;
    default:
      break;
  }
}
