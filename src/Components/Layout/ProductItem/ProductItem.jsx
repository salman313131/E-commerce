import './ProductItem.css'
import CartContext from '../../../Store/cart-context'
import { useContext } from 'react'
const ProductItem=(props)=>{
    const cartCtx = useContext(CartContext)
    const addProductToCart=()=>{
        cartCtx.addItem({
            title:props.title,
            price:props.price,
            qty:1
        })
    }
    return(
        <li className="list-item">
            <h3 className="list-item_title">{props.title}</h3>
            <img src={props.imgUrl} className="list-item_img" alt={props.title}></img>
            <div className="price-button">
                <h4>Rs.{props.price}</h4>
                <button onClick={addProductToCart}>Add to Cart</button>
            </div>
        </li>
    )
}
export default ProductItem