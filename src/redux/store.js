import { composeWithDevTools } from "@redux-devtools/extension";
import { createStore } from "redux";

// 1. Дефолтное состояние
const defaultState = {
	products: [],
	cart: []
};

// 2. Функция reducer
// state - состояние
// action = { type: "", payload: "?"}
const reducer = (state = defaultState, action) => {
	switch (action.type) {
		case 'SET_PRODUCTS':
			return { ...state, products: action.payload };

		case 'ADD_TO_CART':
			let cartAfterAdd = [];

			// Поиск продукта в корзине
			const productIndex = state.cart.findIndex(
				(product) => product.id === action.payload.id
			);

			// Если найден, добавляем +1 к количеству
			if (productIndex !== -1) {
				cartAfterAdd = [...state.cart];
				cartAfterAdd[productIndex]['count'] =
					cartAfterAdd[productIndex]['count'] + 1;
			}

			// Если НЕ найден, добавляем сам продукт с кол-вом равным 1
			if (productIndex === -1) {
				cartAfterAdd = [...state.cart];
				cartAfterAdd.push({
					...action.payload,
					count: 1,
				});
			}

			return { ...state, cart: cartAfterAdd };

		case 'DECREASE_IN_CART':
			let cartAfterDecrease = [];

			// Найти продукт в корзине, если не найден, то выход без изменений
			const indexDecrease = state.cart.findIndex(
				(product) => product.id === action.payload.id
			);

			if (indexDecrease === -1) return {...state}
			
			console.log('indexDecrease', indexDecrease);

			// Если кол-во продукта меньше 2, то есть 1, то удалить продукт из корзины
			if (state.cart[indexDecrease]['count'] < 2) {
				cartAfterDecrease = state.cart.filter((product) => {
					return product.id !== action.payload.id;
				});
			}

			// Если кол-во продукта больше 1, то есть 2 и выше, то уменьшить количество
			if (state.cart[indexDecrease]['count'] > 1) {
				cartAfterDecrease = state.cart.map((product) => {
					// Если продукт не тот - то оставляем без изменений
					if (product.id !== action.payload.id) return product;

					// Если тот, то уменьшаем кол-во на 1
					return {
						...product,
						count: product.count - 1,
					};
				});
			}

			return { ...state, cart: cartAfterDecrease };

		case 'REMOVE_FROM_CART':
			const cartAfterRemove = state.cart.filter((product) => {
				return product.id !== action.payload.id;
			});
			return { ...state, cart: cartAfterRemove };

		case 'CLEAR_CART':
			return { ...state, cart: [] };

		default:
			return { ...state };
	}
}

const store = createStore(reducer, composeWithDevTools())

export default store;