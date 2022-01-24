import React from 'react'

export const Categories = React.memo(({ items, onClickCategory, categoryVal }) => {


  return <div className='categories'>
    <ul>
      <li onClick={() => onClickCategory(null)} className={categoryVal === null ? 'active' : ''}>Все</li>
      {items.map((item, index) =>
        <li key={`${item}_${index}`} onClick={() => onClickCategory(index)}
            className={`${categoryVal === index ? 'active' : ''}`}>{item}</li>)}
    </ul>
  </div>
})