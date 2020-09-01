import React from 'react'

function Header({selectedProductNum}) {
  return (
    <div className=''>
      <div className="flex">
        <div className="w-5/6 bg-gray-300 h-12 text-center font-bold py-3"> DAILY HARVEST</div>
        <div className="w-1/6 bg-gray-800 h-12 text-center text-white py-3">BOX ({selectedProductNum})</div>
      </div>
    </div>
  )
}

export default Header
