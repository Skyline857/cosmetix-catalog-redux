import {useSelector} from 'react-redux'
import ProductCard from '../components/ProductCard';

const Welcome = ({ title }) => {

	const products = useSelector((state) => state.products);

	function getRandomProducts(arr, num) {
		const shuffled = [...arr].sort(() => 0.5 - Math.random()); // Перемешиваем копию массива
		return shuffled.slice(0, num); // Возвращаем первые num элементов
	}

	const randomProducts = getRandomProducts(products, 3);
	console.log(randomProducts);


	return (
		<section className="py-5 text-center">
			<div className="container">
				<h2 className="display-4">{title}</h2>
				<p className="lead">
					Explore our exclusive range of cosmetics to find your
					perfect match.
				</p>

				<h3 className="mt-5 mb-4">
					Check our products (3 random items)
				</h3>
				<div className="row">
					{randomProducts.map((item) => (
						<ProductCard product={item} key={item.id} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Welcome;
