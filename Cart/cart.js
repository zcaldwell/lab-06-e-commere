import { cars } from '../data/things.js'
import { findById } from '../data/utils.js'
import { cart } from '../data/cart-data.js'


const tbody = document.getElementById('table-body');
for (let cartItem of cart){
    const carData = findById(cartItem.id, cars);
    
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    tdName.textContent = carData.model;
    const tdPrice = document.createElement('td');
    tdPrice.textContent = carData.price;
    const tdQty = document.createElement('td');
    tdQty.textContent = cartItem.qty;
    const tdTotal = document.createElement('td');
    tdTotal.textContent =  cartItem.qty * carData.price;
    console.log(cartItem.qty);
    console.log(carData.price);


    tr.append(tdName, tdPrice, tdQty, tdTotal)
    tbody.appendChild(tr);
        
}