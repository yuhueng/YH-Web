import React, { useEffect } from 'react';
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import fjGallery from 'flickr-justified-gallery';
import images from './Photos.js';

const Gallery = () => {
  useEffect(() => {
    fjGallery(document.querySelectorAll('.gallery'), {
      itemSelector: '.gallery__item',
      rowHeight: 180,
      lastRow: 'start',
      gutter: 2,
      rowHeightTolerance: 0.1,
      calculateItemsHeight: false,
    });
  }, []);

  return (
    <div className='gallery-container'>
      <LightGallery
        plugins={[lgZoom, lgVideo]}
        mode="lg-fade"
        pager={false}
        thumbnail={true}
        galleryId={'nature'}
        autoplayFirstVideo={false}
        elementClassNames={'gallery'}
        mobileSettings={{
          controls: false,
          showCloseIcon: true,
          download: true,
          rotate: false,
        }}
      >
        {images.map((image, index) => (
          <a
            key={index}
            data-lg-size={`${image.width}-${image.height}`}
            className="gallery__item"
            data-src={image.src}
            data-sub-html={image.subHtml}
          >
            <img
              className="img-responsive"
              src={image.thumb}
              alt={`Thumbnail ${index}`}
            />
          </a>
        ))}
      </LightGallery>
    </div>
  );
};

export default Gallery;
