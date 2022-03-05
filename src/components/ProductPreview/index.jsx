import {Container} from './style'

const ProductPreview = ({name,price,img,product}) => {
    return(
        <Container>
            <figure>
                <img src={img} alt={name} />
                <figcaption>{name}</figcaption>
            </figure>
            <div>
                <h4>{name}</h4>
                <h5>{price}</h5>
            </div>
            <button><span>remove</span></button>
        </Container>
    )
}

export default ProductPreview