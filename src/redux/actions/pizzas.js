import axios from 'axios'

const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
})

const setPizzasItems = (items) => (
  {
    type: 'SET_PIZZA_ITEMS',
    payload: items,
  }
)

export const fetchPizzas = (category, { type, order }) => dispatch => {
  dispatch(setLoaded(false))
  axios
    .get(`http://localhost:3001/pizzas?${category !== null ? `category=${category}` : ''
    }&_sort=${type}&_order=${order}`)
    .then(({ data }) => dispatch(setPizzasItems(data)))
}