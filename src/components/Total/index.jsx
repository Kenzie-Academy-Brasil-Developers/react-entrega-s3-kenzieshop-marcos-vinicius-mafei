import { BsFillBagCheckFill } from "react-icons/bs";
import { toast } from "react-toastify";
import {Container} from './style'

const Total = ({total}) => {

    
    return (
        <Container>
            <div>
                <BsFillBagCheckFill className="icon" size={'25px'}/>
                <h2>Checkout</h2>
            </div>
            <h1>{`Valor Total : R$ ${total}`}</h1>
            <button onClick={()=>{toast.success('Talvez em um futuro próximo 😉',{theme:'dark'})}}>Finalizar pedido</button>
        </Container>
    )
}

export default Total