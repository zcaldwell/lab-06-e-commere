
import { cars } from '../data/things.js';
import { calculateOrderTotal, findById, toUSD, getCart } from '../data/utils.js';

import { renderLineItems } from '../data/render-line-items.js';

const cart = getCart();
const tbody = document.getElementById('table-body');
for (let cartItem of cart){
    const carData = findById(cartItem.id, cars);
    const tr = renderLineItems(cartItem, carData);
    
    tbody.appendChild(tr);
}

const orderTotal = calculateOrderTotal(cart, cars);
const tdOrderTotal = document.getElementById('total');
tdOrderTotal.textContent = toUSD(orderTotal);

const orderButton = document.getElementById('checkout');
orderButton.addEventListener('click', ()=>{
    localStorage.removeItem('CART');
    window.location.replace('..');

});

