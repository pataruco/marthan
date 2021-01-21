import React from 'react';
import styled from 'styled-components';
import paths from '../lib/paths';

import Carousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Props } from 'react-alice-carousel/lib/types';

const paths800 = paths.map((path) => path[800]);

const handleDragStart = (e: React.MouseEvent) => e.preventDefault();

const slides = paths800.map((path) => {
  return (
    <picture className="slide">
      <img src={path} onDragStart={handleDragStart} alt="" />
    </picture>
  );
});

const StyledHeader = styled.header`
  min-height: 45vh;
  background-color: rgb(0, 0, 0);

  .carrousel-wrapper {
    max-width: 50%;
    margin: 0 auto;
  }

  .alice-carousel__stage-item {
    width: 100% !important;
  }

  .slide {
    width: 100%;
    object-fit: cover;
  }
`;

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <div className="carrousel-wrapper">
        <Carousel
          animationDuration={10000}
          animationType={'fadeout'}
          autoPlay
          autoPlayStrategy={'none'}
          autoWidth
          // autoHeight
          disableButtonsControls
          disableDotsControls
          infinite
          items={slides}
          mouseTracking
        />
      </div>
    </StyledHeader>
  );
};

export default Header;
