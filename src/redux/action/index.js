

export const addFavorite = (product) => {
  return {
    type: "ADD_ITEM",
    payload: product,
  };
};


export const delFavorite = (product) => {
  return {
    type: "DEL_ITEM",
    payload: product,
  };
};
