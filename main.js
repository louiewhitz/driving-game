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

// set up the turn animation
const turnDuration = {
  duration: 150,
  fill: 'forwards'
};

// start the car when the space bar is pressed
document.addEventListener('keydown', startCar);
function startCar(event) {
  if (event.code === 'Space' && !data.on) {
    data.on = true;
  }
}

// turn the car when the arrow keys are pressed
document.addEventListener('keydown', turnCar);
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

// update the car's position every 16ms (approximately 60fps)
setInterval(() => {
  // only update the car's position if it's currently on
  if (data.on) {
    // get the current direction of the car
    const direction = car.className;

    // update the car's position based on its direction
    switch (direction) {
      case 'north':
        if (carY <= 0) {
          data.on = false;
          break;
        }
        car.animate([{ transform: `translateY(-${carHeight}px)` }], turnDuration);
        carY -= carHeight;
        break;
      case 'south':
        if (carY >= carHeight) {
          data.on = false;
          break;
        }
        car.animate([{ transform: `translateY(${carHeight}px)` }], turnDuration);
        carY += carHeight;
        break;
      case 'west':
        // check if the car has reached the left edge of the container
        if (carX <= 0) {
          data.on = false;
          break;
        }
        car.animate([{ transform: `translateX(-${carWidth}px)` }], turnDuration);
        carX -= carWidth;
        break;
      case 'east':
        // check if the car has reached the right edge of the container
        if (carX + carWidth >= containerWidth) {
          data.on = false;
          break;
        }
        car.animate([{ transform: `translateX(${carWidth}px)` }], turnDuration);
        carX += carWidth;
        break;

    }
  }
});

// const car = document.querySelector('.car');
// document.addEventListener('keydown', turnCar);
// const container = document.querySelector('.container');

// const data = {
//   direction: null,
//   location: [0, 0],

//   on: false
// };
// const pageHeight = container.offsetHeight;
// const pageWidth = container.offsetWidth;
// const carWidth = car.offsetWidth;
// const carHeight = car.offsetHeight;

// let carX = pageWidth / 2;
// let carY = pageHeight / 2;

// const turnDuration = {
//   duration: 150,
//   animate: 1,
//   fill: 'forwards'

// };
// const direction = car.className;

// document.addEventListener('keydown', startCar);
// function startCar(event) {
//   if (event.code === 'Space' && data.on === false) {
//     data.on = true;
//     if (carX + carWidth >= pageWidth && direction === 'west') {
//       data.on = false;
//     } else {
//       carX += 5;
//     }

//   } else if ()
// }

//     // get the current direction of the car

//     // update the car's position based on its direction
//     switch (direction) {
//       case 'north':
//         car.animate(turnDuration);
//         data.direction = 'north';
//         break;
//       case 'south':
//         car.animate(turnDuration);
//         data.direction = 'south';
//         break;
//       case 'west':
//         car.animate(turnDuration);
//         data.direction = 'west';
//         break;
//       case 'east':
//         car.animate(turnDuration);
//         data.direction = 'east';
//         break;
//       default:
//         break;
//     }

//     // update the car's position on the page
//     car.style.top = data.y + 'px';
//     car.style.left = data.x + 'px';
//   }
// }

// function turnCar(event) {

//   switch (event.key) {
//     case 'ArrowUp':
//       car.className = 'north';
//       break;
//     case 'ArrowDown':
//       car.className = 'south';
//       break;
//     case 'ArrowLeft':
//       car.className = 'west';
//       break;
//     case 'ArrowRight':
//       car.className = 'east';
//       break;
//     default:
//       break;
//   }
// }
