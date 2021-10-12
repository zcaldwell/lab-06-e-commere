
export function findById(id, items) {
    for(let item of items){
        if(item.id === id){
            return item;
        }
    }
}

// export function calcOrderTotal(cartItem, cars)
//     for(let cartItems of cartItem){
//         if 
// )