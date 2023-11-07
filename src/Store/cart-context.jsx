import React from 'react'
const CartContext=React.createContext({
    items:[],
    totaAmount:0,
    token: '',
    isLoggedIn: false,
    addItem:(item)=>{},
    removeItem:(item)=>{},
    login:(token)=>{},
    logout:()=>{}
})
export default CartContext