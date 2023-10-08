import React from "react";
import { useDispatch } from 'react-redux';
import { addToCart } from "../../state/cartSlide";
export default function DetailBox(props) {
    const dispatch = useDispatch();
    var infoProduct = props.products;
    const formattedPrice = (infoProduct.attributes.price / 1000).toLocaleString("vi-VN", {
        style: "currency",
        currency: "VND",
        minimumFractionDigits: 3,
    });
    return (
        <>
            <div className="span7">
                <h3>{infoProduct.attributes.productName}</h3>
                <hr className="soft" />

                <form className="form-horizontal qtyFrm">
                    <div className="control-group">
                        <label className="control-label">
                            <span>{formattedPrice}</span>
                        </label>
                    </div>

                    <p>
                        {infoProduct.attributes.description}
                    </p>
                    <p>
                        <button type="submit" className="shopBtn" onClick={() => dispatch(addToCart({ item: { ...infoProduct, count: 1 } }))}><span className=" icon-shopping-cart" ></span> Add to cart</button>
                    </p>
                </form>
            </div>
        </>

    );
}
