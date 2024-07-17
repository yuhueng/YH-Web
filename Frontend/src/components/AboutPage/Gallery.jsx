import React, { useEffect } from 'react';
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import fjGallery from 'flickr-justified-gallery';

const images = [
  {
    src: 'images/nyhpic1.jpg',
    thumb: 'images/nyhpic1.jpg', 
    height: 300,
    width: 300, 
    // subHtml: "<h4>Photo In: </h4><p>Location: </p>"
  },
  {
    src: 'images/nyhpic2.jpg',
    thumb: 'images/nyhpic2.jpg',
    height: 300,
    width: 300,  
    // subHtml: "<h4>Photo In: </h4><p>Location: </p>"
  },
  {
    src: 'images/nyhpic3.jpg',
    thumb: 'images/nyhpic3.jpg',
    height: 300,
    width: 300,  
    // subHtml: "<h4>Photo In: </h4><p>Location: </p>"
  },
  {
    src: 'images/nyhpic4.jpg',
    thumb: 'images/nyhpic4.jpg',
    height: 300,
    width: 300,  
    // subHtml: "<h4>Photo In: </h4><p>Location: </p>"
  },
  {
    src: 'images/nyhpic5.jpg',
    thumb: 'images/nyhpic5.jpg',
    height: 300,
    width: 300,  
    // subHtml: "<h4>Photo In: </h4><p>Location: </p>"
  },
  {
    src: 'images/nyhpic6.jpg',
    thumb: 'images/nyhpic6.jpg',
    height: 300,
    width: 300,  
    // subHtml: "<h4>Photo In: </h4><p>Location: </p>"
  },
  {
    src: 'images/nyhpic7.jpg',
    thumb: 'images/nyhpic7.jpg',
    height: 300,
    width: 300,  
    // subHtml: "<h4>Photo In: </h4><p>Location: </p>"
  },
  {
    src: 'images/nyhpic8.jpg',
    thumb: 'images/nyhpic8.jpg',
    height: 300,
    width: 300,  
    // subHtml: "<h4>Photo In: </h4><p>Location: </p>"
  },
  {
    src: 'images/nyhpic9.jpg',
    thumb: 'images/nyhpic9.jpg',
    height: 300,
    width: 300,  
    // subHtml: "<h4>Photo In: </h4><p>Location: </p>"
  },
  {
    src: 'images/nyhpic10.jpg',
    thumb: 'images/nyhpic10.jpg',
    height: 300,
    width: 300,  
    // subHtml: "<h4>Photo In: </h4><p>Location: </p>"
  },
  {
    src: 'images/nyhpic11.jpg',
    thumb: 'images/nyhpic11 .jpg',
    height: 300,
    width: 300,  
    // subHtml: "<h4>Photo In: </h4><p>Location: </p>"
  },
  
];

export const Gallery = () => {
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
