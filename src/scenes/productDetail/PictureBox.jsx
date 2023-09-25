import React from 'react'
import AppUrl from '../../Api/AppUrl';
export default function PictureBox(props) {
    var productsInfo = props;
    console.log(productsInfo);
    if (!productsInfo || productsInfo.length === 0 || !(productsInfo.products.image.data) || (productsInfo.products.image.data.length === 0) ) {
        return (
            <div className="well well-small">
                <p>No image available.</p>
            </div>
        );
    }
    return (
        <div className="span5">
            <div id="myCarousel" className="carousel slide cntr">
                <div className="carousel-inner">
                    <div className="item active">
                        <a href="/"><img src={AppUrl.ApiURL + productsInfo.products.image.data[0].attributes.url} alt="" style={{ width: '100%' }} /></a>
                    </div>
                    <div className="item">
                        <a href="/"><img src={AppUrl.ApiURL + productsInfo.products.image.data[0].attributes.url} alt="" style={{ width: '100%' }} /></a>
                    </div>
                    <div className="item">
                        <a href="/"><img src={AppUrl.ApiURL + productsInfo.products.image.data[0].attributes.url} alt="" style={{ width: '100%' }} /></a>
                    </div>
                </div>
                <a className="left carousel-control" href="#myCarousel" data-slide="prev">‹</a>
                <a className="right carousel-control" href="#myCarousel" data-slide="next">›</a>
            </div>
        </div>
    );
}
