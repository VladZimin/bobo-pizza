export const setCategory = (index) => (
  {
    type: 'SET_CATEGORY',
    payload: index,
  }
)
export const setSortType = ({ type, order }) => (
  {
    type: 'SET_SORT_TYPE',
    payload: { type, order },
  }
)


