import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import {ShopContext, getCartTotal, getCartQnty} from './ShopProvider';
import CurrencyFormat from 'react-currency-format';
import './Cart.css';

function Cart() {
    const [state, ] = useContext(ShopContext);

    const changedPromo = () => {
        console.log("promo is changing");
    }

    return (
        <div className="cart">
            <div className="cart-container">
                <div className="cart-left">
                {
                    getCartQnty(state.cart) === 0 ? 
                        <h3>Your Shopping Cart is Empty</h3> :
                    (
                        <div>

                            <div className="cart-title">
                                <h3>Shopping Cart ({getCartQnty(state.cart)} Items)</h3>
                                <Link to="/shop" className="continue-shopping-link">Continue Shopping ></Link>
                            </div>

                            <div className="cart-products">
                                {
                                    state.cart.map((prod, index) => {
                                        return (
                                            <CheckoutProduct
                                                key={prod.id}
                                                id={prod.id}
                                                price={prod.price}
                                                qnty={prod.qnty}
                                                cartQnty={prod.cartQnty}
                                                name={prod.name}
                                            />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                }
                </div>

                { 
                    getCartQnty(state.cart) > 0 &&
                    (
                        <div className="cart-right">
                            <div className="cart-right-container">
                                <div className="cart-subtotal cart-right-section">
                                    <h2>Order Summary</h2>

                                    <div className="cart-subtotal-row">
                                        <CurrencyFormat
                                            renderText={(value) => (
                                                <p>
                                                    Subtotal: <strong>{value}</strong>
                                                </p>
                                            )}
                                            fixedDecimalScale={2}
                                            decimalScale={2}
                                            value={getCartTotal(state.cart)/100}
                                            displayType={"text"}
                                            thousandSeparator={true}
                                            prefix={"$"}
                                        />
                                    </div>

                                    <div className="cart-subtotal-row">
                                        <p>
                                            Shipping: <strong>{"FREE"}</strong>
                                        </p>
                                    </div>

                                    <div className="cart-checkout">
                                        <button>Proceed to Checkout</button>
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
                    )
                }
            </div>
        </div>
    );
}

export default Cart;
