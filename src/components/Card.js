import React from 'react'

function Card(props) {
  const { product, handleCardClick} = props;

  const handleClickItem = (value) => {
    handleCardClick(value);
  };

  return (
    <div className="card-container max-w-sm w-3/6 lg:max-w-full lg:flex mb-5" style={{width: '45%', minWidth: 500}}>
      <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" onClick={() => handleClickItem(product.id)} style={{ backgroundImage: `url(${product.image.url})` }} title="Woman holding a mug">
      </div>
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl mb-2" style={{fontSize: 16}}>{product.collection}</div>
          <div className="text-gray-900 font-bold text-xl mb-2">{product.name}</div>
          <p className="text-gray-700 text-base" style={{height: 100, overflow: 'auto'}}>{product.ingredientIds.join(',  ') }</p>
        </div>
      </div>
    </div> 
  )
}

export default Card
