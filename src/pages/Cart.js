import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	clearCart,
	removeFromCart,
	addToCart,
	decreaseInCart,
} from '../redux/actions';

const Cart = () => {
	const cart = useSelector((state) => state.cart);
	console.log('Cart on cart page', cart);

	const dispatch = useDispatch();

	const clearCartHandler = () => {
		dispatch(clearCart());
	};

	const removeHandler = (product) => {
		dispatch(removeFromCart(product));
	};

	const increaseHandler = (product) => {
		dispatch(addToCart(product));
	};

	const decreaseHandler = (product) => {
		dispatch(decreaseInCart(product));
	};

	return (
		<section className="container my-5">
			<h2 className="mb-4">Shopping Cart</h2>
			<div className="list-group mb-3">
				{cart.map((item) => (
					<div
						key={item.id}
						className="list-group-item d-flex align-items-center"
					>
						<img
							src={item.img}
							alt={item.name}
							className="img-thumbnail me-3"
							style={{ width: '50px', height: '50px' }}
						/>
						<div className="flex-grow-1">
							<h5 className="mb-1">{item.name}</h5>
							<p className="mb-0">
								<strong>Price:</strong> {item.price}
							</p>
						</div>
						<div className="d-flex align-items-center">
							<button
								className="btn btn-outline-secondary btn-sm me-2"
								onClick={() => {
									decreaseHandler(item);
								}}
							>
								-
							</button>
							<span className="mx-2">{item.count}</span>
							<button
								className="btn btn-outline-secondary btn-sm me-3"
								onClick={() => {
									increaseHandler(item);
								}}
							>
								+
							</button>
						</div>
						<button
							className="btn btn-danger btn-sm"
							onClick={() => removeHandler(item)}
						>
							Remove
						</button>
					</div>
				))}
			</div>

			<div className="d-flex justify-content-between align-items-center mb-3">
				<h5>
					Total Items:{' '}
					{cart.reduce((sum, item) => sum + item.count, 0)}
				</h5>
				<h5>
					Total Price: $
					{cart
						.reduce(
							(sum, item) =>
								sum +
								item.count * parseFloat(item.price.slice(1)),
							0
						)
						.toFixed(2)}
				</h5>
			</div>

			<button
				className="btn btn-outline-secondary w-100"
				onClick={clearCartHandler}
			>
				Clear Cart
			</button>
		</section>
	);
};

export default Cart;
