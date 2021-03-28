import React from 'react'
import './product.css'
import img from '../../assets/img/product01.png'
import { FaApple, FaAndroid,FaStar,FaStarHalfAlt } from 'react-icons/fa';
import { SiXiaomi } from 'react-icons/si';

export function Product () {
    return(
        <div className="product_wrapper">
            <div>
                <div className="product">
                    <div className="product-img">
                        <img src={img} alt=""/>
                        <div className="product-label">
                            <span className="sale">-30%</span>
                            <span className="new">NEW</span>
                        </div>
                    </div>
                    <div className="product-body">
                        <p className="product-category">Category</p>
                        <h3 className="product-name">test<a href="#">moskva</a></h3>
                        <h4 className="product-price">342344</h4>
                        <div className="product-rating">
                            <i className="fa fa-star"><FaStar/></i>
                            <i className="fa fa-star"><FaStar/></i>
                            <i className="fa fa-star"><FaStar/></i>
                            <i className="fa fa-star"><FaStarHalfAlt/></i>
                        </div>
                        <div className="product-btns">
                            <button className="add-to-wishlist"><i className="fa fa-heart-o"><FaApple/></i><span className="tooltipp">apple</span>
                            </button>
                            <button className="add-to-compare"><i className="fa fa-exchange"><FaAndroid/></i><span className="tooltipp">android</span>
                            </button>
                            <button className="quick-view"><i className="fa fa-eye"><SiXiaomi/></i><span className="tooltipp">android</span>
                            </button>
                        </div>
                    </div>
                    <div className="add-to-cart">
                        <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
                    </div>
                </div>
            </div>
        </div>

    )

}