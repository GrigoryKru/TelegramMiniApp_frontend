import React, { useState } from 'react';
import './ProductList.css';
import ProductItem from '../ProductItem/ProductItem';
import { useTelegram } from '../hooks/use-telegram';

const products = [
  {id: '1', title: 'Джинсы', price: 5000, description: 'Нормик'},
  {id: '2', title: 'Джинсы2', price: 2344, description: 'Нормик'},
  {id: '3', title: 'Джинсы3', price: 1234, description: 'Нормик'},
  {id: '4', title: 'Джинсы4', price: 2345, description: 'Нормик'},
]

const getTotalPrice = (items = []) => {
  return items.reduce((acc,item) => {
    return acc += item.price
  }, 0)
}

const ProductList = () => {
  const [addedItems, setAddedItems] = useState([]);
  const { tg } = useTelegram();

  const onAdd = (product) => {
    const alreadyAdded = addedItems.find((item) => item.id === product.id);
    let newItems = [];

    if (alreadyAdded) {
      newItems = addedItems.filter((item) => item.id !== product.id);
    } else {
      newItems = [...addedItems, product];
    }

    setAddedItems(newItems);

    if (newItems.length === 0) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
      tg.MainButton.setParams({text: `Купить ${getTotalPrice}`})
    }
  };
  return (
    <div className={'list'}>
      {ProductList.map((item) => (
        <ProductItem product={item} onAdd={onAdd} className={'item'} />
      ))}
    </div>
  );
};

export default ProductList;
