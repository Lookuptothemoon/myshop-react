import React, {useState} from 'react';
import './CheckoutProduct.css';
import img0 from './imgs/black-shirt.jpg';
import img1 from './imgs/denim-jeans.jpg';
import img2 from './imgs/leather-jacket.jpg';
import defaultImg from './imgs/default-img.png';

function CheckoutProduct({id, price, qnty, name, descr}) {
	const [prodQnty, setProdQnty] = useState(qnty);

	const removeFromCart = () => {
		alert("this button should delete this item");
	}

	// get img url based on product id
	const imgURLs = [
		{id: 0, src: img0},
		{id: 1, src: img1},
		{id: 2, src: img2},
	]

	// handle changes to form input
	/*
    function handleChange(event) {
        const {name, value} = event.target
        setProdQnty({
        	[name]: value
        });
    }
    */

	return (
		<div className="checkout-product">
			<div className="checkout-product-container">
				<div className="checkout-product-col">
					<img className="checkout-product-img"
						src={ imgURLs.find(x => x.id===id) ? imgURLs.find(x => x.id===id).src : defaultImg } 
						alt={descr}
					/>
				</div>

				<div className="checkout-product-col">
					<h3>{name}</h3>
					<p>{descr}</p>
					<button onClick={removeFromCart}>Delete</button>
				</div>

				{/*
				<div className="checkout-product-col">
					<label>Qnty:</label>
					<input 
						type="number"
						name="prodQnty"
						title="prodQnty"
						value={prodQnty}
						pattern="[0-9]*"
						onChange={handleChange}
					/>
				</div>
				*/}

				<div className="checkout-product-col">
					<p>${ (price/100).toFixed(2) }</p>
				</div>
			</div>
		</div>
	);
}

export default CheckoutProduct;
