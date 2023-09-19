import React from 'react'

export default function Category() {
    return (
        <div className="well well-small">
            <ul className="nav nav-list">
                <li><a href="products.html">Fashion</a></li>
                <li><a href="products.html">Watches</a></li>
                <li><a href="products.html">Fine Jewelry</a></li>
                <li><a href="products.html">Fashion Jewelry</a></li>
                <li><a href="products.html">Engagement & Wedding</a></li>
                <li><a href="products.html">Men's Jewelry</a></li>
                <li><a href="products.html">Vintage & Antique</a></li>
                <li><a href="products.html">Loose Diamonds</a></li>
                <li><a href="products.html">Loose Beads</a></li>
                <li><a href="products.html">See All Jewelry & Watches</a></li>
                <li style={{ border: 0 }}> &nbsp;</li>
                <li> <a className="totalInCart" href="cart.html"><strong>Total Amount  <span className="badge badge-warning pull-right" style={{ lineHeight: '18px' }}>$448.42</span></strong></a></li>
            </ul>
        </div>
    )
}
