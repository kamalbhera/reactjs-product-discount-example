const handleDiscount = (state = 0, action) => {
  const discount = action.payload;

  switch (action.type) {
    // Apply bread discount
    case 'APPLY_DISCOUNT':
      return state + discount;

    // Cancel bread discount
    case 'CANCEL_DISCOUNT':
      return state - discount;

    default:
      return state;
  }
};

export default handleDiscount;
