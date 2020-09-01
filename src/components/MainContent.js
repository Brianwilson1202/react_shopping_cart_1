import React from 'react'
import Search from './Search'
import CardList from './CardList'

function MainContent(props) {
  const {handleSearch, searchedProducts, handleCardClick} = props;

  return (
    <div className='w-5/6 pl-10'>
      <Search handleSearch={handleSearch} />
      <div className='w-full font-bold text-right my-3 pr-20'>SEARCH RESULTS ({searchedProducts.length}) </div>
      <CardList searchedProducts={searchedProducts} handleCardClick={handleCardClick} />
    </div>
  )
}

export default MainContent
