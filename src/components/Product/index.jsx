import { Container } from "./style"

const Product = ({name,price,img}) => {
    return(
        <Container>
            <figure>
                <img src={img} alt={name} />
                <figcaption>{name}</figcaption>
            </figure>
            <div>
                <h3>{name}</h3>
                <h4>{price}</h4>
            </div>
            <button><span>Add to Cart</span></button>
        </Container>
    )
}

export default Product