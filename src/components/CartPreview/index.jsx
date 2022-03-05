import { useSelector } from "react-redux"
import ProductPreview from "../ProductPreview"
import {Container} from './style'

const CartPreview = ({setMousePop}) => {
    
    const cart = useSelector((state)=>state.cart)
    const preview = cart.slice(0,3)

    return(
        <Container onMouseOver={()=>setMousePop(true)} onMouseOut={()=>setMousePop(false)}>
            <ul>
                {preview.map(product =><li key={product.name}><ProductPreview name={product.name} price={product.price} img={product.img} product={product}/></li>)}
            </ul>
        </Container>
    )
}

export default CartPreview