import CartContext from "../../Store/cart-context"
import { useContext } from "react"
const CartItem=(props)=>{
    const cartCtx=useContext(CartContext)
    const onRemoveHandler=(name)=>{
        cartCtx.removeItem(name)
    }
    return(
        <li>
            <span>{props.name}</span>
            <span>{props.price}</span>
            <span>{props.qty}</span>
            <button>Remove</button>
        </li>
    )
}
export default CartItem