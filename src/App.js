import React from 'react'
import { useDispatch } from 'react-redux'
import { setPizzasItems } from './redux/actions/pizzas'

import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Cart } from './pages/Cart'

import { Route, Routes } from 'react-router-dom'
import axios from 'axios'


function App() {
  const dispatch = useDispatch()
  // const catIndex = useSelector(state => state.category.category)
  window.test = () => {
    axios.get('http://localhost:3001/pizzas')
      .then(({ data }) => dispatch(setPizzasItems(data)))
  }
  React.useEffect(() => {
    axios.get('http://localhost:3001/pizzas')
      .then(({ data }) => dispatch(setPizzasItems(data)))
  }, [])
  // React.useEffect(() => {
  //   axios.get(`http://localhost:3001/pizzas?category=${catIndex}`)
  //     .then(({ data }) => dispatch(setPizzasItems(data)))
  // }, [catIndex])
  return (
    <div className='App'>
      <div className='wrapper'>
        <Header />
        <div className='content'>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>

        </div>
      </div>
    </div>
  )
}

export default App
