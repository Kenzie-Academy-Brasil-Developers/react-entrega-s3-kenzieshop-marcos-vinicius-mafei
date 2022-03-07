import ProductsList from "../../components/ProductsList"
import Header from "../../components/Header"
import { useState } from "react"
import { useSelector } from "react-redux"

const Home = () =>{

    const cart = useSelector((state)=> state.cart)
    const initial = cart.reduce((acc,product) => { return acc + product.quantity},0)
    const [count,setCount] = useState(initial)
    const calculateTotal = () =>{
       const cartSave = JSON.parse(localStorage.getItem('cart'))
       setCount(cartSave.reduce((acc,product) => { return acc + product.quantity},0))
    }

    return (
        <div>
            <Header count={count} calculateTotal={calculateTotal}/>
            <ProductsList calculateTotal={calculateTotal}/>
        </div>
    )
}

export default Home