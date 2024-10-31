const CarouselItem = ({ product, index }) => {
	const { img, title } = product;

	return (
		<div className={`carousel-item ${index === 0 ? 'active' : ''}`}>
			<img src={img} className="d-block w-100" alt={title} />
		</div>
	);
};

export default CarouselItem;
