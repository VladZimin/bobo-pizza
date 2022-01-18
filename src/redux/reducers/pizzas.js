const initialState = {
  items: [],
}

export const pizzasReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'SET_PIZZA_ITEMS':
      return {
        ...state,
        items: payload,
      }
    default:
      return state
  }
}