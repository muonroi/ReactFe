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
        <li key={item.id} style={{display: 'block'}}>
            <Link to='/product' onClick={handleFilterByCategoryName} style={{display: 'block'}}>{item.attributes.categoryName} <br/></Link>
            </li>
    ));
    
    return (
        <div className="well well-small">
                <Link to='/product' onClick={handleFilterByCategoryName}>All <br /></Link>
            <ul className="nav nav-list" style={{ display:'flex', flexDirection:'column'}}>
               
                {categoryView}
                <li style={{ border: 0 }}> &nbsp;</li>
            </ul>
        </div>
    );
}
