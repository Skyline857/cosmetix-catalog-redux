import React, { useState, useEffect } from 'react';
import Spinner from '../components/Spinner';
import Welcome from '../components/Welcome';

const Home = () => {
	const [loading, setLoading] = useState(true);
	const [message, setMessage] = useState('');

	useEffect(() => {
		setTimeout(() => {
			setMessage('Welcome to the World of Beauty');
			setLoading(false);
		}, 500);
	}, []);

	return <div>{loading ? <Spinner /> : <Welcome title={message} />}</div>;
};

export default Home;
