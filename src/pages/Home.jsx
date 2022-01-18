import React from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { Categories } from '../components/Categories'
import { SortPopup } from '../components/SortPopup'
import { PizzaCard } from '../components/PizzaCard'
import { setCategory } from '../redux/actions/categories'

const categoryArr = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const sortByArr = ['популярности', 'цене', 'алфавиту']

export const Home = () => {
  const dispatch = useDispatch()
  const pizzaItems = useSelector(state => state.pizzas.items)

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index))
  }, [])

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories items={categoryArr} onClickCat={onSelectCategory} />
        <SortPopup items={sortByArr} />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        {pizzaItems && pizzaItems.map((obj) => <PizzaCard key={obj.id} {...obj} />)}
      </div>
    </div>
  )
}
