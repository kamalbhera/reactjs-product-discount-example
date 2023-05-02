import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect, useRef } from 'react';
import { applyDiscount, cancelDiscount } from '../redux/actions';

import Item from './Item';

export default function Cart() {
  //init dispatch
  const dispatch = useDispatch();

  //get cart from state
  const cart = useSelector((state) => state.handleCart);

  //apply discount function
  const applyDisc = (disc) => {
    dispatch(applyDiscount(disc));
  };

  //cancel discount function
  const cancelDisc = (disc) => {
    dispatch(cancelDiscount(disc));
  };

  const discount = useSelector((state) => state.handleDiscount);
  const [subtotal, setSubtotal] = useState(0);
  let total = subtotal - discount;

  //One Bread discount
  const [breadState, setBreadState] = useState(false);

  //Milk quantity discount
  const [milkDiscount, setMilkDiscount] = useState(0);

  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  useEffect(() => {
    //subtotal sum
    let sum = cart.reduce((total, current) => (total += current.total), 0);
    setSubtotal(sum);

    //Buy 2 Butter and get a Bread discount
    let ButterExist = cart.find((x) => x.title === 'Butter');
    if (ButterExist) {
      let BreadExist = cart.find((x) => x.title === 'Bread');

      if (ButterExist.qty >= 2 && BreadExist) {
        if (!breadState) {
          setBreadState(true);
          applyDisc((BreadExist.price * 50) / 100);
        }
      } else {
        if (breadState) {
          setBreadState(false);
          cancelDisc(0.5);
        }
      }
    }

    //Buy 3 Milk and get the 4th milk for free
    let MilkExist = cart.find((x) => x.title === 'Fresh Suiss milk');

    if (MilkExist) {
      if (MilkExist.qty >= 4) {
        let freeMilkCount = Math.floor(MilkExist.qty / 4);

        setMilkDiscount(MilkExist.price * freeMilkCount);

        // console.log(MilkExist.price * freeMilkCount);

        // applyDisc(MilkExist.price * freeMilkCount);
      } else {
        setMilkDiscount(0);
      }
    }
  }, [cart]);

  //get previous milk discount value
  const prevAmount = usePrevious(milkDiscount);

  //Buy 3 Milk and get the 4th milk for free
  useEffect(() => {
    if (prevAmount !== undefined && prevAmount !== milkDiscount) {
      cancelDisc(prevAmount);
      applyDisc(milkDiscount);
    }
  }, [milkDiscount]);

  return (
    <div>
      <div className='card'>
        <div className='card-header text-center lead fw-bolder'>
          Cart <i className='fa fa-shopping-cart'></i>
        </div>
        <div className='card-body py-5'>
          {cart.length === 0 ? (
            <div className=' py-5 my-5'>
              <img
                src='/assets/empty-cart.png'
                alt='empty cart'
                className='rounded mx-auto d-block'
                width={250}
              />
              <h1 className='lead fw-bolder text-center my-2'>
                Your cart is empty
              </h1>
            </div>
          ) : (
            cart.map((data) => {
              return <Item data={data} />;
            })
          )}

          <hr className='my-4' />
          <h4 className='text-end me-5 lead fs-5 '>
            Subtotal:
            <span className='fw-bolder ms-2'>€{subtotal.toFixed(2)}</span>
          </h4>
          <h4 className='text-end me-5 lead fs-5'>
            Discount:
            <span className='fw-bolder ms-2'>€{discount.toFixed(2)}</span>
          </h4>
          <h4 className='text-end me-5 lead fs-3 fw-bold'>
            Total: <span className='fw-bold ms-2'>€{total.toFixed(2)}</span>
          </h4>
        </div>
      </div>
    </div>
  );
}
