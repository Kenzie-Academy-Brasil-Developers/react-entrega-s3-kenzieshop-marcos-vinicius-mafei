import {updateCart} from './actions'

export const addToCartThunk = (product)=> (dispatch,getState) =>{
    const {cart} = getState()
    const updatedCart = [...cart,product]
    localStorage.setItem('cart', JSON.stringify(updatedCart))
    dispatch(updateCart(updatedCart))
}

export const removeFromCartThunk = (product)=> (dispatch,getState) =>{
    const cart = getState()
    //fazer um if para verificar se o item tem mais de uma quantidade
    //caso sim => item.quantity -= 1
    //caso não:
    const updatedCart = cart.filter(item => item.name !== product.name)

    localStorage.setItem('cart', JSON.stringify(updatedCart))
    dispatch(updateCart(updatedCart))
}