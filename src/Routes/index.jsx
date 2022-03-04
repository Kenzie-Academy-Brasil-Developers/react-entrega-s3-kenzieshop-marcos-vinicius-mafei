import {Route,Switch} from 'react-router-dom'
import Checkout from '../Pages/Checkout'
import Home from '../Pages/Home'

const Routes = () =>{
    return(
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/checkout">
                <Checkout/>
            </Route>
        </Switch>
    )
}

export default Routes