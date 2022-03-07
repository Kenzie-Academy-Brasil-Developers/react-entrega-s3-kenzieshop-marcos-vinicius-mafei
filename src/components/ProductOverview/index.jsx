import {Container} from './style'
import {FaTrashAlt} from 'react-icons/fa'
import { removeFromCartThunk } from '../../store/modules/cart/thunk'
import { useDispatch,useSelector } from 'react-redux'
import { removeWithQuantity,addToCartThunk } from '../../store/modules/cart/thunk'
import { useState } from 'react'
import { HiPlus,HiMinusSm } from "react-icons/hi";


const ProductOverview = ({name,price,img,quantity,product,calculateTotal}) => {

    const dispatch = useDispatch()
    const [und,setUnd] = useState(quantity)
    const cart = useSelector((state)=> state.cart)

    const updateQuantity = ()=>{
        const current = cart.filter(item => item.name === product.name)[0]
        const quantidade = current.quantity
        setUnd(quantidade)
    }

    return(
        <Container>
            <figure>
                <img src={img} alt={name} />
                <figcaption>{name}</figcaption>
            </figure>
            <div className="container--infos">
                <h4>{name}</h4>
                <h5>{`R$ ${price}`}</h5>
                <div className="quantity--control">
                    <h6>{`Quantidade: ${und}`}</h6>
                    <div className="add--remove">
                        <button onClick={()=>{dispatch(removeWithQuantity(product))
                        updateQuantity()
                        calculateTotal()}}><HiMinusSm/></button>
                        <button onClick={()=>{dispatch(addToCartThunk(product))
                        updateQuantity()
                        calculateTotal()}}><HiPlus/></button>
                    </div>
                </div>
            </div>
            <button onClick={()=>{dispatch(removeFromCartThunk(product))
            calculateTotal()}}><FaTrashAlt/></button>
        </Container>
    )
}

export default ProductOverview