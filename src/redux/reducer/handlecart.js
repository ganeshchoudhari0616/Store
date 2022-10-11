const favorite = [];

const handleCart = (state = favorite, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADD_ITEM":
      
      const exit = state.find((x) => x._id === product._id);
      if (exit) {
        // increase the qty
        return state.map((x) =>
          x._id === product._id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }

    case "DEL_ITEM":
      const exit1 = state.find((x) => x._id === product._id);
      if (exit1.qty === 1) {
        return state.filter((x) => x._id !== exit1._id);
      } else {
        return state.map((x) =>
          x._id === product._id ? { ...x, qty: x.qty - 1 } : x
        );
      }
    default:
      return state;
  }
};

export default handleCart;
