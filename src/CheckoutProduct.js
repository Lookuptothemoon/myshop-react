import React, {useContext, useState} from 'react';
/*import NumericInput from 'react-numeric-input';*/
import {ShopContext} from './ShopProvider';
import img0 from './imgs/black-shirt.jpg';
import img1 from './imgs/denim-jeans.jpg';
import img2 from './imgs/leather-jacket.jpg';
import defaultImg from './imgs/default-img.png';
import './CheckoutProduct.css';

function CheckoutProduct({id, price, qnty, cartQnty, name, descr}) {
	const [state, dispatch] = useContext(ShopContext);
	const [prodCartQnty, setProdCartQnty] = useState(cartQnty);

	// remove item from cart
	const removeFromCart = () => {
		console.log("deleting ", id);
		dispatch({
			type: "REMOVE_FROM_CART",
			id: id,
		});
	}

	// get img url based on product id
	const imgURLs = [
		{id: 0, src: img0, alt: "black tshirt"},
		{id: 1, src: img1, alt: "denim jeans"},
		{id: 2, src: img2, alt: "black leather jacket"},
	]

    // get image for product from imgURLs
    const img = imgURLs.find(x => x.id===id);

    // update product cartQnty
    const updateQnty = (increment) => {
    	// check if cartQnty in range then update cart, else don't change
    	if( (prodCartQnty+increment >= 0) && (prodCartQnty+increment <= qnty) ) {
	    	dispatch({
				type: "UPDATE_CART",
				id: id,
				newCartQnty: prodCartQnty+increment,
			});

	    	// update local version of cartQnty
			setProdCartQnty(prodCartQnty+increment);
	    }else{
	    	console.log("wanted qnty out of range");
	    }
	}

	return (
		<div className="checkout-product">
			<div className="checkout-product-container">
				<div className="checkout-product-col">
					<img className="checkout-product-img"
						src={ img ? img.src : defaultImg } 
						alt={img ? img.alt : ""}
					/>
				</div>

				<div className="checkout-product-col">
					<h3>{name}</h3>
					<p>{descr}</p>
					<button onClick={removeFromCart}>Delete</button>
				</div>

				<div className="checkout-product-col">
					<div className="checkout-qnty-container">
						<button onClick={() => updateQnty(-1) }>-</button>
						<p className="checkout-qnty-input">{prodCartQnty}</p>
						<button onClick={() => updateQnty(1) }>+</button>
					</div>
				</div>

				<div className="checkout-product-col">
					<p>${ (price/100).toFixed(2) }</p>
				</div>
			</div>
		</div>
	);
}

export default CheckoutProduct;



/*import NumericInput from 'react-numeric-input';*/
/* numeric input similar to input w/ type="number" for Reactjs
<NumericInput
	className="checkout-qnty-input"
	value={prodCartQnty}
	min={0}
	max={qnty}
	size={5}
	onChange={changeProdQnty}
	onInvalid={onInvalidQnty}
/>
*/
// handle input changes
	/*
	function changeProdQnty(obj) {
		if(obj === null) {
			setProdCartQnty(1);
		}else{
			const {numVal, strVal, input} = obj;
			setProdCartQnty(numVal);
		}
	}
*/
/*
// on invalid qnty input
function onInvalidQnty({errorMsg, numVal, strVal}) {
	console.log(numVal);
	console.log(errorMsg);
}
*/
