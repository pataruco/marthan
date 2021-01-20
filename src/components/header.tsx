// @ts-nocheck
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import paths from '../components/gallery/paths';
import {
  selectHero,
  changeBackgroundInterval,
  TRANSITION_TIME,
} from '../redux/hero/heroSlice';

const setBackgroundImage = (props) => props.backgroundImageUrl || paths[0][800];

const StyledHeader = styled.header`
  @keyframes flash {
    0% {
      opacity: 0.1;
    }

    100% {
      opacity: 1;
    }
  }

  background-image: url(${setBackgroundImage});
  min-height: 45vh;
  background-color: black;
  background-repeat: no-repeat;
  background-position: top center;
  transition: all ease 1s;
  animation: flash linear alternate infinite ${TRANSITION_TIME}s;
  background-attachment: fixed;
`;

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const { backgroundImagePath } = useSelector(selectHero);

  useEffect(() => {
    dispatch(changeBackgroundInterval());
  }, [dispatch]);

  return (
    <StyledHeader backgroundImageUrl={backgroundImagePath}>
      <div className="blend"></div>
    </StyledHeader>
  );
};

export default Header;
