import React from 'react';
import FsLightbox from 'fslightbox-react';
import imagesPaths from '../lib/paths';
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
import MainWrapper from '../components/main';

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

  @media only screen and (max-device-width: 812px) {
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
      <Header />
      <main>
        <MainWrapper>
          <GalleryMain>
            <h2>Galería</h2>
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
        </MainWrapper>
      </main>
      <Footer />
    </>
  );
};

export default Gallery;
