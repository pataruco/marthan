import React from 'react';
import FsLightbox from 'fslightbox-react';
import imagesPaths from '../lib/paths';
import { useSelector } from 'react-redux';
import { selectGallery } from '../redux/gallery/gallerySlice';
import Header from '../components/header';
import Main from '../components/main';
import Footer from '../components/footer';
import styled from 'styled-components';
import MainWrapper from '../components/main';
import Head from '../components/head';

import GalleryItem from '../components/GalleryItem';

const imagesPaths800 = imagesPaths.map((path) => path[800]);
const imagesPaths250 = imagesPaths
  .map((path) => {
    const { footnote, year, 250: imagePath } = path;
    return {
      footnote,
      year,
      imagePath,
    };
  })
  .sort((a, b) => (a.year !== null && b.year !== null ? a.year - b.year : -1));

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
  const { isOpen, slideNumber } = useSelector(selectGallery);

  return (
    <>
      <Head>
        <title>Pedro Marthan | Galería</title>
      </Head>
      <Header />
      <main>
        <MainWrapper>
          <GalleryMain>
            <h2>Galería</h2>
            <section>
              {imagesPaths250.map((info, i) => {
                const galleryProps = { ...info, id: i };
                return <GalleryItem {...galleryProps} />;
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
