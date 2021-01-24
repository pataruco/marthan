import React from 'react';
import styled from 'styled-components';
import 'react-alice-carousel/lib/alice-carousel.css';
import Carousel from 'react-alice-carousel';
import { Props } from 'react-alice-carousel/lib/types';
import paths from '../lib/paths';
import Image from './image';

const paths800 = paths.map((path) => path[800]);

const handleDragStart = (e: React.MouseEvent) => e.preventDefault();

const slides: JSX.Element[] = paths800.map((path) => {
  /* eslint-disable-line no-eval */
  return (
    <picture className="slide" onDragStart={handleDragStart}>
      <Image src={path} alt="" width="100%" />
    </picture>
  );
});

const StyledSection = styled.section`
  background-color: rgb(0, 0, 0);
  width: 100%;
  max-width: 100%;

  .alice-carousel__stage-item {
    width: 100% !important;
    margin: 0 1.25rem;
  }

  .slide {
    width: 100%;
    object-fit: cover;
  }
`;

const carrouselOptions: Props = {
  animationDuration: 2000,
  // animationType: 'fadeout',
  autoPlay: true,
  autoPlayStrategy: 'all',
  autoWidth: true,
  disableButtonsControls: true,
  disableDotsControls: true,
  infinite: true,
  items: slides,
  mouseTracking: true,
  responsive: {
    1024: {
      items: 1,
    },
  },
};

const Carrousel: React.FC = () => {
  return (
    <StyledSection>
      <Carousel {...carrouselOptions} />
    </StyledSection>
  );
};

export default Carrousel;
