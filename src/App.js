import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Signin from './Signin';
import Shop from './Shop';
/*
import Cart from './Cart';
import Product from './Product';
*/
import './App.css';

function App() {
    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route path="/shop">
                        <Header />
                        <Shop />
                        <Footer />
                    </Route>

                    <Route path="/product">
                        <Header />
                        <h1>My Product</h1>
                        <Footer />
                    </Route>

                    <Route path="/signin">
                        <Signin />
                    </Route>

                    <Route path="/cart">
                        <h1>Cart</h1>
                    </Route>

                    <Route path="/">
                        <Header />
                        <Home />
                        <Footer />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
