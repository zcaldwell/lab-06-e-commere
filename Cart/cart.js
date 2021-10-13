import { cars } from '../data/things.js';
import { calculateOrderTotal, findById, toUSD } from '../data/utils.js';
import { cart } from '../data/cart-data.js';
import { renderLineItems } from '../render-line-items.js';


const tbody = document.getElementById('table-body');
for (let cartItem of cart){
    const carData = findById(cartItem.id, cars);
    const tr = renderLineItems(cartItem, carData);
    
    tbody.appendChild(tr);
}

const orderTotal = calculateOrderTotal(cart, cars);
const tdOrderTotal = document.getElementById('total');
tdOrderTotal.textContent = toUSD(orderTotal);

console.log(orderTotal);