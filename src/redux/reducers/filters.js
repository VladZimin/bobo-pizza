const initialState = {
  category: null,
  sortBy: 'popular',
}

export const filtersReducer = (state = initialState, action) => {
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