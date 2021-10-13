// import functions and grab DOM elements
import { renderCars } from './render-cars.js';
import { cars } from './data/things.js';
// initialize global state
const carList = document.getElementById('car-list');
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
for (let car of cars){
    const carListing = renderCars(car);
    carList.append(carListing);
 
}