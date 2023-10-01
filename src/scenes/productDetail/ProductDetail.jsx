import React, { useEffect, useState } from 'react'
import PictureBox from './PictureBox'
import Loading from '../../components/Loading'
import { productApi } from '../../Api/productApi'
import { useParams } from "react-router-dom";
import DetailBox from './DetailBox'
export default function ProductDetail() {
    const {id} = useParams();
    const [products, setProducts] = useState({});
    const [loading, setLoading] = useState(true);
    var params = {
        populate: '*',
    }
    var myView1 = loading === true ? <Loading /> : <PictureBox products={products.attributes}/>;
    var myView2 = loading === true ? <Loading /> : <DetailBox products={products.attributes} />;
    useEffect(() => {
        const fetchData = async () => {
            try {
                    const response = await productApi.get(id,params)
                    setProducts(response.data.data);
                    setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
    return (
        <div className="well well-small">
            <div className="row-fluid">
            {myView1}
            {myView2}
            </div>
        </div>
    )
}