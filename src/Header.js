import React from 'react';
import {Link} from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import StorefrontIcon from '@material-ui/icons/Storefront';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import $ from 'jquery';
import './Header.css';

function Header() {
	// close modal menu on mobile
	const closeModal = () => {
		$(".header-mobile-modal")[0].style.display = "none";
	};

	// open modal menu on mobile
	const openModal = () => {
		$(".header-mobile-modal")[0].style.display = "flex";
	};

	// hide modal if opened on mobile then switched to desktop view
	$(window).resize(function() {
		if( $(window).width() >= 768 ){
			$(".header-mobile-modal")[0].style.display = "none";
		}
	});

    return (
        <div className="header">
        	<nav>
        		<div className="header-desktop-nav">
	        		<Link to="/" className="header-link header-logo">MyShop</Link>
	                <Link to="/shop" className="header-desktop-nav-item header-link">Shop</Link>
	                <Link to="/signin" className="header-desktop-nav-item header-link">Sign In</Link>
	                <Link to="/cart" className="header-desktop-nav-item"><ShoppingCartIcon className="header-link" /></Link>
                </div>

                <div className="header-mobile-nav">
	                <Link to="/" className="header-link header-logo">MyShop</Link>
	                <Link to="/cart"> <ShoppingCartIcon className="header-link" /></Link>
	                <button onClick={openModal} className="mobile-trigger"> <MenuIcon className="header-link" /> </button>
                </div>

                <div className="header-mobile-modal">
                	<div className="header-mobile-modal-left">
	                	<button onClick={closeModal} className="mobile-close"> <CloseIcon fontSize="large" /> </button>
                	</div>
                	<div className="header-mobile-modal-right">
                		<Link to="/" onClick={closeModal} className="modal-link header-mobile-modal-right-link">Home</Link>
	                	<Link to="/shop" onClick={closeModal} className="modal-link header-mobile-modal-right-link"> <StorefrontIcon /> Shop </Link>
                		<Link to="/signin" className="modal-link header-mobile-modal-right-link"> <AccountCircleIcon /> Sign In </Link>
	                </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
