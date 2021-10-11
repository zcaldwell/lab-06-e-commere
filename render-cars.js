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
export function renderCars(cars){
    const carListing = document.createElement('div');
    carListing.classList.add('car-listing');

    const carHeader = document.createElement('h2');
    carHeader.textContent = cars.make;

    const carHeader2 = document.createElement('h3');
    carHeader2.textContent = cars.model;

    const img = document.createElement('img');
    img.src = cars.img;

    // const button = document.createElement('button');
    // button.id = cars.id;
    
    carListing.append(carHeader, carHeader2, img);
    return carListing;
}