import './Header.css'
import CartContext from '../../Store/cart-context'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
const Header=(props)=>{
    const cartCtx = useContext(CartContext)
    const numberOfItems = cartCtx.items.
    return(
        <>
            <header className="header-cart">
                <div>
                    <Link to='/home'>Home</Link>
                    <Link to='/'>Store</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/login'>Login</Link>
                </div>
                <button className='header-cart_button' onClick={props.onShow}>
                    <span>Your Cart</span>
                    <span>{numberOfItems}</span>
                </button>
            </header>
        </>
    )
}
export default Header