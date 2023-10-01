import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import currency from 'currency.js'
import AppUrl from '../../Api/AppUrl';
import {removeFromCart, increaseCount,decreaseCount} from '../../state/cartSlide'
export default function CartMenu() {
  const dispatch = useDispatch();
    var cartItems = useSelector((state) => state.cart.items) 
    const totalItems = cartItems.reduce((total, item) => { 
      return total + item.count;
    }, 0);
    const total = cartItems.reduce((totalPrice, item) => { 
      return totalPrice + item.count * item.attributes.price;
    }, 0);
    var myView = cartItems.map((item) => (
        <tr key={item.id}>
          <td>
            <img
              width={100}
              src={AppUrl.ApiURL + item.attributes.image.data[0].attributes.url}
              alt='tam'
            />
          </td>
          <td>{item.attributes.productName}</td>
          <td> - </td>
          <td>
            <span className="shopBtn">
              <span className="icon-ok" />
            </span>{' '}
          </td>
          <td>
            {currency(item.attributes.price, {
              symbol: 'vnđ',
              separator: '.',
              decimal: ',',
            }).format()}
          </td>
          <td>
            <input
              className="span1"
              style={{ maxWidth: 34 }}
              placeholder={1}
              id="appendedInputButtons"
              size={16}
              type="text"
              value={item.count}
            />
            <div className="input-append">
              <button className="btn btn-mini" type="button" onClick={() => dispatch(decreaseCount({ id: item.id }))}>
                -
              </button>{' '}
              <button className="btn btn-mini" type="button" onClick={() => dispatch(increaseCount({ id: item.id }))}>
                +
              </button>{' '}
              <button className="btn btn-mini btn-danger" type="button" onClick={() => dispatch(removeFromCart({ id: item.id }))}>
                <span className="icon-remove" />
              </button>{' '}
            </div>
          </td>
          <td>
            {currency(item.attributes.price * item.count, {
              symbol: 'vnđ ',
              separator: '.',
              decimal: ',',
            }).format()}
          </td>
        </tr>
      ));
    return (
        <div className="row">
            <div className="span12">
                <ul className="breadcrumb">
                    <li><a href="index.html">Home</a> <span className="divider">/</span></li>
                    <li className="active">Check Out</li>
                </ul>
                <div className="well well-small">

                    <table className="table table-bordered table-condensed">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Product Name</th>
                                <th>Ref. </th>
                                <th>Avail.</th>
                                <th>Unit price</th>
                                <th>Qty </th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                           {myView}
                            <tr>
                                <td colSpan="6" className="alignR">Total products:{totalItems}	</td>
                                <td className="label label-primary">{currency(total, {
              symbol: 'vnđ ',
              separator: '.',
              decimal: ',',
            }).format()}</td>
                            </tr>
                        </tbody>
                    </table><br />
                    <table className="table table-bordered">
                        <tbody>
                            <tr><td>Customer Info</td></tr>
                            <tr>
                                <td>
                                    <form className="form-horizontal">
                                        <div className="control-group">
                                            <label className="span2 control-label">Name</label>
                                            <div className="controls">
                                                <input type="text" placeholder="Your name" />
                                            </div>
                                        </div>
                                        <div className="control-group">
                                            <label className="span2 control-label">Address </label>
                                            <div className="controls">
                                                <input type="text" placeholder="Your address" />
                                            </div>
                                        </div>
                                        <div className="control-group">
                                            <label className="span2 control-label">Phone number </label>
                                            <div className="controls">
                                                <input type="text" placeholder="Your Phone number" />
                                            </div>
                                        </div>
                                        <div className="control-group">
                                            <div className="controls">
                                                <button type="submit" className="shopBtn">Click to checkout</button>
                                            </div>
                                        </div>
                                    </form>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <a href="products.html" className="shopBtn btn-large"><span className="icon-arrow-left"></span> Continue Shopping </a>
                    <a href="login.html" className="shopBtn btn-large pull-right">Next <span className="icon-arrow-right"></span></a>
                </div>
            </div>
        </div>
    );
}