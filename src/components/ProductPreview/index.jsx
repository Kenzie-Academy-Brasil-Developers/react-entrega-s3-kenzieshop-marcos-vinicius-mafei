import {Container} from './style'
import {FaTrashAlt} from 'react-icons/fa'
import { removeFromCartThunk } from '../../store/modules/cart/thunk'
import { useDispatch } from 'react-redux'

const ProductPreview = ({name,price,img,quantity,product,calculateTotal}) => {

    const dispatch = useDispatch()

    return(
        <Container>
            <figure>
                <img src={img} alt={name} />
                <figcaption>{name}</figcaption>
            </figure>
            <div className="infos">
                <h4>{name}</h4>
                <h5>{`R$ ${price}`}</h5>
                <h6>{`Quantidade: ${quantity}`}</h6>
            </div>
            <button onClick={()=>{dispatch(removeFromCartThunk(product))
            calculateTotal()}}><FaTrashAlt/></button>
        </Container>
    )
}

export default ProductPreview