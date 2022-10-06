import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFavorite } from "../redux/action/index";
import ReactLoading from "react-loading";

const Products = () => {
	const [data, setData] = useState([]);
	const [filter, setFilter] = useState(data);
	const [loading, setLoading] = useState(false);
	const [categories, setCategories] = useState([]);

	let componentMount = true;

	const dispatch = useDispatch();
	const addProduct = (product) => {
		dispatch(addFavorite(product));
	};

	useEffect(() => {
		const getProducts = async () => {
			setLoading(true);
			let res = await fetch(
				"https://fakestoreapi.com/products"
			);
			const responce = await res.json();
			console.log(responce);

			setData(responce);
			const catres = [];
			for(let product of responce) {
				if(!catres.includes(product.category))
					catres.push(product.category);
			}
			setCategories(catres);

			
			if (componentMount) {
				setFilter(responce);
				setLoading(false);
			}
			return () => {
				// eslint-disable-next-line react-hooks/exhaustive-deps
				componentMount = false;
			};
		};
		getProducts();
	}, []);

	

	const filterProduct = (cat) => {
		const updatedList = data.filter((x) => x.category === cat);
		setFilter(updatedList);
	};

	const ShowProducts = () => {
		return (
			<>
				<div className="buttons d-flex justify-content-center mb-5 pb-5">
					<button
						className="btn btn-outline-dark me-2"
						onClick={() => setFilter(data)}
					>
						All
					</button>
					{categories.map((category, idx) => {
						return <button key={idx}
						className="btn btn-outline-dark me-2"
						onClick={() => filterProduct(category)}
					>
						{category}
					</button>
					})}
				</div>
				{filter.map((product) => {
					return (
						<div className="col-md-3 mb-5" key={product.id}>
							<div className="card h-100 text-center p-4 ">
								<div className="d-flex justify-content-center align-item-center">
									<img
										src={product.image}
										className="card-img-top"
										alt={product.title}
										style={{
											width: "100px",
											height: "100px",
										}}
									/>
								</div>

								<div className="card-body">
									<h5 className="card-title mb-0">
										{product.title.substring(0, 12)}...
									</h5>
									<p className="card-text lead fw-bold">
										{" "}
										<i className="fa-solid fa-rupee-sign "></i>{" "}
										{product.price}
									</p>
									<Link
										to={`/products/${product.id}`}
										className="btn btn-outline-dark mr-2"
									>
										View
									</Link>
									<button
										className="btn btn-outline-dark"
										onClick={() => addProduct(product)}
									>
										Add to Favorite
									</button>
								</div>
							</div>
						</div>
					);
				})}
			</>
		);
	};

	return (
		<>
			<div className="container my-5 py-5">
				<div className="row">
					<div className="col-12 mb-5">
						<h1 className="display-6 fw-bolder text-center ">
							Latest Products
						</h1>
						<hr />
					</div>
				</div>
				<div className="row justify-content-center">
					{loading ?<ReactLoading type="spin" color="#000000" /> : <ShowProducts />}
				</div>
			</div>
		</>
	);
};

export default Products;
