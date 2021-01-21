import React from 'react';
import styled from 'styled-components';
import 'react-alice-carousel/lib/alice-carousel.css';
import Carousel from 'react-alice-carousel';
import { Props } from 'react-alice-carousel/lib/types';
import paths from '../lib/paths';

const paths800 = paths.map((path) => path[800]);

const handleDragStart = (e: React.MouseEvent) => e.preventDefault();

const slides: JSX.Element[] = paths800.map((path) => {
  /* eslint-disable-line no-eval */
  return (
    <picture className="slide">
      <img src={path} onDragStart={handleDragStart} alt="" />
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

const Carrousel: React.FC = () => {
  return (
    <StyledSection>
      <Carousel
        animationDuration={10000}
        animationType={'fadeout'}
        autoPlay
        autoPlayStrategy={'none'}
        autoWidth
        disableButtonsControls
        disableDotsControls
        infinite
        items={slides}
        mouseTracking
      />
    </StyledSection>
  );
};

export default Carrousel;
