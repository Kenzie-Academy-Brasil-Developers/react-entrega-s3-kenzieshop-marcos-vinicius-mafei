import { Container } from "./style"
import ProductBorder from '../../images/ProductBorder.png'
import {addToCartThunk} from '../../store/modules/cart/thunk'
import { useDispatch} from "react-redux"
import { toast } from "react-toastify"

const Product = ({name,price,img,product,calculateTotal}) => {
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
            <button onClick={() => {dispatch(addToCartThunk(product))
            calculateTotal()
            toast.success(`${name} foi adicionado ao carrinho`,{autoClose:2000,theme:'dark'})}}><span>Adicionar ao Carrinho</span></button>
        </Container>
    )
}

export default Product