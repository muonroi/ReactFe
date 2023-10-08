import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import currency from 'currency.js';
export default function AppBar() {
    var cartItems = useSelector((state) => state.cart.items)
    const totalItems = cartItems.reduce((total, item) => {
        return total + item.count;
    }, 0);
    const total = cartItems.reduce((totalPrice, item) => {
        return totalPrice + item.count * parseFloat(item.attributes.price);
    }, 0);
    return (
        <div className="navbar navbar-inverse navbar-fixed-top">
            <div className="topNav">
                <div className="container">
                    <div className="alignR">
                        <div className="pull-left socialNw">
                            <a href="/"><span className="icon-twitter"></span></a>
                            <a href="/"><span className="icon-facebook"></span></a>
                            <a href="/"><span className="icon-youtube"></span></a>
                            <a href="/"><span className="icon-tumblr"></span></a>
                        </div>
                        <a href="index.html"> <span className="icon-home"></span> Home</a>
                        <a href="/"><span className="icon-user"></span> My Account</a>
                        <a href="register.html"><span className="icon-edit"></span> Free Register </a>
                        <a href="contact.html"><span className="icon-envelope"></span> Contact us</a>
                        <Link to='/cart'><span className="icon-shopping-cart"
                        /> {totalItems} Item(s) - <span className="badge badge-warning"> {currency(total, { symbol: 'vnđ ', separator: '.', decimal: ',' }).format()}</span></Link>
                    </div>
                </div>
            </div>
        </div>

    )
}