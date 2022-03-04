import {Route,Switch} from 'react-router-dom'
import CartOverview from '../Pages/CartOverview'
import Home from '../Pages/Home'

const Routes = () =>{
    return(
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/checkout">
                <CartOverview/>
            </Route>
        </Switch>
    )
}

export default Routes