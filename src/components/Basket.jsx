import React from 'react';
import Cart from './Cart';
import Products from './Products';

export default function Basket() {
  return (
    <div>
      <div className='container py-5'>
        <div className='row'>
          <div className='col-md-6'>
            <Products />
          </div>
          <div className='col-md-6'>
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
}
