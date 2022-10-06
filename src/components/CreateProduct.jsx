import React from "react";

export default function CreateProduct() {
	async function sendPostReq(e) {
		e.preventDefault();
		const data = {
			name: e.target.name.value,
			price: e.target.price.value,
			description: e.target.description.value,
			category: e.target.category.value,
			avatar: e.target.avatar.value,
            developerEmail: "onkarbagade21@gmail.com"
		};
        console.log(data);
        const res = await fetch('https://upayments-studycase-api.herokuapp.com/api/products', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                "Authorization" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9ua2FyYmFnYWRlMjFAZ21haWwuY29tIiwiZ2l0aHViIjoiaHR0cHM6Ly9naXRodWIuY29tL29ua2FyYmFnYWRlIiwiaWF0IjoxNjYzMzUyODY3LCJleHAiOjE2NjM3ODQ4Njd9.vKWw2iia1PpglQYSb3O6I92Vhe1reUuscnjZ3Yn8L-Q"
            }
        })
        const response = await res.json();
        console.log(response);
	}

	return (
		<div className="d-flex justify-content-center mt-5 py-5 bg-dark text-white">
			<form onSubmit={sendPostReq} className="w-50">
				<div className="form-group">
					<label htmlFor="name">Name:</label>
					<input
						type="text"
						className="form-control"
						id="name"
						name="name"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="price">Price:</label>
					<input
						type="number"
						className="form-control"
						id="price"
						name="price"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="category">Category:</label>
					<input
						type="text"
						className="form-control"
						id="category"
						name="category"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="description">Description:</label>
					<input
						type="text"
						className="form-control"
						id="description"
						name="description"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="avatar">Avatar</label>
					<input
						type="text"
						className="form-control"
						id="avatar"
						name="avatar"
					/>
				</div>
				<button type="submit" className="btn btn-outline-light btn-lg">
					Submit
				</button>
			</form>
		</div>
	);
}
