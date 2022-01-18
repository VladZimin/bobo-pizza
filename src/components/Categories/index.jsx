import React from 'react'

export const Categories = React.memo(({ items, onClickCat }) => {
  const [curIndex, setCurIndex] = React.useState(null)
  console.log('RERENDER')
  const onSelectItem = (index) => {
    setCurIndex(index)
    onClickCat(index)
  }

  return <div className='categories'>
    <ul>
      <li onClick={() => setCurIndex(null)} className={curIndex === null ? 'active' : ''}>Все</li>
      {items.map((item, index) =>
        <li key={`${item}_${index}`} onClick={() => onSelectItem(index)}
            className={`${curIndex === index ? 'active' : ''}`}>{item}</li>)}
    </ul>
  </div>
})