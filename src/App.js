import React, {useContext, useState, useEffect} from 'react'
import Header from './components/Header';
import SideFilter from './components/SideFilter';
import MainContent from './components/MainContent';
import {CardContext} from './contexts'


function App() {
  const {newProducts} = useContext(CardContext);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProductNum, setSelectedProductNum] = useState(0);
  
  useEffect(() => {
    let result = [];
    result = filteredProducts[0] ?  filteredProducts.filter(newProduct => newProduct.ingredientIds.join(' ').includes(searchTerm)) : 
            newProducts.filter(newProduct => newProduct.ingredientIds.join(' ').includes(searchTerm));
    setSearchedProducts(result);
  }, [filteredProducts, searchTerm, newProducts])

  const handleSearch = (value) => {
    setSearchTerm(value);
  }

  const handleFilter = (value) => {
    let result = [];
    result = newProducts.filter(newProduct => newProduct.collection.includes(value));
    setFilteredProducts(result);
    setSearchTerm('');
  }

  const handleCardClick = (value) => {  
    // console.log('card clicked!', value);
    setSelectedProductNum(selectedProductNum + 1);
  }


  return (
    <div className="App">
      <Header selectedProductNum={selectedProductNum} />
      <div className="flex mt-5">
        <SideFilter handleFilter={handleFilter} />
        <MainContent 
          handleSearch={handleSearch} 
          searchedProducts={searchedProducts[0] ? searchedProducts : newProducts}
          handleCardClick={handleCardClick} 
        />
      </div>
    </div>
  );
}

export default App;
