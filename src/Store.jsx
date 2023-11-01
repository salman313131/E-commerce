import Product from './Components/Layout/Product'
import Header from './Components/UI/Header'
import Cart from './Components/Cart/Cart'
import { useState } from 'react'
import CartProvider from './Store/CartProvider'
function Store() {
  const [isCart,setIsCart] = useState(false)
  const cartShowHandler=()=>{
    setIsCart(true)
  }
  const hideCartHandler=()=>{
    setIsCart(false)
  }
  return (
    <CartProvider>
      {isCart && <Cart onClose={hideCartHandler}/>}
      <Header onShow={cartShowHandler}/>
      <Product />
    </CartProvider>
  )
}

export default Store