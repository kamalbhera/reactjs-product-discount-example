import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem, deleteItem } from '../redux/actions';

export default function Item({ data }) {
  const dispatch = useDispatch();

  const increment = (product) => {
    dispatch(addItem(product));
  };

  const decrement = (product) => {
    dispatch(deleteItem(product));
  };

  return (
    <div>
      <div className='card mb-3 mx-auto' style={{ maxWidth: 520 }}>
        <div className='row g-0'>
          <div className='col-md-4 text-center mt-4'>
            <img
              src={`/assets/${data.image}`}
              className='img-fluid rounded-start '
              alt={data.title}
              width={120}
            />
          </div>
          <div className='col-md-8'>
            <div className='card-body'>
              <h5 className='card-title display-6 fs-4 fw-bolder'>
                {data.title}
              </h5>
              <p className='my-4'>
                <span className='lead me-3 fw-bold fs-6'>Quantity:</span>
                <button
                  onClick={() => decrement(data)}
                  className='btn btn-outline-danger fw-bolder'
                >
                  -
                </button>
                <span className='mx-3 lead fw-bolder'>{data.qty}</span>
                <button
                  onClick={() => increment(data)}
                  className='btn btn-outline-success fw-bolder'
                >
                  +
                </button>
              </p>
              <h3 className='lead fw-bolder text-end me-3'>
                Price: €{data.total.toFixed(2)}
              </h3>
              <p className='card-text text-end'></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
