
import { toUSD } from './utils.js';

export function renderLineItems(cartItem, carData){
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    tdName.textContent = carData.model;
    const tdPrice = document.createElement('td');
    tdPrice.textContent = toUSD(carData.price);
    const tdQty = document.createElement('td');
    tdQty.textContent = cartItem.qty;
    const tdTotal = document.createElement('td');
    tdTotal.textContent = toUSD(cartItem.qty * carData.price);
    
    tr.append(tdName, tdPrice, tdQty, tdTotal);
    return tr;
}
