import React from 'react'
export default function MainCarousel() {
    return (
        <section className="our_client">
            <hr className="soften" />
            <h4 className="title cntr"><span className="text">Manufactures</span></h4>
            <hr className="soften" />
            <div className="row">
                <div className="span2">
                    <a href="#"><img alt="" src="assets/img/1.png" /></a>
                </div>
                <div className="span2">
                    <a href="#"><img alt="" src="assets/img/2.png" /></a>
                </div>
                <div className="span2">
                    <a href="#"><img alt="" src="assets/img/3.png" /></a>
                </div>
                <div className="span2">
                    <a href="#"><img alt="" src="assets/img/4.png" /></a>
                </div>
                <div className="span2">
                    <a href="#"><img alt="" src="assets/img/5.png" /></a>
                </div>
                <div className="span2">
                    <a href="#"><img alt="" src="assets/img/6.png" /></a>
                </div>
            </div>
        </section>
    )
}