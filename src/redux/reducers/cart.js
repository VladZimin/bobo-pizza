const initialState = {
  items: {},
  totalCount: 0,
  totalPrice: 0,
}

export const cart = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'SET_ADD_TO_CART':
      const newItems = {
        ...state.items,
        [payload.id]: !state.items[payload.id]
          ? [payload]
          : [...state.items[payload.id], payload],
      }
      const allPizzas = [].concat(...Object.values(newItems))
      return {
        ...state,
        items: newItems,
        totalCount: allPizzas.length,
        totalPrice: allPizzas.reduce((sum, obj) => sum + obj.price, 0),
      }
    default:
      return state
  }
}