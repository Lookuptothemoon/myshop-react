import React from 'react';
import {Link} from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Cart.css';

function Cart() {
    let cartProducts = [
        {
            id: 0,
            price: 1499,
            qnty: 1,
            name: "Black Shirt",
            created: "10-10-2020",
        },
        {
            id: 1,
            price: 2999,
            qnty: 2,
            name: "Denim Jeans",
            created: "10-15-2020",
        },
        {
            id: 2,
            price: 4999,
            qnty: 1,
            name: "Leather Jacket",
            created: "10-10-2020",
        },
    ];

    let cart = {length: cartProducts.length}

    const changedPromo = () => {
        console.log("promo is changing");
    }

    return (
        <div className="cart">
            <div className="cart-container">
                <div className="cart-left">
                    <div className="cart-title">
                        <h3>Shopping Cart ({cart.length} Items)</h3>
                        <Link to="/shop" className="continue-shopping-link">Continue Shopping ></Link>
                    </div>

                    <div className="cart-products">
                        {
                            cartProducts.map((prod, index) => {
                                return (
                                    <CheckoutProduct
                                        key={prod.id}
                                        id={prod.id}
                                        price={prod.price}
                                        qnty={prod.qnty}
                                        name={prod.name}
                                        descr={prod.description}
                                    />
                                )
                            })
                        }
                    </div>
                </div>

                <div className="cart-right">
                    <div className="cart-right-container">
                        <div className="cart-subtotal cart-right-section">
                            <h2>Order Summary</h2>

                            <div className="cart-subtotal-row">
                                <h4>Subtotal</h4>
                                <h4>{"<subtotal>"}</h4>
                            </div>

                            <div className="cart-subtotal-row">
                                <h4>Shipping</h4>
                                <h4>{"FREE"}</h4>
                            </div>

                            <div className="cart-checkout">
                                <button>Checkout ></button>
                            </div>
                        </div>

                        <div className="cart-promo cart-right-section">
                            <h4>Promo Code:</h4>
                            <input
                                type="text"
                                name="promo"
                                title="promo"
                                value={""}
                                onChange={changedPromo}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
