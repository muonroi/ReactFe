import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import currency from 'currency.js';
import AuthBox from '../../auth/components/AuthBox';
export default function AppBar() {
    var cartItems = useSelector((state) => state.cart.items)
    const totalItems = cartItems.reduce((total, item) => {
        return total + item.count;
    }, 0);
    const total = cartItems.reduce((totalPrice, item) => {
        return totalPrice + item.count * parseFloat(item.attributes.price);
    }, 0);
    return (
        <div className="navbar navbar-inverse navbar-fixed-top"  style={{ display:'flex', justifyContent:'center'}}>
            <div className="topNav">
                <div className="container">
                    <div className="alignR">
                       <AuthBox/>
                        <Link to='/cart'><span className="icon-shopping-cart"
                        /> {totalItems} Item(s) - <span className="badge badge-warning"> {currency(total, { symbol: 'vnđ ', separator: '.', decimal: ',' }).format()}</span></Link>
                    </div>
                </div>
            </div>
        </div>

    )
}