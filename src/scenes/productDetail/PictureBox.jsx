import React, { useEffect, useState } from 'react';
import AppUrl from '../../Api/AppUrl';

export default function PictureBox(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  var productsInfo = props;

  useEffect(() => {
    const carousel = document.getElementById('myCustomCarousel');

    if (carousel) {
      carousel.addEventListener('click', handleImageClick);
      const intervalId = setInterval(() => handleAutoImageChange(), 3000);
      return () => {
        carousel.removeEventListener('click', handleImageClick);
        clearInterval(intervalId);
      };
    }
  }, [activeIndex]);

  const handleImageClick = (event) => {
    if (event.target.tagName.toLowerCase() === 'img') {
    }
  };

  const handleAutoImageChange = () => {
    setActiveIndex((prevIndex) =>
      prevIndex < productsInfo.products.image.data.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : productsInfo.products.image.data.length - 1
    );
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex < productsInfo.products.image.data.length - 1 ? prevIndex + 1 : 0
    );
  };

  if (
    !productsInfo ||
    productsInfo.length === 0 ||
    !productsInfo.products.image.data ||
    productsInfo.products.image.data.length === 0
  ) {
    return (
      <div className="well well-small">
        <p>No image available.</p>
      </div>
    );
  }

  return (
    <div className="span5">
      <div id="myCustomCarousel" className="carousel slide cntr">
        <div className="carousel-inner">
          {productsInfo.products.image.data.map((image, index) => (
            <div key={index} className={index === activeIndex ? 'item active' : 'item'}>
              <a href="/">
                <img
                  src={AppUrl.ApiURL + image.attributes.url}
                  alt=""
                  style={{ width: '100%' }}
                />
              </a>
            </div>
          ))}
        </div>
        <a className="left carousel-control" href="#myCustomCarousel" data-slide="prev" onClick={handlePrevClick}>
          ‹
        </a>
        <a className="right carousel-control" href="#myCustomCarousel" data-slide="next" onClick={handleNextClick}>
          ›
        </a>
      </div>
    </div>
  );
}
