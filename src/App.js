import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Products from './pages/Products';
import Gallery from './pages/Gallery';
import Cart from './pages/Cart';

import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';

import { useDispatch } from 'react-redux';
import { setProducts } from './redux/actions';

import productsFromFile from './data/products';


function App() {
	// Получаем продукты в глобальный стор
	const dispatch = useDispatch();
	dispatch(setProducts(productsFromFile));
	// dispatch({ type: 'SET_PRODUCTS', payload: productsFromFile });

	return (
		<Router>
			<Header />
			<Nav />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/products" element={<Products />} />
				<Route path="/gallery" element={<Gallery />} />
				<Route path="/cart" element={<Cart />} />
			</Routes>

			<Footer />
		</Router>
	);
}

export default App;
