import React from 'react';
import products from '../data/products';
import CarouselItem from '../components/CarouselItem';

const Gallery = () => {
	return (
		<section className="carousel-section py-5">
			<div className="container">
				<h3 className="text-center mb-4">Our Product Gallery</h3>
				<div
					id="productCarousel"
					className="carousel slide"
					data-bs-ride="carousel"
				>
					{/* Slides */}
					<div className="carousel-inner">
						{products.map((product, index) => {
							return (
								<CarouselItem
									product={product}
									key={product.id}
									index={index}
								/>
							);
						})}
					</div>

					{/* Controls */}
					<button
						className="carousel-control-prev"
						type="button"
						data-bs-target="#productCarousel"
						data-bs-slide="prev"
					>
						<span
							className="carousel-control-prev-icon"
							aria-hidden="true"
						></span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button
						className="carousel-control-next"
						type="button"
						data-bs-target="#productCarousel"
						data-bs-slide="next"
					>
						<span
							className="carousel-control-next-icon"
							aria-hidden="true"
						></span>
						<span className="visually-hidden">Next</span>
					</button>
				</div>
			</div>
		</section>
	);
};

export default Gallery;
