import React, { useEffect, useRef, useState } from "react";
import Flickity from "flickity";
import LightGallery from "lightgallery";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";
import images from "./Photos";

import "flickity/css/flickity.css";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-video.css";
import "./Gallery.css";

const Gallery2 = () => {
  const flickityRef = useRef(null);
  const lightGalleryInstance = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const images = document.querySelectorAll(".carousel-cell img");
    let loadedImages = 0;

    images.forEach((image) => {
      if (image.complete) {
        loadedImages += 1;
      } else {
        image.addEventListener("load", () => {
          loadedImages += 1;
          if (loadedImages === images.length) {
            setIsLoading(false);
          }
        });
      }
    });

    if (loadedImages === images.length) {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const flkty = new Flickity(flickityRef.current, {
        cellAlign: "center",
        pageDots: false,
        contain: true,
        autoPlay: 1500,
        wrapAround: true,
      });

      flkty.select(0, false, true);

      const container = document.querySelector(".flickity-slider");
      lightGalleryInstance.current = LightGallery(container, {
        selector: ".carousel-cell a",
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
    }
  }, [isLoading]);

  return (
    <div className="gallery-container">
      {isLoading && <div className="loading">Loading...</div>}
      <div
        ref={flickityRef}
        id="flickity-carousel-gallery-demo"
        className={`flickity-carousel ${isLoading ? "hidden" : ""}`}
      >
        {images.map((image, index) => (
          <div key={index} className="carousel-cell">
            <a
              href={image.src}
              data-src={image.src}
              data-sub-html={image.subHtml}
            >
              <img
                src={image.thumb}
                alt={`Thumbnail ${index}`}
                className="img-responsive"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery2;
