
import { addProduct } from '../data/utils.js';

const form = document.getElementById('car-inputs');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const data = new FormData(form);
    const newCar = {
        id: data.get('id'),
        make: data.get('make'),
        model: data.get('model'),
        Year: data.get('year'),
        Color: data.get('color'),
        Mileage: data.get('mileage'),
        Condition: data.get('condition'),
        img: data.get('image'),
        price: Number(data.get('price'))
    };
    addProduct(newCar);
    
    alert('New Car Added');
});