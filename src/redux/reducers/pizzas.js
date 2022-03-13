const initialState = {
  items: [],
  isLoading: false,
}

export const pizzas = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'SET_PIZZA_ITEMS':
      return {
        ...state,
        items: payload,
        isLoading: true,
      }
    case 'SET_LOADED':
      return {
        ...state,
        isLoading: payload,
      }
    default:
      return state
  }
}