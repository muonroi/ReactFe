import React from 'react'

export default function PictureBox() {
    return (
        <div className="span5">
            <div id="myCarousel" className="carousel slide cntr">
                <div className="carousel-inner">
                    <div className="item active">
                        <a href="#"><img src="assets/img/a.jpg" alt="" style={{ width: '100%' }} /></a>
                    </div>
                    <div className="item">
                        <a href="#"><img src="assets/img/b.jpg" alt="" style={{ width: '100%' }} /></a>
                    </div>
                    <div className="item">
                        <a href="#"><img src="assets/img/e.jpg" alt="" style={{ width: '100%' }} /></a>
                    </div>
                </div>
                <a className="left carousel-control" href="#myCarousel" data-slide="prev">‹</a>
                <a className="right carousel-control" href="#myCarousel" data-slide="next">›</a>
            </div>
        </div>
    );
}
