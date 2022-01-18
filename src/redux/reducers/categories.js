const initialState = {
  category: 0,
}

export const categoryReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'SET_CATEGORY':
      return { ...state, category: payload }
    default:
      return state
  }
}