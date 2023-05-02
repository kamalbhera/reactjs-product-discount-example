const cart = [];

const handleCart = (state = cart, action) => {
  const product = action.payload;

  switch (action.type) {
    case 'ADDITEM':
      //check if Product is Already exist
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        return state.map((x) =>
          x.id === product.id
            ? { ...x, qty: x.qty + 1, total: x.price * (x.qty + 1) }
            : x
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
            total: product.price,
          },
        ];
      }

    case 'DELETEITEM':
      const exist1 = state.find((x) => x.id === product.id);

      if (exist1.qty === 1) {
        return state.filter((x) => x.id !== exist1.id);
      } else {
        return state.map((x) =>
          x.id === product.id
            ? { ...x, qty: x.qty - 1, total: x.price * (x.qty - 1) }
            : x
        );
      }

    default:
      return state;
  }
};

export default handleCart;
