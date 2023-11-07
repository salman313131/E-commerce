import Header from "../UI/Header"
import Cart from "../Cart/Cart"
import { useState } from "react"
const Layout=(props)=>{
    const [isCart,setIsCart] = useState(false)
    const cartShowHandler=()=>{
        setIsCart(true)
    }
    const hideCartHandler=()=>{
    setIsCart(false)
    }
    return(
        <>
        {isCart && <Cart onClose={hideCartHandler}/>}
        <Header onShow={cartShowHandler}/>
        <main>{props.children}</main>
        </>
    )
}
export default Layout