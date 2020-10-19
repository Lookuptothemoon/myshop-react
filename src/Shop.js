import React from 'react';
import Product from './Product';
import './Shop.css';

function Shop() {
    let products = [
        {
            id: 0,
            index: 0,
            price: 1499,
            qnty: 7,
            name: "Black Shirt",
            description: "This is a plain black shirt. 100% cotton",
            created: "10-10-2020"
        },
        {
            id: 1,
            index: 1,
            price: 2999,
            qnty: 5,
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
        {
            id: 3,
            index: 3,
            price: 0,
            qnty: 0,
            name: "NULL Product",
            description: "This is a null product",
            created: "10-10-2020"
        },
        {
            id: 4,
            index: 4,
            price: 0,
            qnty: 0,
            name: "NULL Product",
            description: "This is a null product",
            created: "10-10-2020"
        },
        {
            id: 5,
            index: 5,
            price: 0,
            qnty: 0,
            name: "NULL Product",
            description: "This is a null product",
            created: "10-10-2020"
        },
        {
            id: 6,
            index: 6,
            price: 0,
            qnty: 0,
            name: "NULL Product",
            description: "This is a null product",
            created: "10-10-2020"
        },
        {
            id: 7,
            index: 7,
            price: 0,
            qnty: 0,
            name: "NULL Product",
            description: "This is a null product",
            created: "10-10-2020"
        },
        {
            id: 8,
            index: 8,
            price: 0,
            qnty: 0,
            name: "NULL Product",
            description: "This is a null product",
            created: "10-10-2020"
        },
        {
            id: 9,
            index: 9,
            price: 0,
            qnty: 0,
            name: "NULL Product",
            description: "This is a null product",
            created: "10-10-2020"
        },
        {
            id: 10,
            index: 10,
            price: 0,
            qnty: 0,
            name: "NULL Product",
            description: "This is a null product",
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
