
export function findById(id, items) {
    for (let item of items){
        if (item.id === id){
            return item;
        }
    }
}

// export function calcOrderTotal(cartItem, cars)
//     for(let cartItems of cartItem){
//         if 
// )
export function calculateOrderTotal(cart, cars) {
    let orderTotal = 0;
    for (let item of cart){
        const car = findById(item.id, cars);
        orderTotal = orderTotal + car.price * item.qty;
    }
    console.log(orderTotal);
    return orderTotal;
}

export function toUSD(number){
    return number.toLocaleString('en-us', { style: 'currency', currency: 'USD' });
}