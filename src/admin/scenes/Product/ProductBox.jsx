import React, { useEffect, useState } from "react";
import Loading from "../../../components/Loading";
import { productApi } from "../../../Api/productApi";
import ProductItem from "../../components/ProductItem";
import { useParams } from "react-router-dom";
import Paginate from "../../../components/Paginate";
import { Link } from 'react-router-dom';

export default function AdminProductBox() {
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);
  const [totalPage, setTotalPage] = useState(1);
  const [msgSuccess, setSuccessMsg] = useState('');
  const [msgWarning, setWarningMsg] = useState('');
  const [loadData, setLoadData] = useState(1);
  const [viewOption, setViewOption] = useState('preview');
  const { pageNum } = useParams();
  const handleSelect = (e) => {
    console.log(e.target.value)
    setViewOption(e.target.value);
  }
  const handlePublish = (e) => {
    const data = {
      "data": {
        "publishedAt": e.target.value ? Date.now() : null,
      }
    };

    const togglePublish = async (e) => {
      try {
        await productApi.update(e.target.getAttribute('name'), data);
        setSuccessMsg('Publish success:' + e.target.getAttribute('name'));
        setLoadData(loadData + 1);
      } catch (error) {
        setWarningMsg('Publish error: ' + e.target.getAttribute('name') + error)
        console.error('Error updating product:', error);
      }
    };

    togglePublish(e);
  };

  const handleDelete = (e) => {
    const deleteProduct = async (id) => {
      try {
        var c = window.confirm('You want delete product: ' + id) + '?';
        if (c == true) {
          e.target.classList.remove('fa-trash');
          e.target.classList.add('fa-spinner');
          await productApi.del(id);
          setSuccessMsg('Delete success:' + id);
          e.target.classList.add('fa-trash');
          e.target.classList.remove('fa-spinner');
          setLoadData(loadData + 1);
        }
      }
      catch (error) {
        setWarningMsg('Delete error: ' + id + error)
      }
      finally {
        window.scroll(0, 0)
      }
    }
    deleteProduct(e.target.getAttribute('name'))
  }
  var myView1 = loading === true ? <Loading /> : products.map((product, i) => (
    <ProductItem key={product.id} stt={i + 1} product={product} handleDelete={handleDelete} handlePublish={handlePublish} />
  ));
  var params = {
    populate: '*',
    'pagination[pageSize]': 12,
    'pagination[page]': pageNum ? pageNum : 1,
    'publicationState': 'preview',
    'filters[publishedAt][$null]': viewOption == 'preview'
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
        setTotalPage(response1.data.meta.pagination.pageSize);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [pageNum, loadData, viewOption]);
  return (
    <>
      <section className="content">
        <div className="col-12">
          <p className="bg-success">{msgSuccess}</p>
          <p className="bg-warning">{msgWarning}</p>
        </div>
        <div className="col-12">
          <select onChange={handleSelect}>
            <option value="preview">Preview</option>
            <option value="published">Live</option>
          </select>
        </div>
        <div className="d-flex p-3 flex-row-reverse row">
          <div className="col-12">
            <Link to={`/admin/product/add`}>
              <button>Create new product</button>
            </Link>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
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