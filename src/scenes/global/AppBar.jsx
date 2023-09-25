import React from 'react'
export default function AppBar() {
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
                        <a href="cart.html"><span className="icon-shopping-cart"></span> 2 Item(s) - <span className="badge badge-warning"> $448.42</span></a>
                    </div>
                </div>
            </div>
        </div>

    )
}