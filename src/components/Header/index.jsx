import logoKenzieGames from '../../images/logoKenzieGames.png'
import {FancyHeader} from'./style'
import CartControl from '../CartControl'

const Header = () =>{
    return(
        <FancyHeader>
            <div className="container">
                <figure>
                    <img src={logoKenzieGames} alt="logo Kenzie Games" />
                    <figcaption>logo Kenzie Games</figcaption>
                </figure>
                <nav>
                <CartControl/>
                <div>
                    <ul>
                        
                    </ul>
                </div>
                </nav>
            </div>
        </FancyHeader>
    )
}

export default Header