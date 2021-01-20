import React from 'react';
import FsLightbox from 'fslightbox-react';
import imagesPaths from '../components/gallery/paths';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectGallery,
  setSlideNumber,
  toggleOpen,
} from '../redux/gallery/gallerySlice';
import Header from '../components/header';
import Main from '../components/main';
import Footer from '../components/footer';
import styled from 'styled-components';

const imagesPaths800 = imagesPaths.map((path) => path[800]);

const GalleryMain = styled(Main)`
  section {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    & > * {
      flex-basis: calc(33.33% - 1.25rem);
      margin-bottom: 1.25rem;
    }
  }
`;

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
    <>
      <Header />
      <GalleryMain>
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
      </GalleryMain>
      <Footer />
    </>
  );
};

export default Gallery;
