import React from "react";

export default function DetailBox(props) {
    var infoProduct = props.products;
    const formattedPrice = (infoProduct.price / 1000).toLocaleString("vi-VN", {
        style: "currency",
        currency: "VND",
        minimumFractionDigits: 3,
    });
    return (
        <>
            <div className="span7">
                <h3>{infoProduct.productName}</h3>
                <hr className="soft" />

                <form className="form-horizontal qtyFrm">
                    <div className="control-group">
                        <label className="control-label">
                            <span>{formattedPrice}</span>
                        </label>
                    </div>

                    <p>
                    {infoProduct.description}
                    </p>
                    <p>
                        <button type="submit" className="shopBtn"><span className=" icon-shopping-cart"></span> Add to cart</button>
                    </p>
                </form>
            </div>
        </>

    );
}
