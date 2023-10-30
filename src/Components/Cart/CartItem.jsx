const CartItem=(props)=>{
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