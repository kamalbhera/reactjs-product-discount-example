import React from 'react';
import Product from './Product';

export default function Products() {
  const data = [
    {
      id: 1,
      title: 'Bread',
      description: 'Made in paris and destinated to the whole world',
      price: 1,
      image: 'bread.jpg',
      rating: 4.5,
    },
    {
      id: 2,
      title: 'Fresh Suiss milk',
      description:
        'Semi skimmed milk that comes straight from the alpes farmers',
      price: 1.15,
      image: 'milk.jpg',
      rating: 4.5,
    },
    {
      id: 3,
      title: 'Butter',
      description: 'Produced by us to insure a high quality butter',
      price: 0.8,
      image: 'butter.jpg',
      rating: 4.5,
    },
  ];

  return (
    <div>
      <div className='card'>
        <div className='card-header text-center lead fw-bolder'>Products</div>
        <div className='card-body py-5'>
          {data.map((product) => {
            return (
              <>
                <Product data={product} />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
