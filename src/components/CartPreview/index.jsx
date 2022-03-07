import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import ProductPreview from "../ProductPreview"
import {Container,EmptyCart} from './style'

const CartPreview = ({setMousePop,calculateTotal}) => {

    const history = useHistory()
    const cart = useSelector((state)=>state.cart)
    const preview = cart.slice(0,3)

    return(
        <Container onMouseOver={()=>setMousePop(true)} onMouseOut={()=>setMousePop(false)}>
            {preview.length > 0 ?<><ul>
                {preview.map(product =><li key={product.name}><ProductPreview name={product.name} price={product.price} img={product.img} quantity={product.quantity} product={product} calculateTotal={calculateTotal}/></li>)}
            </ul>
            <button className="full--cart" onClick={()=>history.push('/checkout')}>Ver Carrinho Completo</button>
            </>
        :
            <EmptyCart>
                <h2>Ops!</h2>
                <h3>Carrinho Vazio 😞</h3>
                <h4>Adicione itens no carrinho para que eles apareçam aqui 😎</h4>
            </EmptyCart>
        }
        </Container>
    )
}

export default CartPreview