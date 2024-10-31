import NavigationLink from './NavigationLink';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';


const Nav = () => {
	const cart = useSelector((state) => state.cart);

	return (
		<nav className="navbar navbar-expand-lg navbar-light">
			<div className="container">
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ms-auto">
						<li className="nav-item">
							<NavigationLink title="Home" link="" />
						</li>
						<li className="nav-item">
							<NavigationLink title="Products" link="products" />
						</li>
						<li className="nav-item">
							<NavigationLink title="Gallery" link="gallery" />
						</li>
						<li className="nav-item" id="cart-nav-item">
							<NavigationLink title="Cart" link="cart" />
						</li>
					</ul>
				</div>
			</div>
			<NavLink className="cartIcon" to={`/cart`}>
				<div className="cartIcon__count">
					{cart.reduce((sum, item) => sum + item.count, 0)}
				</div>
				<FaShoppingCart size="64px" />
			</NavLink>
		</nav>
	);
};

export default Nav;
