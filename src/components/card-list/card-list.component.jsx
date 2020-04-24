import React from 'react';
import './card-list.css';
import Card from '../card';

export const CardList = (props) => {
  return (
    <div className='card-list'>
      { props.items.map((item) => (<Card key={item.id} item={item} />)) }
    </div>
  );
};