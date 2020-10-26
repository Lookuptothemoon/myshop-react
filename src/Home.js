import React from 'react';
import {Link} from 'react-router-dom';
import bannerImg from './imgs/home-header-img.png';
import bannerMobileImg from './imgs/home-header-mobile-img.png';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import './Home.css';

function Home() {
    return (
        <div className="home">
            <div className="home-header">
                <img className="home-header-img" src={bannerImg} alt="header" />

                <img className="home-header-mobile-img" src={bannerMobileImg} alt="header mobile" />
                <Link className="home-header-mobile-link" to="/shop">Check it out</Link>
            </div>

            <div className="home-banner">
                <h4>Check out what's selling now</h4>
                <Link className="home-banner-link" to="/shop"> <DoubleArrowIcon className="home-banner-link-arrow" /> </Link>
            </div>

            <div className="home-content">
                <div className="home-content-section">
                    <img src="https://wp-en.oberlo.com/wp-content/uploads/2018/08/New-Products.jpg" alt="bag with heart sunglasses, phone, eyelashes, nail polish, bangle earrings and watch falling out" />
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries, but also the leap into 
                        electronic typesetting, remaining essentially unchanged. It was popularised 
                        in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker including 
                        versions of Lorem Ipsum.
                    </p>
                </div>

                <div className="home-content-section">
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries, but also the leap into 
                        electronic typesetting, remaining essentially unchanged. It was popularised 
                        in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker including 
                        versions of Lorem Ipsum.
                    </p>
                    <img src="https://api.time.com/wp-content/uploads/2018/11/sweetfoam-sustainable-product.jpg" alt="flip flops" />
                </div>
            </div>
        </div>
    );
}

export default Home;
