import React, { useEffect, useState } from "react";
import ProductBox from '../../components/ProductBox'
import Category from '../../components/Category'
import Loading from '../../components/Loading'
import {categoryApi} from '../../Api/categoryApi'
import {productApi} from '../../Api/productApi'
import Paginate from '../../components/Paginate'
import { useParams } from "react-router-dom";
import MainCarousel from './MainCarousel'
export default function Home() {
    const [categories, setCategories] = useState({});
    const [products, setProducts] = useState({});
    const [loading, setLoading] = useState(true);
    const {pageNum} = useParams();
    const [totalPage,setTotalPage] = useState(1);
    var params = {
        populate: '*',
        'pagination[pageSize]': 12,
        'pagination[page]': pageNum ? pageNum : 1
    };
    var myView1 = loading === true ? <Loading /> : <Category categories={categories} />
    var myView2 = loading === true ? <Loading /> : <ProductBox products={products} />
    var paginateView = loading === true ? null : (
        <Paginate
            totalPage={totalPage}
            basePath='http://localhost:3000/product/page/'
            currentPage={pageNum ? parseInt(pageNum) : 1}
        />)
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response1 = await categoryApi.getAll();
            const response2 = await productApi.getAll(params);
            setCategories(response1.data.data);
            setProducts(response2.data.data);
            setTotalPage(response2.data.meta.pagination.pageSize);
            setLoading(false);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, [pageNum]); 
    return (
        <>
            <div className="row">
  <div id="sidebar" className="span3">
    {myView1}
    <div className="well well-small alert alert-warning cntr">
      <h2>50% Discount</h2>
      <p>
        only valid for online order. <br />
        <br />
        <a className="defaultBtn" href="#">
          Click here{" "}
        </a>
      </p>
    </div>
    <div className="well well-small">
      <a href="#">
        <img src="assets/img/paypal.jpg" alt="payment method paypal" />
      </a>
    </div>
    <a className="shopBtn btn-block" href="#">
      Upcoming products <br />
      <small>Click to view</small>
    </a>
    <br />
    <br />
    <ul className="nav nav-list promowrapper">
      <li>
        <div className="thumbnail">
          <a
            className="zoomTool"
            href="product_details.html"
            title="add to cart"
          >
            <span className="icon-search" /> QUICK VIEW
          </a>
          <img
            src="assets/img/bootstrap-ecommerce-templates.png"
            alt="bootstrap ecommerce templates"
          />
          <div className="caption">
            <h4>
              <a className="defaultBtn" href="product_details.html">
                VIEW
              </a>{" "}
              <span className="pull-right">$22.00</span>
            </h4>
          </div>
        </div>
      </li>
      <li style={{ border: 0 }}> &nbsp;</li>
      <li>
        <div className="thumbnail">
          <a
            className="zoomTool"
            href="product_details.html"
            title="add to cart"
          >
            <span className="icon-search" /> QUICK VIEW
          </a>
          <img
            src="assets/img/shopping-cart-template.png"
            alt="shopping cart template"
          />
          <div className="caption">
            <h4>
              <a className="defaultBtn" href="product_details.html">
                VIEW
              </a>{" "}
              <span className="pull-right">$22.00</span>
            </h4>
          </div>
        </div>
      </li>
      <li style={{ border: 0 }}> &nbsp;</li>
      <li>
        <div className="thumbnail">
          <a
            className="zoomTool"
            href="product_details.html"
            title="add to cart"
          >
            <span className="icon-search" /> QUICK VIEW
          </a>
          <img
            src="assets/img/bootstrap-template.png"
            alt="bootstrap template"
          />
          <div className="caption">
            <h4>
              <a className="defaultBtn" href="product_details.html">
                VIEW
              </a>{" "}
              <span className="pull-right">$22.00</span>
            </h4>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <div className="span9">
    <div className="well np">
      <div id="myCarousel" className="carousel slide homCar">
        <div className="carousel-inner">
          <div className="item">
            <img
              style={{ width: "100%" }}
              src="assets/img/bootstrap_free-ecommerce.png"
              alt="bootstrap ecommerce templates"
            />
            <div className="carousel-caption">
              <h4>Bootstrap shopping cart</h4>
              <p>
                <span>Very clean simple to use</span>
              </p>
            </div>
          </div>
          <div className="item">
            <img
              style={{ width: "100%" }}
              src="assets/img/carousel1.png"
              alt="bootstrap ecommerce templates"
            />
            <div className="carousel-caption">
              <h4>Bootstrap Ecommerce template</h4>
              <p>
                <span>Highly Google seo friendly</span>
              </p>
            </div>
          </div>
          <div className="item active">
            <img
              style={{ width: "100%" }}
              src="assets/img/carousel3.png"
              alt="bootstrap ecommerce templates"
            />
            <div className="carousel-caption">
              <h4>Twitter Bootstrap cart</h4>
              <p>
                <span>Very easy to integrate and expand.</span>
              </p>
            </div>
          </div>
          <div className="item">
            <img
              style={{ width: "100%" }}
              src="assets/img/bootstrap-templates.png"
              alt="bootstrap templates"
            />
            <div className="carousel-caption">
              <h4>Bootstrap templates integration</h4>
              <p>
                <span>Compitable to many more opensource cart</span>
              </p>
            </div>
          </div>
        </div>
        <a
          className="left carousel-control"
          href="#myCarousel"
          data-slide="prev"
        >
          ‹
        </a>
        <a
          className="right carousel-control"
          href="#myCarousel"
          data-slide="next"
        >
          ›
        </a>
      </div>
    </div>
    {myView2}
  </div>
</div>
            <div className="row" style={{ display:'flex', justifyContent:'center'}}>
                    <div className="span12" style={{ display:'flex', justifyContent:'center'}}>
                        {paginateView}
                    </div>
                </div>  
            <MainCarousel />
           
        </>

    )
}