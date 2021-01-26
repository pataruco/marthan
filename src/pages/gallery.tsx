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
import Captions from '../components/captions';

import GalleryItem from '../components/GalleryItem';

interface PathItem {
  footnote: string[] | null;
  year: number | null;
  imagePath: string;
  800?: string;
}

const byYear = (a: PathItem, b: PathItem) =>
  a.year !== null && b.year !== null ? a.year - b.year : -1;

const imagesPaths800 = imagesPaths
  .map((path) => {
    const { footnote, year, 800: imagePath } = path;
    return {
      footnote,
      year,
      imagePath,
    };
  })
  .sort(byYear)
  .map((path) => path.imagePath);

const imagesPaths250 = imagesPaths
  .map((path) => {
    const { footnote, year, 250: imagePath } = path;
    return {
      footnote,
      year,
      imagePath,
    };
  })
  .sort(byYear);

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
                return <GalleryItem {...galleryProps} key={i} />;
              })}
            </section>

            <FsLightbox
              toggler={isOpen}
              sources={imagesPaths800}
              slide={slideNumber}
              // @ts-ignore
              captions={Captions(imagesPaths250)}
            />
          </GalleryMain>
        </MainWrapper>
      </main>
      <Footer />
    </>
  );
};

export default Gallery;
