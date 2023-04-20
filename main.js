const car = document.querySelector('.car');
const container = document.querySelector('.container');

// initialize the car's data
const data = {
  direction: null,
  x: 0,
  y: 0,
  on: false
};

// get the dimensions of the container and the car
const containerWidth = container.offsetWidth;
const containerHeight = container.offsetHeight;
const carWidth = car.offsetWidth;
const carHeight = car.offsetHeight;

// set the initial position of the car
let carX = containerWidth / 2;
let carY = containerHeight / 2;

// update the car's position and handle turns every 16ms (approximately 60fps)
// const move = setInterval(() => {
//   // only update the car's position if it's currently on

// }, 16);

// start the car when the space bar is pressed
document.addEventListener('keydown', startCar);
function startCar(event) {
  if (event.code === 'Space') {
    // eslint-disable-next-line no-console
    console.log('Space pressed');
    if (data.on) {
      // update the car's position based on the direction
      if (data.direction === 'north') {
        carY -= 3;
      } else if (data.direction === 'south') {
        carY += 3;
      } else if (data.direction === 'east') {
        carX += 3;
      } else if (data.direction === 'west') {
        carX -= 3;
      }

      // update the car's position using absolute positioning
      car.style.position = 'absolute';
      car.style.top = carY + 'px';
      car.style.left = carX + 'px';

      // check if the car has reached the edge of the container and turn it
      if (carY <= 0) {
        data.on = false;
      } else if (carY >= containerHeight - carHeight) {
        data.on = false;
      } else if (carX <= 0) {
        data.on = false;
      } else if (carX >= containerWidth - carWidth) {
        data.on = false;
      } else {
        // continue moving in the same direction if the edge hasn't been reached
        const direction = car.className;
        switch (direction) {
          case 'north':
            data.direction = 'north';
            break;
          case 'south':
            data.direction = 'south';
            break;
          case 'west':
            data.direction = 'west';
            break;
          case 'east':
            data.direction = 'east';
            break;
        }
      }
    }
    data.on = true;
    data.direction = car.className;
    // set a default direction
  }
}

// turn the car when the arrow keys are pressed

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

document.addEventListener('keydown', turnCar);
