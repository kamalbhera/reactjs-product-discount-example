//add to cart Action
export const addItem = (product) => {
  return {
    type: 'ADDITEM',
    payload: product,
  };
};

//remove item from cart Action
export const deleteItem = (product) => {
  return {
    type: 'DELETEITEM',
    payload: product,
  };
};

//Apply discount
export const applyDiscount = (discount) => {
  return {
    type: 'APPLY_DISCOUNT',
    payload: discount,
  };
};

// Cancel discount
export const cancelDiscount = (discount) => {
  return {
    type: 'CANCEL_DISCOUNT',
    payload: discount,
  };
};
