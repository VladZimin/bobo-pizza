import React from 'react'

export const Categories = ({ items }) => {
  const [curIndex, setCurIndex] = React.useState(null)
  const onSelectItem = (index) => {
    setCurIndex(index)
  }

  return <div className='categories'>
    <ul>
      <li onClick={() => setCurIndex(null)} className={curIndex === null ? 'active' : ''}>Все</li>
      {items.map((item, index) =>
        <li key={`${item}_${index}`} onClick={() => onSelectItem(index)}
            className={`${curIndex === index ? 'active' : ''}`}>{item}</li>)}
    </ul>
  </div>
}