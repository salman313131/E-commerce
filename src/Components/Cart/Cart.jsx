const cartElements = [

{

title: 'Colors',

price: 100,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

quantity: 2,

},

{

title: 'Black and white Colors',

price: 50,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

quantity: 3,

},

{

title: 'Yellow and Black Colors',

price: 70,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

quantity: 1,

}

]
import Modal from "../UI/Modal"
import CartItem from "./CartItem"
import CartContext from "../../Store/cart-context"
import { useContext } from "react"
const Cart=(props)=>{
    const cartCtx = useContext(CartContext)
    const cartItem = <ul>
        {cartCtx.items.map(item=>(<CartItem name={item.title} price={item.price} qty={item.qty}/>))}
    </ul>
    return(
        <Modal onClose={props.onClose}>
            {cartItem}
            <div>
                <h3>Total {cartCtx.totalAmount}</h3>
                <div>
                    <button>Purchase</button>
                    <button onClick={props.onClose}>Close</button>
                </div>
            </div>
        </Modal>
    )
}
export default Cart