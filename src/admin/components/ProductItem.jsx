import React from 'react';
import AppUrl from '../../Api/AppUrl';
import { Link } from 'react-router-dom';

export default function ProductItem(props) {
  var product = props.product;
  var stt = props.stt;
  var handleDelete = props.handleDelete;
  var handlePublish = props.handlePublish;
  var myView =
    product.attributes.publishedAt == null ? (
      <input onClick={handlePublish} name={product.id} type="range" min="0" max="1" value="0" />
    ) : (
      <input onClick={handlePublish} name={product.id} type="range" min="0" max="1" value="1" />
    );
  return (
    <tr className="odd">
      <td className="dtr-control sorting_1" tabIndex={0}>
        {stt}
      </td>
      <td>{product.id}</td>
      <td>{product.attributes.productName}</td>
      <td>
        <img
          style={{ width: '80px', height: '80px' }}
          src={AppUrl.ApiURL + product.attributes.image.data[0].attributes.url}
          alt="hình san pham"
        />
      </td>
      <td>{product.attributes.price}</td>
      <td>{myView}</td>
      <td style={{ fontSize: '1.2em', padding: '12px' }}>
        <Link to={`/admin/product/${product.id}`}>
          <i className="icon-eye-open"></i>
        </Link>
        <Link to={`/admin/product/edit/${product.id}`}>
          <i name={product.id} className="icon-edit"></i>
        </Link>
        <i className="icon-trash" name={product.id} onClick={handleDelete}></i>
      </td>
    </tr>
  );

}