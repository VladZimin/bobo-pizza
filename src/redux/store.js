import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { pizzasReducer } from './reducers/pizzas'
import { filtersReducer } from './reducers/filters'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  pizzas: pizzasReducer,
  filters: filtersReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))