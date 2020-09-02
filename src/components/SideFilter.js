import React from 'react'

function SideFilter({handleFilter}) {
  const menuItems = [
    'Smoothie',
    'Soup',
    'Chia Bowl',
    'Oat Bowl',
    'Sundae',
    'Harvest Bowl',
    'Lattes',
    'Cookie',
    'Bites'
  ]

  const handleClickItem = (e) => {
    handleFilter(e.target.innerText);
  }

  return (
    <div className="bg-gray-300 w-1/6 ">
      <div className='font-bold pl-5 py-2'>Filters</div>
      {
        menuItems.map((menuItem, index) => {
          return (
            <div className='hover:bg-gray-500 hover:text-white pl-5 py-2' onClick={handleClickItem} key={index} >{menuItem}</div>
          )
        })
      }
    </div>
  )
}

export default SideFilter
