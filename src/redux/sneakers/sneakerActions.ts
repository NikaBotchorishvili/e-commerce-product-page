import { ADD_TO_CART } from "./sneakerTypes"

export const addToCart = (qty: number) => {
    return {
        type: ADD_TO_CART,
        quantity: qty,
    }
}