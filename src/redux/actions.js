export const setProducts = (products) => {
	return { type: 'SET_PRODUCTS', payload: products };
};

export const addToCart = (product) => {
	return { type: 'ADD_TO_CART', payload: product };
};

export const decreaseInCart = (product) => {
	return { type: 'DECREASE_IN_CART', payload: product };
};

export const removeFromCart = (product) => {
	return { type: 'REMOVE_FROM_CART', payload: product };
};

export const clearCart = () => {
	return { type: 'CLEAR_CART' };
};
