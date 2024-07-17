import React, { useEffect, useRef } from 'react';
import Flickity from 'flickity';
import LightGallery from 'lightgallery';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import images from './Photos';

import 'flickity/css/flickity.css';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-video.css';
import './Gallery.css';

const Gallery2 = () => {
  const flickityRef = useRef(null);
  const lightGalleryInstance = useRef(null);

  useEffect(() => {
    const flkty = new Flickity(flickityRef.current, {
      cellAlign: 'center',
      pageDots: false,
      contain: true,
      autoPlay: 1500,
      wrapAround: true,
    });

    const container = document.querySelector('.flickity-slider');
    lightGalleryInstance.current = LightGallery(container, {
      selector: '.carousel-cell a',
      plugins: [lgThumbnail, lgZoom, lgVideo],
      showCloseIcon: true,
      download: true,
    });

    return () => {
      flkty.destroy();
      if (lightGalleryInstance.current) {
        lightGalleryInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="gallery-container">
      <div ref={flickityRef} id="flickity-carousel-gallery-demo" className="flickity-carousel">
        {images.map((image, index) => (
          <div key={index} className="carousel-cell">
            <a href={image.src} data-src={image.src} data-sub-html={image.subHtml}>
              <img src={image.thumb} alt={`Thumbnail ${index}`} className="img-responsive" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery2;
