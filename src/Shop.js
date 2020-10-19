import React from 'react';
import Product from './Product';
import './Shop.css';

function Shop() {
    let products = [
        {
            id: 0,
            index: 0,
            price: 1499,
            qnty: 3,
            name: "Black Shirt",
            description: "This is a plain black shirt. 100% cotton",
            created: "10-10-2020"
        },
        {
            id: 1,
            index: 1,
            price: 2999,
            qnty: 2,
            name: "Denim Jeans",
            description: "These are a pair of navy blue jeans. 100% cotton",
            created: "10-15-2020"
        },
        {
            id: 2,
            index: 2,
            price: 4999,
            qnty: 2,
            name: "Leather Jacket",
            description: "Black Leather Jacket",
            created: "10-10-2020"
        },
    ]

    return (
        <div className="shop">
            <div className="shop-container">
                <h1 className="shop-title">SHOP</h1>
                <div className="underline"></div>

                <div className="shop-products">
                    {
                        products.map((prod, index) => {
                            return (
                                <Product
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
        </div>
    );
}

export default Shop;
