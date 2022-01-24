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
  { name: 'популярности', type: 'popular' },
  { name: 'цене', type: 'price' },
  { name: 'алфавиту', type: 'alphabet' },
]

export const Home = () => {
  const dispatch = useDispatch()
  const pizzaItems = useSelector(state => state.pizzas.items)
  const isLoading = useSelector(state => state.pizzas.isLoading)
  const { category, sortBy } = useSelector(state => state.filters)

  React.useEffect(() => {
    dispatch(fetchPizzas())
  }, [category])


  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index))
  }, [dispatch])
  const onSelectSortBy = React.useCallback((type) => {
    dispatch(setSortType(type))
  }, [dispatch])

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories
          items={categoryArr}
          categoryVal={category}
          onClickCategory={onSelectCategory}
        />
        <SortPopup
          sortType={sortBy}
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
