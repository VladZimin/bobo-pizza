const initialState = {
  items: {},
  totalCount: 0,
  totalPrice: 0,
}

const getTotalPrice = arr => arr.reduce((sum, obj) => sum + obj.price, 0)

export const cart = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'SET_ADD_TO_CART': {
      const currentPizzaItems = !state.items[payload.id]
        ? [payload]
        : [...state.items[payload.id].items, payload]
      const newItems = {
        ...state.items,
        [payload.id]: {
          items: currentPizzaItems,
          totalPrice: getTotalPrice(currentPizzaItems),
        },
      }
      const allPizzas = [].concat(...Object.values(newItems).map(obj => obj.items))
      return {
        ...state,
        items: newItems,
        totalCount: allPizzas.length,
        totalPrice: getTotalPrice(allPizzas),
      }
    }
    case 'REMOVE_CART_ITEM': {
      const newItems = {
        ...state.items,
      }
      const currentTotalCount = state.totalCount - newItems[payload].items.length
      const currentTotalPrice = state.totalPrice - newItems[payload].totalPrice
      delete newItems[payload]
      return {
        items: newItems,
        totalCount: currentTotalCount,
        totalPrice: currentTotalPrice,
      }
    }
    case 'CLEAR_CART': {
      return {
        items: {},
        totalCount: 0,
        totalPrice: 0,
      }
    }
    default:
      return state
  }
}