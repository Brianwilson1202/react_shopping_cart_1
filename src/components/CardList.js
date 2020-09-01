import React from 'react'
import Card from './Card'

function CardList(props) {
  const {searchedProducts, handleCardClick} = props;

  return (
    <div className=''  style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', padding: '0px 5rem'}}>
      {
        searchedProducts.map((product, index) => {
          return (
            <Card product={product} handleCardClick={handleCardClick} key={index} />
          )
        })
      }
    </div>
  )
}

export default CardList
