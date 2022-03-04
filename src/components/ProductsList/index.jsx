import {useSelector} from 'react-redux'
import Product from '../Product'

const ProductsList = () => {

    const list = useSelector((state) => state.products)

    return (
        <div>
            <ul>
                {list.map((product) => <li key={product.name}><Product name = {product.name} price = {product.price} img={product.img}/></li>)}
            </ul>
        </div>
    )
}

export default ProductsList