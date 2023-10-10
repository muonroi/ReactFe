import React, { useEffect, useState } from "react";
import ProductBox from '../../components/ProductBox'
import Category from '../../components/Category'
import Loading from '../../components/Loading'
import Paginate from '../../components/Paginate'
import { categoryApi } from '../../Api/categoryApi'
import { productApi } from '../../Api/productApi'
import { useParams } from "react-router-dom";
import Filter from "./Filter";

export default function ProductList() {
    const [categories, setCategories] = useState({});
    const [products, setProducts] = useState({});
    const [loading, setLoading] = useState(true);
    const { pageNum } = useParams();
    const [totalPage, setTotalPage] = useState(1);
    const [FilterKey, setFilterKey] = useState('');
    const [category, setCategory] = useState(null);
    const [maxPrice, setMaxPrice] = useState(1000000);
    const [minPrice, setMinPrice] = useState(10000);
    var params = {
        populate: '*',
        pagination: {
            pageSize: 12,
            page: pageNum ? pageNum : 1,
        },
        filters: {
            productName: {
                $contains: FilterKey ? FilterKey : null,
            },
            price: {
                $lt: maxPrice ? maxPrice : 1000000,
                $gt: minPrice ? minPrice : 10000
            },
            category: {
                categoryName: {
                    $eq: category ? category : null
                }
            }
        }
    }
    const handleFilterByName = (e) => {
        setFilterKey(e.target.value)
    }
    const handleFilterByMaxPrice = (e) => {
        setMaxPrice(e.target.value)
    }
    const handleFilterByMinPrice = (e) => {
        setMinPrice(e.target.value)
    }
    const handleFilterByCategoryName = (e) => {
        if (e.target.innerText === 'All') {
            setCategory(null)
        }
        else
            setCategory(e.target.innerText)
    }
    var myView1 = loading === true ? <Loading /> : <Category categories={categories} handleFilterByCategoryName={handleFilterByCategoryName} />;
    var myView2 = loading === true ? <Loading /> : <ProductBox products={products} />;
    var paginateView = loading === true ? null : (
        <Paginate
            totalPage={totalPage}
            basePath='http://localhost:3000/product/page/'
            currentPage={pageNum ? parseInt(pageNum) : 1}
        />
    );

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
    }, [pageNum, FilterKey, category, maxPrice, minPrice]);

    return (
        <div>
            <>
                <div className="row">
                    <div id="sidebar" className="span3">
                        {myView1}
                    </div>
                    <div className="span9">
                        <Filter handleFilterByName={handleFilterByName} handleFilterByMaxPrice={handleFilterByMaxPrice} handleFilterByMinPrice={handleFilterByMinPrice} />
                        {myView2}
                    </div>
                </div>
                <div className="row">
                    <div className="span12">
                        {paginateView}
                    </div>
                </div>
            </>
        </div>
    )
}
