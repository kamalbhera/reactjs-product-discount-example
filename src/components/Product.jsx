import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/actions';

export default function Product({ data }) {
  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch(addItem(product));
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
                <span className='ms-2'>
                  ({data.rating}
                  <i className='fa fa-star ms-2'></i>)
                </span>
              </h5>
              <p className='card-text lead'>{data.description}.</p>
              <h3 className='lead fw-bolder text-end me-3'>
                Price: €{data.price.toFixed(2)}
              </h3>
              <p className='card-text text-end'>
                <button
                  onClick={() => addToCart(data)}
                  className='btn btn-outline-primary py-2 px-4 mt-2'
                >
                  Add to Cart
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
