import React from 'react';
import AppUrl from '../../Api/AppUrl';

export default function ProductItem(props) {
    var product = props.product;
    var stt = props.stt;
    var myView =
  product.attributes.publishedAt == null ? (
    <input type="range" min="0" max="1" value="0" />
  ) : (
    <input type="range" min="0" max="1" value="1" />
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
      <td style={{ fontSize: '1.2em' }}>
        <i className="icon-eye-open"></i>
        <i className="icon-edit"></i>
        <i className="icon-trash"></i>
      </td>
    </tr>
  );
}