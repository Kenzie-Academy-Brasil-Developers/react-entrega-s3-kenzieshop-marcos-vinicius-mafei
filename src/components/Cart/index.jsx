import ProductOverview from "../ProductOverview"
import { useSelector } from "react-redux"
import {Container,CartBox,EmptyCart} from './style'
import {BsCart3} from 'react-icons/bs'


const Cart = ({calculateTotal}) => {

    const cart = useSelector((state)=> state.cart)

    return (
        <CartBox>
            <div className="title"><h1>Carrinho</h1><BsCart3 className='icon' size={'20px'}/></div>
            <Container>
                {cart.length>0? <ul>
                    {cart.map(item=><li key={item.name}><ProductOverview name={item.name} price={item.price} quantity={item.quantity} product={item} img={item.img} calculateTotal={calculateTotal}/></li>)}
                </ul> : <EmptyCart>
                            <h2>Ops!</h2>
                            <h3>Carrinho Vazio 😞</h3>
                            <h4>Adicione itens no carrinho para que eles apareçam aqui 😎</h4>
                        </EmptyCart>}
            </Container>
        </CartBox>
    )
}

export default Cart