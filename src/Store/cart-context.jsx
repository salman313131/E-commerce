import React from 'react'
const CartContext=React.createContext({
    item:[],
    totaAmount:0,
    addItem:(item)=>{},
    removeItem:(item)=>{}
})
export default CartContext