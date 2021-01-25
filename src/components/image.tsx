import React from 'react';
import { LazyLoadImage, ScrollPosition } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface GalleryPros {
  scrollPosition?: ScrollPosition;
  src?: string;
  alt?: string;
  threshold?: number;
  effect?: 'blur' | 'black-and-white' | 'opacity';
  width?: string;
  delayMethod?: 'debounce' | 'throttle';
}

const Image: React.FC<GalleryPros> = ({
  scrollPosition,
  alt,
  src,
  threshold = 50,
  effect = 'blur',
  delayMethod = 'throttle',
}) => {
  return (
    <LazyLoadImage
      src={src}
      alt={alt}
      scrollPosition={scrollPosition}
      threshold={threshold}
      effect={effect}
      delayMethod={delayMethod}
    />
  );
};

export default Image;
