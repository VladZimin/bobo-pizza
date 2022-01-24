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

export const fetchPizzas = () => dispatch => {
  dispatch(setLoaded(false))
  axios.get('http://localhost:3001/pizzas')
    .then(({ data }) => dispatch(setPizzasItems(data)))
}