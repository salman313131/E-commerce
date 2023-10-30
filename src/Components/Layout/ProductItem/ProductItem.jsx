import './ProductItem.css'
const ProductItem=(props)=>{
    return(
        <li className="list-item">
            <h3 className="list-item_title">{props.title}</h3>
            <img src={props.imgUrl} className="list-item_img" alt={props.title}></img>
            <div className="price-button">
                <h4>Rs.{props.price}</h4>
                <button>Add to Cart</button>
            </div>
        </li>
    )
}
export default ProductItem