import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions';

const ProductCard = ({ product }) => {
	const { name, img, desc, price, category } = product;

	const dispatch = useDispatch();

	const addToCartHandler = (product) => {
		// Добавление в корзину
		dispatch(addToCart(product));
	};

	return (
		<div className="col-lg-4 mb-4">
			<div className="card">
				<img src={img} className="card-img-top" alt={name} />
				<div className="card-body text-center">
					<p className="card-category text-uppercase text-muted">
						{category}
					</p>
					<h5 className="card-title">{name}</h5>
					<p className="card-text">{desc}</p>
					<div className="price-btn-wrapper">
						<p className="card-price text-muted">{price}</p>
						<button
							className="btn btn-secondary"
							onClick={() => addToCartHandler(product)}
						>
							Add to cart
						</button>
					</div>
					{/* <a href="#" className="btn btn-primary">
						View Details
					</a> */}
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
