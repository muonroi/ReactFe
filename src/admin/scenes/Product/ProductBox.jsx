import React, { useEffect, useState } from "react";
import Loading from "../../../components/Loading";
import { productApi } from "../../../Api/productApi";
import ProductItem from "../../components/ProductItem";
import { useParams } from "react-router-dom";
import Paginate from "../../../components/Paginate";

export default function AdminProductBox() {
  const [products, setProducts] = useState({});
    const [loading, setLoading] = useState(true);
    const [totalPage,setTotalPage] = useState(1);
    const [msgSuccess, setSuccessMsg] = useState('');
    const [msgWarning, setWarningMsg] = useState('');
    const {pageNum} = useParams();
    var myView1 = loading === true ? <Loading /> :products.map((product, i) => (
      <ProductItem key = {product.id} stt={(pageNum - 1)*12+i + 1} product ={product}/>
    ));
    var params =  {
      populate: '*',
      'pagination[pageSize]': 12,
      'pagination[page]': pageNum ? pageNum : 1
  };
  var paginateView = loading === true ? null : (
    <Paginate
        totalPage={totalPage}
        basePath='http://localhost:3000/admin/product/page/'
        currentPage={pageNum ? parseInt(pageNum) : 1}
    />)
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response1 = await productApi.getAll(params);
          setProducts(response1.data.data);
          console.log(response1.data.meta.pagination.pageSize)
          setTotalPage(response1.data.meta.pagination.pageSize);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }, [pageNum]); 
    return (
        <>
  <section className="content">
  <div className="col-12">
      <p className="bg-success">{msgSuccess}</p>
      <p className="bg-warning">{msgWarning}</p>
    </div>
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">DataTable with minimal features &amp; hover style</h3>
            </div>
            <div className="card-body">
              <table id="example2" className="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Id</th>
                    <th>Product name</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Publish at</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {myView1}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    
  </section>
  <div style={{ textAlign: 'center' }}>
      <div className="row">
        <div className="col-12">{paginateView}</div>
      </div>
    </div>
        </>);
}