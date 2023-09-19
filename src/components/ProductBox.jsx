import React from 'react'
import Product from './Product';
export default function ProductBox() {
    return (
        <div class="span9">

            <div className="well well-small">
                <h3>Our Products</h3>
                <div className="row-fluid">
                    <ul className="thumbnails">
                        <li className="span4">
                            <Product />
                        </li>
                        <li className="span4">
                            <Product />
                        </li>
                        <li className="span4">
                            <Product />
                        </li>
                    </ul>
                    <ul className="thumbnails">
                        <li className="span4">
                            <Product />
                        </li>
                        <li className="span4">
                            <Product />
                        </li>
                        <li className="span4">
                            <Product />
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    );
}