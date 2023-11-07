import { useParams } from "react-router-dom"
const ProductDetail=()=>{
    const param = useParams()
return(
    <h1>{param.productId}</h1>
)
}
export default ProductDetail