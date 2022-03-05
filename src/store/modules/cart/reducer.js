import { UPDATE } from "./actionsTypes"

const initialState = JSON.parse(localStorage.getItem('cart')) || []

const cartReducer =(state = initialState, action)=>{
    switch(action.type){
        case UPDATE:
            return action.payload
        default:
            return state
    }
}

export default cartReducer