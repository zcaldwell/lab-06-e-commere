// {
//     id: '1',
//     make: 'Saturn',
//     model: 'S-Series',
//     Year: '1992',
//     Color: 'Beige',
//     Mileage: '230,352',
//     Condition: 'Fair',
//     Image: './assets/saturn.jpg',
// },
import { toUSD } from './data/utils.js';

export function renderCars(cars){
    const carListing = document.createElement('div');
    carListing.classList.add('car-listing');

    const carHeader = document.createElement('h2');
    carHeader.textContent = cars.make;

    const carHeader2 = document.createElement('h3');
    carHeader2.textContent = cars.model;

    const carHeader3 = document.createElement('h4');
    carHeader3.textContent = toUSD(cars.price);
    

    const addButton = document.createElement('button');
    addButton.textContent = 'Buy';
    addButton.id = cars.id;
    addButton.classList.add('add-button'); 

    // const dropButton = document.createElement('select');
    // dropButton.classList.add('dropbutton');
    // let newOption = new Option('1', '1');
    // dropButton.add(newOption);

    const img = document.createElement('img');
    img.src = cars.img;

    // const button = document.createElement('button');
    // button.id = cars.id;
    
    carListing.append(carHeader, carHeader2, carHeader3, img, addButton);
    return carListing;
}