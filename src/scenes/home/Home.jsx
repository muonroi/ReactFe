import React from 'react'
import Category from '../../components/Category'
import ProductBox from '../../components/ProductBox'
import MainCarousel from './MainCarousel'
export default function Home() {
    return (
        <>
            <div className="row">
                <div id="sidebar" className="span3">
                    <Category />
                    <div className="well well-small alert alert-warning cntr">
                        <h2>50% Discount</h2>
                        <p>
                            Only valid for online order. <br /><br /><a className="defaultBtn" href="#">Click here </a>
                        </p>
                    </div>

                    <div className="well well-small"><a href="#"><img src="assets/img/paypal.jpg" alt="payment method paypal" /></a></div>

                    <a className="shopBtn btn-block" href="#">Upcoming products <br /><small>Click to view</small></a>

                    <br />
                    <br />

                    <ul className="nav nav-list promowrapper">
                        <li>
                            <div className="thumbnail">
                                <a className="zoomTool" href="product_details.html" title="add to cart"><span className="icon-search"></span> QUICK VIEW</a>
                                <img src="assets/img/bootstrap-ecommerce-templates.png" alt="bootstrap ecommerce templates" />
                                <div className="caption">
                                    <h4><a className="defaultBtn" href="product_details.html">VIEW</a> <span className="pull-right">$22.00</span></h4>
                                </div>
                            </div>
                        </li>
                        <li style={{ border: 0 }}> &nbsp;</li>
                        <li>
                            <div className="thumbnail">
                                <a className="zoomTool" href="product_details.html" title="add to cart"><span className="icon-search"></span> QUICK VIEW</a>
                                <img src="assets/img/shopping-cart-template.png" alt="shopping cart template" />
                                <div className="caption">
                                    <h4><a className="defaultBtn" href="product_details.html">VIEW</a> <span className="pull-right">$22.00</span></h4>
                                </div>
                            </div>
                        </li>
                        <li style={{ border: 0 }}> &nbsp;</li>
                        <li>
                            <div className="thumbnail">
                                <a className="zoomTool" href="product_details.html" title="add to cart"><span className="icon-search"></span> QUICK VIEW</a>
                                <img src="assets/img/bootstrap-template.png" alt="bootstrap template" />
                                <div className="caption">
                                    <h4><a className="defaultBtn" href="product_details.html">VIEW</a> <span className="pull-right">$22.00</span></h4>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <ProductBox />
            </div>
            <MainCarousel />
        </>

    )
}