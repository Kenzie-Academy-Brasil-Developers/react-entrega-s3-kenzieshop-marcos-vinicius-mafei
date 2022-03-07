import ProductsList from "../../components/ProductsList"
import Header from "../../components/Header"
import { useState } from "react"
import { useSelector } from "react-redux"
import {motion} from 'framer-motion'

const Home = () =>{

    const cart = useSelector((state)=> state.cart)
    const initial = cart.reduce((acc,product) => { return acc + product.quantity},0)
    const [count,setCount] = useState(initial)
    const calculateTotal = () =>{
       const cartSave = JSON.parse(localStorage.getItem('cart'))
       setCount(cartSave.reduce((acc,product) => { return acc + product.quantity},0))
    }

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration:1.5}}
        >
            <div>
                <Header count={count} calculateTotal={calculateTotal}/>
                <ProductsList calculateTotal={calculateTotal}/>
            </div>
        </motion.div>
    )
}

export default Home