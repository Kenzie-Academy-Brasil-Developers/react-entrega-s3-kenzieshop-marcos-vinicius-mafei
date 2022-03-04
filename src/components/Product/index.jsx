import { Container } from "./style"
import ProductBorder from '../../images/ProductBorder.png'

const Product = ({name,price,img}) => {
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
            <button><span>Add to Cart</span></button>
        </Container>
    )
}

export default Product