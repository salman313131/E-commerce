import classes from './Header.module.css'
import CartContext from '../../Store/cart-context'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
const Header=(props)=>{
    const cartCtx = useContext(CartContext)
    const numberOfItems = cartCtx.items.length
    const logoutHandler=()=>{
        cartCtx.logout()
    }
    return(
            <header className={classes['header-cart']}>
                <ul className={classes['link-list']}>
                    <li><Link to='/home'>Home</Link></li>
                    {cartCtx.isLoggedIn && <li><Link to='/'>Store</Link></li>}
                    <li><Link to='/about'>About</Link></li>
                    {cartCtx.isLoggedIn && <li><Link to='/contact'>Contact Us</Link></li>}
                    {!cartCtx.isLoggedIn && <li><Link to='/login'>Login</Link></li>}
                    {cartCtx.isLoggedIn && <button onClick={logoutHandler}>Logout</button>}
                </ul>
                {cartCtx.isLoggedIn && <button className='header-cart_button' onClick={props.onShow}>
                    <span>Your Cart</span>
                    <span>{numberOfItems}</span>
                </button>}
            </header>
    )
}
export default Header