// IMPORT MODULES under test here:
import { renderCars } from '../render-cars.js';
import { cars } from '../data/things.js';
import { addItem, findById, clearCart, getCart, calculateOrderTotal, getProducts, addProduct } from '../data/utils.js';
import { renderLineItems } from '../data/render-line-items.js';
import { cart } from '../data/cart-data.js';




// import { example } from '../example.js';

const test = QUnit.test;

test('rendarCars should return HTML', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="car-listing"><h2>Saturn</h2><h3>S-Series</h3><h4>$1,200.00</h4><img src="./assets/saturn.jpg"><button id="1" class="add-button">Buy</button></div>`;
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

test('renderLineItems should fill out HTML for table', (expect) => {
    const expected = `<tr><td>S-Series</td><td>$1,200.00</td><td>1</td><td>$1,200.00</td></tr>`;
    const Aztec = cars[0];
    const cartItem = cart[0];
    

    
    const actual = renderLineItems(cartItem, Aztec).outerHTML;
    expect.deepEqual(actual, expected);
});

test ('calculateOrderTotal should give me the total of the cart', (expect) => {
    const expected = 8000;
    const fakeCart = [
        { id: '4', qty: 4 }
    ];
    localStorage.setItem('CART', JSON.stringify(fakeCart));
    
    
    const actual = calculateOrderTotal(fakeCart, cars);
    expect.deepEqual(actual, expected);
});

test ('getCart should return the cart if it exists', (expect) => {
    const fakeCart = [
        { id: '1', qty: 3 },
        { id: '3', qty: 4 }
    ];
    localStorage.setItem('CART', JSON.stringify(fakeCart));

    const cart = getCart();

    expect.deepEqual(cart, fakeCart);
    
   
});

test ('getCart should return an empty array if the cart doe snot exist', (expect)=>{
    localStorage.removeItem('CART');
    const cart = getCart();

    expect.deepEqual(cart, []);
});

test ('addItem should increment Cars', (expect)=>{
    const fakeCart = [
        { id: '1', qty: 3 },
        { id: '3', qty: 4 }
    ];
    localStorage.setItem('CART', JSON.stringify(fakeCart));

    addItem('1');
    const cart = getCart();
    const expected = [
        { id: '1', qty: 4 },
        { id: '3', qty: 4 }
    ];
    expect.deepEqual(cart, expected);
   
});

test ('clearCart should clear out the shopping cart', (expect)=>{
    const fakeCart = [
        { id: '1', qty: 3 }
    ];
    localStorage.setItem('CART', JSON.stringify(fakeCart));
    
    clearCart();
    const cart = getCart();
    const expected = [];
    expect.deepEqual(cart, expected);
});

test ('addProduct should add a product to the array', (expect)=>{
    let products = getProducts();
    const newProduct = {
        id: '6',
        make: 'Hummer',
        model: 'h2',
        Year: '2006',
        Color: 'Black',
        Mileage: '65,345',
        Condition: 'Fair',
        img: './assets/hummer.jpg',
        price: 13000
    };

    addProduct(newProduct);

    products = getProducts();
    expect.equal(products.length, 6);
  
});

