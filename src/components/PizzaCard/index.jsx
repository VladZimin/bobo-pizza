import React from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'
import { Button } from '../Button'

const availableTypes = ['тонкое', 'традиционное']
const availableSizes = [26, 30, 40]

export const PizzaCard = ({ id, name, imageUrl, price, types, sizes, onClickAddPizzaToCart, addedCount }) => {
  const [typeIndex, setTypeIndex] = React.useState(types[0])
  const [sizeIndex, setSizeIndex] = React.useState(() => {
    switch (sizes[0]) {
      case 30:
        return 1
      case 40:
        return 2
      default:
        return 0
    }
  })
  const onSelectType = (index) => {
    setTypeIndex(index)
  }
  const onSelectSize = (index) => {
    setSizeIndex(index)
  }
  const handleAddPizzaToCart = () => {
    onClickAddPizzaToCart({ id, name, imageUrl, price })
  }
  return (
    <div className='pizza-block'>
      <img
        className='pizza-block__image'
        src={imageUrl}
        alt='Pizza'
      />
      <h4 className='pizza-block__title'>{name}</h4>
      <div className='pizza-block__selector'>
        <ul>
          {availableTypes.map((type, index) =>
            <li key={type}
                onClick={() => onSelectType(index)}
                className={cn({
                  active: typeIndex === index,
                  disabled: !types.includes(index),
                })}>
              {type}
            </li>,
          )}
        </ul>
        <ul>
          {availableSizes.map((size, index) =>
            <li key={size}
                onClick={() => onSelectSize(index)}
                className={cn({
                  active: sizeIndex === index,
                  disabled: !sizes.includes(size),
                })}>
              {size} см.
            </li>,
          )}
        </ul>
      </div>
      <div className='pizza-block__bottom'>
        <div className='pizza-block__price'>от {price} ₽</div>
        <Button onClick={handleAddPizzaToCart} className='button button--outline button--add'>
          <svg
            width='12'
            height='12'
            viewBox='0 0 12 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z'
              fill='white'
            />
          </svg>
          <span>Добавить</span>
          {addedCount && <i>{addedCount}</i>}
        </Button>
      </div>
    </div>
  )
}

PizzaCard.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  types: PropTypes.arrayOf(PropTypes.number),
  size: PropTypes.arrayOf(PropTypes.number),
}

PizzaCard.defaultProps = {
  name: '---',
  price: 0,
  types: [],
  size: [],
}