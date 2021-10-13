// IMPORT MODULES under test here:
import { renderCars } from '../render-cars.js';
import { cars } from '../data/things.js';
import { findById } from '../data/utils.js';
// import { calculateOrderTotal } from '../data/utils.js';
// import { renderLineItems } from '../data/render-line-items.js';



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

test('test should return stats for ssr', (expect)=>{
    const expected = {
        id: '4',
        make: 'Chevrolet',
        model: 'SSR',
        Year: '2006',
        Color: 'Red',
        Mileage: '90,353',
        Condition: 'Bad',
        img: './assets/ssr.jpg',
        price: 2000

    };

    const actual = findById('4', cars);
    expect.deepEqual(actual, expected);
});

// test('renderLineItems should fill out HTML for table', (expect) => {
//     const expected = `<tr><td>S-Series</td><td>$1,200.00</td><td>1</td><td>$1,200.00</td></tr>`;
//     const Aztec = cars[1];
    

//     const actual = renderLineItems(Aztec).outerHTML;
//     console.log(Aztec);
//     expect.equal(actual, expected);
// });
