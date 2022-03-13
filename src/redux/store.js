import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { pizzas } from './reducers/pizzas'
import { filters } from './reducers/filters'
import { cart } from './reducers/cart'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  pizzas,
  filters,
  cart,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))