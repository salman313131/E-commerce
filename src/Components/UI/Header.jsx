import './Header.css'
import CartContext from '../../Store/cart-context'
import { useContext } from 'react'
const Header=(props)=>{
    const cartCtx = useContext(CartContext)
    const numberOfItems = cartCtx.items.length
    return(
        <>
            <header className="header-cart">
                <h1>Products</h1>
                <button className='header-cart_button' onClick={props.onShow}>
                    <span>Your Cart</span>
                    <span>{numberOfItems}</span>
                </button>
            </header>
        </>
    )
}
export default Header