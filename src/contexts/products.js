import React, { createContext, useEffect, useState } from 'react';

export const CardContext = createContext();

export const CardContextProvider = (props) => {
  const { children } = props;

  const [products, setProducts] = useState([]);
  const [newProducts, setNewProducts] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/daily-harvest/opportunities/master/web-1/data/products.json')
      .then((res => res.json()))
      .then((jsonData) => {
        // console.log('products:' , jsonData);
        setProducts(jsonData)
      })
      .catch(err => console.log(err))
  }, [ingredients]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/daily-harvest/opportunities/master/web-1/data/ingredients.json')
      .then((res => res.json()))
      .then((jsonData) => {
        // console.log('ingredients:' , jsonData);
        setIngredients(jsonData);
      })
      .catch(err => console.log(err))
  }, []);

  useEffect(() => {

    const newProducts_1 = products.map(product => {
      const newProduct = product;
      const ingredientIds = newProduct.ingredientIds.map(ingredientId => {
        const [matched] = ingredients.filter(ingredient => {
          return ingredient.id === ingredientId;
        });
        return matched ? matched.name : null;
      });
      newProduct.ingredientIds = ingredientIds;
      return newProduct;
    });
    setNewProducts(newProducts_1)
  }, [products, ingredients])


  return (
    <CardContext.Provider value={{ newProducts }}>
      {children}
    </CardContext.Provider>
  );
};
