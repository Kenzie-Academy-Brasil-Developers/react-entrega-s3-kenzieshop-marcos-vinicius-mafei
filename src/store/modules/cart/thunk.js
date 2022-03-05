import {updateCart} from './actions'

export const addToCartThunk = (product)=> (dispatch,getState) =>{
    const {cart} = getState()
    const filtered = cart.filter(item => item.name === product.name)[0]
    if(filtered){
        filtered.quantity = filtered.quantity + 1
        localStorage.setItem('cart', JSON.stringify(cart))
        dispatch(updateCart(cart))
    }else{
        const updatedCart = [...cart,{...product,quantity:1}]
        localStorage.setItem('cart', JSON.stringify(updatedCart))
        dispatch(updateCart(updatedCart))
    }
}

export const removeFromCartThunk = (product)=> (dispatch,getState) =>{
    const {cart} = getState()
    const filtered = cart.filter(item => item.name === product.name)[0]
    if(filtered.quantity > 1){
        filtered.quantity = filtered.quantity - 1
        localStorage.setItem('cart', JSON.stringify(cart))
        dispatch(updateCart(cart))
    }else{
        const filtereds = cart.filter(item => item.name !== product.name)
        if(filtereds.length > 0){
            const updatedCart = filtereds
            localStorage.setItem('cart', JSON.stringify(updatedCart))
            dispatch(updateCart(updatedCart))
        }else{
            const updatedCart = []
            localStorage.setItem('cart', JSON.stringify(updatedCart))
            dispatch(updateCart(updatedCart))
        }
    }
}