import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { delFavorite } from "./../redux/action/index";
const Cart = () => {
  const data = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();
  const deleteProduct = (product) => {
    dispatch(delFavorite(product));
  }
  return (
    <>
    {data.map(product => {
      return <div className="row" key={product._id}>
        <div className="col-md-4">
          <img
            src={product.avatar}
            alt={product.name}
            height="200px"
            width="180px"
          />
        </div>
        <div className="col-md-4">
          <h3>{product.name}</h3>
          <p className="lead fw-bold">
            {product.qty} X $ {product.price} = ${product.qty * product.price}
          </p>
          <button
            className="btn btn-outline-dark me-4"
              onClick={() => deleteProduct(product)}
          >
            <i className="fa fa-trash"></i>
          </button>
        </div>
      </div>
    })}
    </>
  );
};

export default Cart;
