import './Header.css'
const Header=(props)=>{
    return(
        <>
            <header className="header-cart">
                <h1>Products</h1>
                <button className='header-cart_button'>
                    <span>Your Cart</span>
                    <span>3</span>
                </button>
            </header>
        </>
    )
}
export default Header