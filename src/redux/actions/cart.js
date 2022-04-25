export const setAddToCart = (pizzaObj) => (
  {
    type: 'SET_ADD_TO_CART',
    payload: pizzaObj,
  }
)
export const clearCart = () => (
  {
    type: 'CLEAR_CART',
  }
)
export const removeCartItem = (id) => (
  {
    type: 'REMOVE_CART_ITEM',
    payload: id,
  }
)



