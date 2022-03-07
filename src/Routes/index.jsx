import {Route,Switch} from 'react-router-dom'
import CartOverview from '../Pages/CartOverview'
import Home from '../Pages/Home'
import { AnimatePresence } from 'framer-motion'

const Routes = () =>{
    return(
        <AnimatePresence>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/checkout">
                    <CartOverview/>
                </Route>
            </Switch>
        </AnimatePresence>
    )
}

export default Routes