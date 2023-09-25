import React from 'react';
import Product from './Product';

export default function ProductBox(props) {
    var productsInfo = props.products;
    if (!productsInfo || productsInfo.length === 0) {
        return (
            <div className="well well-small">
                <p>No products available.</p>
            </div>
        );
    }

    var productView = [];
    for (var i = 0; i < productsInfo.length; i += 3) {
        var productGroup = productsInfo.slice(i, i + 3);
        var productGroupView = productGroup.map((item) => (
            <li className="span4" key={item.Id}>
                <Product productInfo={item} />
            </li>
        ));
        productView.push(
            <ul className="thumbnails" key={`ul_${i}`}>
                {productGroupView}
            </ul>
        );
    }

    return (
        
            <div className="well well-small">
                <h3>Our Products</h3>
                <div className="row-fluid">
                    {productView}
                </div>
            </div>
    );
}
