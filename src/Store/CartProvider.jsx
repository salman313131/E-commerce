import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultState={
    items:[],
    totalAmount:0
}
const cartReducer=(state,action)=>{
    if(action.type === 'ADD'){
        return {
            items: [action.item,...state.items],
            totalAmount: Number(state.totalAmount)+Number(action.item.price)
        }
    }
    return defaultState
}

const CartProvider=(props)=>{
    const [cartState,dispatchCartAction] = useReducer(cartReducer,defaultState)
    const addItemToCartHandler=(item)=>{
        dispatchCartAction({type:'ADD',item:item})
    }
    const removeItemToCartHandler=(id)=>{}
    const cartContext={
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler,
    }
    return(
        <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
    )
}
export default CartProvider