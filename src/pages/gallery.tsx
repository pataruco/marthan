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
const imagesPaths250 = imagesPaths.map((path) => path[250]);

const GalleryMain = styled(Main)`
  section {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    & > * {
      flex-basis: calc(33.33% - 1.25rem);
      margin-bottom: 1.25rem;
      cursor: pointer;
    }
  }

  @media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
    section {
      & > * {
        flex-basis: calc(50% - 1.25rem);
      }
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
      <GalleryMain>
        <h1>Galería</h1>
        <section>
          {imagesPaths250.map((imagePath, i) => {
            return (
              <article key={i} onClick={handleClick} data-slide-number={i}>
                <picture>
                  <img src={imagePath} alt={imagePath} />
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
