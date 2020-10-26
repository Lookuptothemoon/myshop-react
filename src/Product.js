import React, {useContext} from 'react';
import {ShopContext} from './ShopProvider';
import img0 from './imgs/black-shirt.jpg';
import img1 from './imgs/denim-jeans.jpg';
import img2 from './imgs/leather-jacket.jpg';
import defaultImg from './imgs/default-img.png';
import './Product.css';

function Product({id, price, qnty, name, descr}) {
	const [, dispatch] = useContext(ShopContext);
	// get img url based on product id
	const imgURLs = [
		{id: 0, src: img0},
		{id: 1, src: img1},
		{id: 2, src: img2},
	];

	// add item to cart
	const addToCart = () => {
		dispatch({
			type: "ADD_TO_CART",
			item: {
				id: id,
	            price: price,
	            qnty: qnty,
	            name: name,
	            cartQnty: 1,
			}
		});
	};

	return (
		<div className="product">
			<div className="product-container">
				<img className="product-img"
					src={ imgURLs.find(x => x.id===id) ? imgURLs.find(x => x.id===id).src : defaultImg } 
					alt={descr}
				/>
				<h3>{name}</h3>
				<p>${ (price/100).toFixed(2) }</p>
				<button onClick={addToCart}>Add to Cart</button>
				<p>{qnty} in stock</p>
			</div>
		</div>
	);
}

export default Product;
