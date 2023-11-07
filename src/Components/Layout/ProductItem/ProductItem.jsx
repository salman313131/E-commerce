import './ProductItem.css'
import CartContext from '../../../Store/cart-context'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const ProductItem=(props)=>{
    const cartCtx = useContext(CartContext)
    const addProductToCart=()=>{
        const item={id:props.id,
            title:props.title,
            price:props.price,
            qty:1}
        const token = localStorage.getItem('token')
        const data = {[token]:item}
        try {
            axios.post('https://crudcrud.com/api/354efd50e68244968b39f3fb7fff4cfe',data)
        } catch (error) {
            console.log(error)
        }
        cartCtx.addItem(item)
    }
    const link = `/product/${props.id}`
    return(
        <li className="list-item">
            <h3 className="list-item_title">{props.title}</h3>
            <img src={props.imgUrl} className="list-item_img" alt={props.title}></img>
            <div className="price-button">
                <h4>Rs.{props.price}</h4>
                <button onClick={addProductToCart}>Add to Cart</button>
            </div>
            <Link to={link}><p>see more</p></Link>
        </li>
    )
}
export default ProductItem