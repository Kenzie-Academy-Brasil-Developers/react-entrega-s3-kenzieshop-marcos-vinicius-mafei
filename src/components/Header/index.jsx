import logoKenzieGames from '../../images/logoKenzieGames.png'
import {FancyHeader} from'./style'
import CartControl from '../CartControl'
import {Link} from 'react-router-dom'
import { AiOutlineHome } from "react-icons/ai";

const Header = ({checkout = false}) =>{
    return(
        <FancyHeader>
            <div className="container">
                <figure>
                    <img src={logoKenzieGames} alt="logo Kenzie Games" />
                    <figcaption>logo Kenzie Games</figcaption>
                </figure>
                <nav>
                    {checkout? <Link to="/">Home <AiOutlineHome size="20px"/></Link> : <CartControl/>}
                </nav>
            </div>
        </FancyHeader>
    )
}

export default Header