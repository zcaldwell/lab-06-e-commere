
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
    
    return orderTotal;
}

export function toUSD(number){
    return number.toLocaleString('en-us', { style: 'currency', currency: 'USD' });
}  
    //getCart
        //get the cart from local storage
        //parse it from JSOn to javascript
        //what if the cart doesn't exist yet?? -- return an empty array
export function getCart(){
    const cartString = localStorage.getItem('CART') || '[]';
    const cart = JSON.parse(cartString);
    return cart;
}

//addItem(id) ---> will increment by 1
    //call getCart()
    //use findById to find a matching cartItem with the id
    //if cartItem is found, increment qty by 1
    //else creat a new cartItem with id and qty = 1
    //stringify the cart ack to JSON
    //set the cart to local storage
export function addItem(id){
    const cart = getCart();
    const cartItem = findById(id, cart);
    if (cartItem){
        cartItem.qty++;
    } else {
        const newItem = { id: id, qty: 1 };
        cart.push(newItem);
    }
    const stringCart = JSON.stringify(cart);
    localStorage.setItem('CART', stringCart);
}


//removeCart
    //clearCart
    //localStorage.removeItem('cart')
export function clearCart(){
    localStorage.removeItem('CART');
}