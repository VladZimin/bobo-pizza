const initialState = {
  category: null,
  sortBy: { type: 'rating', order: 'desc' },
}

export const filters = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'SET_CATEGORY':
      return { ...state, category: payload }
    case 'SET_SORT_TYPE':
      return { ...state, sortBy: payload }
    default:
      return state
  }
}