import React, {createContext, useReducer} from 'react';

// create shop context (data)
export const ShopContext = createContext();

// initial state of data
const initialState = {
	cart: [],
	user: null,
	loading: false,
	error: null
};

// get total price of cart
export const getCartTotal = (cart) => 
	cart?.reduce((amount, item) => (item.price * item.cartQnty) + amount, 0);
// get total num items in cart
export const getCartQnty = (cart) => 
	cart?.reduce((qnty, item) => (item.cartQnty) + qnty, 0);

// reducer
const shopReducer = (state, action) => {
	switch (action.type) {
		// set logged in user
		case "SET_USER": {
			return {
				...state,
				user: action.user
			}
		}
		// add item to cart
		case "ADD_TO_CART": {
			// get index of prod in cart
			const prodIdx = state.cart.findIndex((cartItem) => cartItem.id === action.item.id);

			const qntyToAdd = action.item.cartQnty;
			// if item already in cart then update cartQnty, else add item to cart
			if( prodIdx !== -1 ) {
				// check if cartQnty exceeds inventory then throw error, else add to cart
				const prod = state.cart[prodIdx];
				if( (prod.cartQnty + qntyToAdd) > prod.qnty ) {
					alert("qnty exceeds inventory for this product");
					return state;
				}else{
					prod.cartQnty += qntyToAdd;
					return state;
				}
			}else{
				// check if cartQnty exceeds inventory then throw error, else add to cart
				const prod = action.item;
				if( prod.qnty < qntyToAdd ){
					alert("qnty exceeds inventory for this product");
					return state;
				}else{
					return {
						...state,
						cart: [...state.cart, action.item]
					};
				}
			}
		}
		// remove item from cart
		case "REMOVE_FROM_CART": {
			// get index of item in current cart
			const removeIdx = state.cart.findIndex((cartItem) => cartItem.id === action.id);

			let newCart = [...state.cart];
			// if item in cart then remove from cart, else throw error
			if( removeIdx !== -1 ) {
				newCart.splice(removeIdx, 1);
				// update cart
				return {
					...state,
					cart: newCart,
				}
			}else{
				console.warn("can't remove product", action.item.id, "because not in cart");
				return state;
			}
		}
		case "UPDATE_CART": {
			const {id, newCartQnty} = action;
			console.log("should update to ", newCartQnty);

			// create cart of products w/ correct cartQnty
			const updateCart = state.cart.reduce((cart, prod) => {
				// if prod with id then update with newCartQnty, else add prod to cart
				if(prod.id === id){
					// only add nonzero newCartQnty
					if(newCartQnty !== 0){
						prod.cartQnty = newCartQnty;
						cart.push(prod);
					}
				}else{
					cart.push(prod);
				}

				return cart;
			}, []);

			// update cart
			return {
				...state,
				cart: updateCart
			};
		}
		default: {
			return state;
		}
	}
};

// create provider for context (access data)
export const ShopProvider = (props) => {
	const [state, dispatch] = useReducer(shopReducer, initialState);

	return (
		<ShopContext.Provider value={[state, dispatch]}>
			{props.children}
		</ShopContext.Provider>
	)
}
