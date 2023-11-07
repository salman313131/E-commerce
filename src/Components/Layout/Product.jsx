import { productsArr } from "../../data/data"
import ProductItem from "./ProductItem/ProductItem"
import './Product.css'
const Header=(props)=>{
    const items = productsArr.map(item=><ProductItem key={item.id} id={item.id} title={item.title} price={item.price} imgUrl={item.imageUrl}/>)
    return(
        <section>
            <ul className="ul_list-item">{items}</ul>
        </section>
    )
}
export default Header