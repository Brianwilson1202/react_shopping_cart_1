import React, {useRef} from 'react'

function Search({handleSearch}) {
  const msgRef = useRef(null);

  const handleKeyPress = (e) => {
    handleSearch(msgRef.current.value);
    msgRef.current.value = null;
  }

  return (
    <div>
      <div className='font-bold'>INGREDIENTS SEARCH</div>
      <div className='flex'>
        <input ref={msgRef} onKeyPress={event => event.key === 'Enter' ? handleKeyPress() : null} className='w-2/6 border py-1 px-5' placeholder='Input and Click Enter'/>
        <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
  
    </div>
  )
}

export default Search
