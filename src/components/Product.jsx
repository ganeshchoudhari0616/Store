import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { addFavorite } from "./../redux/action/index";
import ReactLoading from "react-loading";

const Products = () => {
	const { id } = useParams();

	const [product, setProduct] = useState();
	const [loading, setLoading] = useState(true);

	const dispatch = useDispatch();

	const addProduct = (product) => {
		dispatch(addFavorite(product));
	};

	// useeffect start
	useEffect(() => {
		setLoading(true);
		const getProduct = async () => {
			const res = await fetch("https://fakestoreapi.com/products");
			if (!res.ok) console.err("Failed to fetch in product");
			const products = await res.json();
			const idToFind = parseInt(id);
			const foundProduct = products.find((product) => product.id === idToFind);
			setProduct(foundProduct);
			setLoading(false);
		};
		getProduct();
	}, [id]);
	// useeffect end

	const Loading = () => {
		return (
			<>
				<ReactLoading type="spin" color="#000000" />
			</>
		);
	};

	const ShowProduct = () => {
		return (
			<>
				<div className="col-md-6">
					<img
						src={product.image}
						className="card-img-top my-5"
						alt={product.title}
						height="400px"
						width="400px"
					/>
				</div>
				<div className="col-md-6">
					<h1 className="display-5">{product.title}</h1>

					<h3 className="display-6 fw-bold my-4 ">
						<i className="fa-solid fa-rupee-sign"></i>{" "}
						{product.price}
					</h3>
					<p className="lead">{product.description}</p>
					<button
						className="btn btn-outline-dark px-4 py-2"
						onClick={() => addProduct(product)}
					>
						<i className="fa-solid fa-cart-plus"></i> Add To
						Favorite
					</button>
					<Link
						to="/favorite"
						className="btn btn-dark ms-2 px-3 py-2"
					>
						Go To Favorite
					</Link>
				</div>
			</>
		);
	};

	return (
		<div>
			<div className="container py-4">
				<div className="row py-4">
					{loading ? <Loading /> : <ShowProduct />}
				</div>
			</div>
		</div>
	);
};

export default Products;
