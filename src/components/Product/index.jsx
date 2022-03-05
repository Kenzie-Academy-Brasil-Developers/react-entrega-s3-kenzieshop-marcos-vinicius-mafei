import { Container } from "./style"
import ProductBorder from '../../images/ProductBorder.png'
import {addToCartThunk} from '../../store/modules/cart/thunk'
import { useDispatch} from "react-redux"

const Product = ({name,price,img,product}) => {
    const dispatch = useDispatch()

    return(
        <Container ProductBorder={ProductBorder}>
            <figure>
                <img src={img} alt={name} />
                <figcaption>{name}</figcaption>
            </figure>
            <div>
                <h3>{name}</h3>
                <h4>{`R$ ${price}`}</h4>
            </div>
            <button onClick={() => dispatch(addToCartThunk(product))}><span>Adicionar ao Carrinho</span></button>
        </Container>
    )
}

export default Product