const initialValue={
    cart:{}
}

function rootReducer(state=initialValue, action) {
    switch (action.type) 
    {
        case 'ADD_CART':
            state.cart[action.payload[0]]=action.payload[1]
            console.log("CART",state.cart)
            return {cart:state.cart}
            break;
        default:
          return state
    }
 
}
export default rootReducer;