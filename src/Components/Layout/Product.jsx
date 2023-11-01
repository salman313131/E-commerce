
const productsArr = [

{

title: 'Colors',

price: 100,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

},

{

title: 'Black and white Colors',

price: 50,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

},

{

title: 'Yellow and Black Colors',

price: 70,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

},

{

title: 'Blue Color',

price: 100,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

}

]

import ProductItem from "./ProductItem/ProductItem"
import './Product.css'
import { useEffect } from "react"
const Header=(props)=>{
    useEffect(async ()=>{
        
    },[])
    const items = productsArr.map(item=><ProductItem key={item.title} title={item.title} price={item.price} imgUrl={item.imageUrl}/>)
    return(
        <section>
            <ul className="ul_list-item">{items}</ul>
        </section>
    )
}
export default Header