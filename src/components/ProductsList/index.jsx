import {useSelector} from 'react-redux'
import Product from '../Product'
import {Container} from './style'

const ProductsList = ({calculateTotal}) => {

    const list = useSelector((state) => state.products)

    return (
        <Container>
            <ul>
                {list.map((product) => <li key={product.name}><Product name = {product.name} price = {product.price} img={product.img} product={product} calculateTotal={calculateTotal}/></li>)}
            </ul>
        </Container>
    )
}

export default ProductsList