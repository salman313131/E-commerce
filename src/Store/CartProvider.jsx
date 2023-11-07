import CartContext from "./cart-context";
import { useReducer,useState } from "react";

const defaultState={
    items:[],
    totalAmount:0,
    token: '',
    isLoggedIn: false,
}
const cartReducer=(state,action)=>{
    if(action.type === 'ADD'){
        return {
            items: [action.item,...state.items],
            totalAmount: Number(state.totalAmount)+Number(action.item.price)
        }
    }
    if(action.type === 'REMOVE'){
        const removedItem = state.items.find(item => item.title == action.name)
        const newList = state.items.filter(item=>item.title != action.name)
        return{
            items: newList,
            totalAmount: Number(state.totalAmount)-Number(removedItem.price)
        }
    }
    return defaultState
}

const CartProvider=(props)=>{
    const [cartState,dispatchCartAction] = useReducer(cartReducer,defaultState)
    const addItemToCartHandler=(item)=>{
        dispatchCartAction({type:'ADD',item:item})
    }
    const removeItemToCartHandler=(name)=>{
        dispatchCartAction({type:'REMOVE',name:name})
    }
    const initialToken = localStorage.getItem('token')
    const [token,setIstoken] = useState(initialToken)
    const userIsLoggedIn = !!token
    const loginHandler=(token)=>{
        setIstoken(token)
        localStorage.setItem('token',token)
    }
    const logoutHandler=()=>{
        setIstoken(null)
        localStorage.removeItem('token')
    }
    const cartContext={
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        token: token,
        isLoggedIn: userIsLoggedIn,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler,
        login: loginHandler,
        logout: logoutHandler,
    }
    return(
        <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
    )
}
export default CartProvider