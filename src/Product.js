import React from 'react';
import './Product.css';
import img0 from './imgs/black-shirt.jpg';
import img1 from './imgs/denim-jeans.jpg';
import img2 from './imgs/leather-jacket.jpg';

function Product({id, price, qnty, name, descr}) {
	// get img url based on product id
	const imgURLs = [
		{id: 0, src: img0},
		{id: 1, src: img1},
		{id: 2, src: img2},
	]

	return (
		<div className="product">
			<div className="product-container">
				<img className="product-img" src={ imgURLs.find(x => x.id===id).src } alt={descr} />
				<h3>{name}</h3>
				<p>${ (price/100).toFixed(2) }</p>
				<button>Add to Cart</button>
				<p>{qnty} in stock</p>
			</div>
		</div>
	);
}

export default Product;
