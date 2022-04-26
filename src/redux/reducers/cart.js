const initialState = {
  items: {},
  totalCount: 0,
  totalPrice: 0,
}

const getTotalPrice = arr => arr.reduce((sum, obj) => sum + obj.price, 0)
const getAllPizzas = obj => [].concat(...Object.values(obj).map(obj => obj.items))

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
      const allPizzas = getAllPizzas(newItems)
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
    case 'PLUS_CART_ITEM': {
      const newItems = [...state.items[payload].items, state.items[payload].items[0]]
      const newObjItems = {
        ...state.items,
        [payload]: {
          items: newItems,
          totalPrice: getTotalPrice(newItems),
        },
      }
      const allPizzas = getAllPizzas(newObjItems)
      return {
        ...state,
        items: newObjItems,
        totalCount: allPizzas.length,
        totalPrice: getTotalPrice(allPizzas),
      }
    }
    case 'MINUS_CART_ITEM': {
      const oldItems = state.items[payload].items
      const newItems = oldItems.length > 1 ? state.items[payload].items.slice(1) : oldItems
      const newObjItems = {
        ...state.items,
        [payload]: {
          items: newItems,
          totalPrice: getTotalPrice(newItems),
        },
      }
      const allPizzas = getAllPizzas(newObjItems)
      return {
        ...state,
        items: newObjItems,
        totalCount: allPizzas.length,
        totalPrice: getTotalPrice(allPizzas),
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