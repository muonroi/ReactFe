import React from 'react'
export default function Confirmation() {
    return (
        <div className="row">
            <div className="span12">
                <ul className="breadcrumb">
                    <li><a href="index.html">Home</a> <span className="divider">/</span></li>
                    <li className="active">Check Out <span className="divider">/</span></li>
                    <li className="active">Confirmation</li>
                </ul>
                <div className="well well-small">
                    <h1>Confirmation <small className="pull-right"> 2 Items are in the cart </small></h1>
                    <hr className="soften" />

                    <table className="table table-bordered table-condensed">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Description</th>
                                <th>Ref. </th>
                                <th>Avail.</th>
                                <th>Unit price</th>
                                <th>Qty </th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><img width="100" src="/assets/img/e.jpg" alt="" /></td>
                                <td>Items name here<br />Carate : 22<br />Model : n/a</td>
                                <td> - </td>
                                <td><span className="shopBtn"><span className="icon-ok"></span></span> </td>
                                <td>$50.00</td>
                                <td>
                                    <input className="span1" style={{ maxWidth: '34px' }} placeholder="1" id="appendedInputButtons" size="16" type="text" value="2" />
                                    <div className="input-append">
                                        <button className="btn btn-mini" type="button">-</button>
                                        <button className="btn btn-mini" type="button"> + </button>
                                        <button className="btn btn-mini btn-danger" type="button"><span className="icon-remove"></span></button>
                                    </div>
                                </td>
                                <td>$100.00</td>
                            </tr>
                            <tr>
                                <td><img width="100" src="/assets/img/f.jpg" alt="" /></td>
                                <td>Item names and brief details<br />Carate:24 <br />Model:HBK24</td>
                                <td> - </td>
                                <td><span className="shopBtn"><span className="icon-ok"></span></span> </td>
                                <td>$348.42</td>
                                <td>
                                    <input className="span1" style={{ maxWidth: '34px' }} placeholder="1" size="16" type="text" />
                                    <div className="input-append">
                                        <button className="btn btn-mini" type="button">-</button>
                                        <button className="btn btn-mini" type="button">+</button>
                                        <button className="btn btn-mini btn-danger" type="button"><span className="icon-remove"></span></button>
                                    </div>
                                </td>
                                <td>$348.42</td>
                            </tr>
                            <tr>
                                <td colSpan="6" className="alignR">Total products:	</td>
                                <td className="label label-primary"> $448.42</td>
                            </tr>
                        </tbody>
                    </table><br />

                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th colSpan="2">Customer Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Full Name:</td>
                                <td><input type="text" className="input-medium" placeholder="John Doe" /></td>
                            </tr>
                            <tr>
                                <td>Address:</td>
                                <td><input type="email" className="input-medium" placeholder="example@example.com" /></td>
                            </tr>
                            <tr>
                                <td>Phone Number:</td>
                                <td><input type="tel" className="input-medium" placeholder="555-555-5555" /></td>
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