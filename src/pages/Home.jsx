import React from 'react'
import { Categories } from '../components/Categories'
import { SortPopup } from '../components/SortPopup'
import { PizzaCard } from '../components/PizzaCard'

export const Home = ({ items }) => {
  return <>
    <div className='content__top'>
      <Categories items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']} />
      <SortPopup items={['популярности', 'цене', 'алфавиту']} />
    </div>
    <h2 className='content__title'>Все пиццы</h2>
    <div className='content__items'>
      {items && items.map((obj) => <PizzaCard key={obj.id} {...obj} />)}
    </div>
  </>
}