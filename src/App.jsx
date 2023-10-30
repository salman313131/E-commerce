import './App.css'
import Product from './Components/Layout/Product'
import Header from './Components/UI/Header'
import Cart from './Components/Cart/Cart'
import { useState } from 'react'
function App() {
  const [isCart,setIsCart] = useState(false)
  const cartShowHandler=()=>{
    setIsCart(true)
  }
  const hideCartHandler=()=>{
    setIsCart(false)
  }
  return (
    <>
      {isCart && <Cart onClose={hideCartHandler}/>}
      <Header onShow={cartShowHandler}/>
      <Product />
    </>
  )
}

export default App
