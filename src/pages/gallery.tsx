import React from 'react';
import FsLightbox from 'fslightbox-react';
import imagesPaths from '../components/gallery/paths';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectGallery,
  setSlideNumber,
  toggleOpen,
} from '../redux/gallery/gallerySlice';

const imagesPaths800 = imagesPaths.map((path) => path[800]);

const Gallery: React.FC = () => {
  const dispatch = useDispatch();
  const { isOpen, slideNumber } = useSelector(selectGallery);

  const handleClick = (event: React.MouseEvent) => {
    const { currentTarget } = event;

    const cardNumber =
      Number(currentTarget.getAttribute('data-slide-number')) ?? 1;

    event.preventDefault();
    dispatch(toggleOpen());
    dispatch(setSlideNumber(cardNumber + 1));
  };

  return (
    <main>
      <h1>Gallery</h1>
      <section>
        {imagesPaths.map((imagePath, i) => {
          return (
            <article key={i} onClick={handleClick} data-slide-number={i}>
              <picture>
                <img src={imagePath[250]} alt="" />
              </picture>
            </article>
          );
        })}
      </section>

      <FsLightbox
        toggler={isOpen}
        sources={imagesPaths800}
        slide={slideNumber}
      />
    </main>
  );
};

export default Gallery;
