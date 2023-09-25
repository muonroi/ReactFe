import React from 'react';
import { Link } from 'react-router-dom';

export default function Category(props) {
    if (!props.categories || props.categories.length === 0) {
        return (
            <div className="well well-small">
                <p>No categories available.</p>
            </div>
        );
    }
    var categoriesInfo = props.categories;
    var handleFilterByCategoryName = props.handleFilterByCategoryName
    var categoryView = categoriesInfo.map((item) => (
        <li key={item.id}>
            <Link to='/product' onClick={handleFilterByCategoryName}>{item.attributes.categoryName}</Link>
            </li>
    ));
    
    return (
        <div className="well well-small">
            <ul className="nav nav-list">
                <li>
                <Link to='/product' onClick={handleFilterByCategoryName}>All</Link>
                    </li>
                {categoryView}
                <li style={{ border: 0 }}> &nbsp;</li>
            </ul>
        </div>
    );
}
