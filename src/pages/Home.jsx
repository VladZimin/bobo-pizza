import React from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { Categories } from '../components/Categories'
import { SortPopup } from '../components/SortPopup'
import { PizzaCard } from '../components/PizzaCard'
import { LoadingBlock } from '../components/LoadingBlock'
import { setCategory, setSortType } from '../redux/actions/filters'
import { fetchPizzas } from '../redux/actions/pizzas'

const categoryArr = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const sortByArr = [
  { name: 'популярности', type: 'rating', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавиту', type: 'name', order: 'asc' },
]

export const Home = () => {
  const dispatch = useDispatch()
  const pizzaItems = useSelector(state => state.pizzas.items)
  const isLoading = useSelector(state => state.pizzas.isLoading)
  const { category, sortBy } = useSelector(state => state.filters)

  React.useEffect(() => {
    dispatch(fetchPizzas(category, sortBy))
  }, [category, sortBy])


  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index))
  }, [])
  const onSelectSortBy = React.useCallback((obj) => {
    dispatch(setSortType(obj))
  }, [])

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories
          items={categoryArr}
          categoryVal={category}
          onClickCategory={onSelectCategory}
        />
        <SortPopup
          sortObj={sortBy}
          items={sortByArr}
          onClickSortBy={onSelectSortBy}
        />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        {
          isLoading
            ? pizzaItems.map((obj) => <PizzaCard key={obj.id} {...obj} />)
            : Array(10).fill(null).map((_, index) => <LoadingBlock key={index} />)
        }
      </div>
    </div>
  )
}
