import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import ProductCard from '../components/ProductCard';
import Filter from '../components/Filter';

const Products = () => {
	const products = useSelector((state) => state.products);

	// Используем React Hook useState для фильтрации по категориям
	const [filter, setFilter] = useState('All');

	// Фильтрация продуктов по выбранной категории
	const filteredProducts =
		filter === 'All'
			? products
			: products.filter((product) => product.category === filter);

	return (
		<section className="container my-5">
			<div className="row mb-4 products-header">
				<div className="col">
					<h3>Our Products</h3>
				</div>
				<div className="col text-md-end">
					<Filter filter={filter} setFilter={setFilter} />
				</div>
			</div>

			{/* Product Cards */}
			<div className="row">
				{filteredProducts.map((product) => (
					<ProductCard product={product} key={product.id} />
				))}
			</div>
		</section>
	);
};

export default Products;
