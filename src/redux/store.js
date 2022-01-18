import { combineReducers, createStore } from 'redux'
import { pizzasReducer } from './reducers/pizzas'
import { categoryReducer } from './reducers/categories'

const rootReducer = combineReducers({
  pizzas: pizzasReducer,
  category: categoryReducer,
})
export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())