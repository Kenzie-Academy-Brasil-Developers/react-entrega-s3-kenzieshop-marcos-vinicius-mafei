import {BsCart3} from 'react-icons/bs'
import {Container} from './style'
import CartPreview from '../CartPreview'
import { useEffect, useState } from 'react'
import {IoMdArrowDropup} from 'react-icons/io'

const CartControl = ({count,calculateTotal}) => {


    const [showPreview,setShowPreview] = useState(false)

    const [mouseIcon,setMouseIcon] = useState(false)
    const [mousePop,setMousePop] = useState(false)

    useEffect(()=>{
        if(mouseIcon || mousePop){
            setShowPreview(true)
        }else{
            setShowPreview(false)
        }
    },[mouseIcon,mousePop])

    return(
        <Container onMouseOver={()=>setMouseIcon(true)} onMouseLeave={()=>setMouseIcon(false)}>
            <div className="cart--counter">{count}</div>
            <BsCart3 size={'20px'} className='cart'/>
            {showPreview && <div className="cart--popup"><div className='arrow'><IoMdArrowDropup size={'50px'} className='icon'/></div><CartPreview setMousePop={setMousePop} calculateTotal={calculateTotal}/></div>}
        </Container>
    )
}

export default CartControl