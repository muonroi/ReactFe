import React from 'react';
import AppUrl from '../Api/AppUrl';
import { addToCart } from '../state/cartSlide';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
export default function Product(props) {
    const dispatch = useDispatch();
    var info = props.productInfo;
    if (!info) {
        return (
            <div className="well well-small">
                <p>No products available.</p>
            </div>
        );
    }
    const formattedPrice = (info.attributes.price / 1000).toLocaleString("vi-VN", {
        style: "currency",
        currency: "VND",
        minimumFractionDigits: 3,
    });
    return (
        <div className="thumbnail">
            <a href="/" className="overlay"></a>
            <a className="zoomTool" href={AppUrl.FeURL + '/' +'product/' + info.id} title="add to cart"><span className="icon-search"></span> QUICK VIEW</a>
            <a href={AppUrl.FeURL + '/' +'product/' +info.id}><img src={AppUrl.ApiURL + info.attributes.image.data[0].attributes.url} alt="" /></a>
            <div className="caption cntr">
                <p>{info.attributes.productName}</p>
                <p><strong> {formattedPrice}</strong></p>
                <p>{info.attributes.category.data.attributes.categoryName}</p>
                <h4><Link to='#st' className="shopBtn" title="add to cart"
onClick={() => dispatch(addToCart({ item: { ...info, count: 1 } }))}> Add to cart </Link></h4>
                <br className="clr" />
            </div>
        </div>
    );
}
