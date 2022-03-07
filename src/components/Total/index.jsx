import { BsFillBagCheckFill } from "react-icons/bs";
import {Container} from './style'

const Total = ({total}) => {

    
    return (
        <Container>
            <div>
                <BsFillBagCheckFill className="icon" size={'25px'}/>
                <h2>Checkout</h2>
            </div>
            <h1>{`Valor Total : R$ ${total}`}</h1>
            <button>Finalizar pedido</button>
        </Container>
    )
}

export default Total