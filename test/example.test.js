// IMPORT MODULES under test here:
import { renderCars } from '../render-cars.js';
import { cars } from '../things.js';
// import { example } from '../example.js';

const test = QUnit.test;

test('rendarCars should return HTML', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="car-listing"><h2>Saturn</h2><h3>S-Series</h3><img src="./assets/saturn.jpg"></div>`;
    const saturn = cars[0];
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderCars(saturn).outerHTML;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
