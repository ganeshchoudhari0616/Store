// for add item to cart

export const addFavorite = (product) => {
  return {
    type: "ADD_ITEM",
    payload: product,
  };
};

// for delete item to cart

export const delFavorite = (product) => {
  return {
    type: "DEL_ITEM",
    payload: product,
  };
};
