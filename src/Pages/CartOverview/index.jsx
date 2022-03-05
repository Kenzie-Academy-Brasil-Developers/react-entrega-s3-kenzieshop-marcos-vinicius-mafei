import { useState } from "react"
import { useSelector } from "react-redux"
import Cart from "../../components/Cart"
import Header from "../../components/Header"
import Total from "../../components/Total"
import {Container} from './style'

const CartOverview = () => {

    const cart = useSelector((state)=> state.cart)
    const initial = cart.reduce((acc,product) => { return acc + (product.quantity * product.price)},0)
    const [total,setTotal] = useState(initial)
    const calculateTotal = () =>{
       const cartSave = JSON.parse(localStorage.getItem('cart'))
       setTotal(cartSave.reduce((acc,product) => { return acc + product.quantity * product.price},0))
    }

    return(
        <div>
            <Header checkout/>
            <Container>
                <Cart calculateTotal={calculateTotal}/>
                <Total total={total}/>
            </Container>
        </div>
    )
}

export default CartOverview