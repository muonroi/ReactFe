import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
export default function Banner() {
    var cartItems = useSelector((state) => state.cart.items) 
const totalItems = cartItems.reduce((total, item) => { 
  return total + item.count;
}, 0);
const total = cartItems.reduce((totalPrice, item) => { 
  return totalPrice + item.count * item.attributes.price;
}, 0);
    return (
        <>
            <div id="gototop"></div>
            <header id="header">
                <div className="row">
                    <div className="span4">
                        <h1>
                            <a className="logo" href="index.html">
                                <span>Twitter Bootstrap ecommerce template</span>
                                <img
                                    src="/assets/img/logo-bootstrap-shoping-cart.png"
                                    alt="bootstrap sexy shop"
                                />
                            </a>
                        </h1>
                    </div>
                    <div className="span4">
                        <div className="offerNoteWrapper">
                            <h1 className="dotmark">
                                <i className="icon-cut"></i>
                                Twitter Bootstrap shopping cart HTML template is available @ $14
                            </h1>
                        </div>
                    </div>
                    <div className="span4 alignR">
                        <p>
                            <br />
                            <strong> Support (24/7) : 0800 1234 678 </strong>
                            <br />
                            <br />
                        </p>
                        <Link to='/cart' className="btn btn-mini">
                            [ {totalItems} ] <span className="icon-shopping-cart"></span>
                        </Link>
                        <span className="btn btn-warning btn-mini">Vnđ</span>
                    </div>
                </div>
            </header>
        </>
    );
}