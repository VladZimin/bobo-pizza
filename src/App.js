import React from 'react'

import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Cart } from './pages/Cart'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'

function App() {
  const [pizzaItems, setPizzaItems] = React.useState([])

  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json')
      .then(({ data }) => setPizzaItems(data.pizzas))
  }, [])

  return (
    <div className='App'>
      <div className='wrapper'>
        <Header />
        <div className='content'>
          <div className='container'>
            <Routes>
              <Route path='/' element={<Home items={pizzaItems} />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
