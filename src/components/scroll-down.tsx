import React from 'react';
import styled from 'styled-components';

const StyledScrollIcon = styled.div`
  left: 50%;
  position: absolute;
  text-align: center;
  bottom: 0;
  transform: translate(-50%, -50%);
  .scrolldown {
    border: 2px solid #ffffff;
    border-radius: 30px;
    height: 46px;
    margin: 0 auto 8px;
    text-align: center;
    width: 30px;
  }

  .scrolldown-p1,
  .scrolldown-p2 {
    animation-duration: 1.5s;
    animation-name: scrolldown;
    animation-iteration-count: infinite;
    fill: #ffffff;
  }

  .scrolldown-p2 {
    animation-delay: 0.75s;
  }

  svg {
    display: inline;
  }

  @keyframes scrolldown {
    0% {
      opacity: 0;
      transform: translate(0, -8px);
    }
    50% {
      opacity: 1;
      transform: translate(0, 0);
    }
    100% {
      opacity: 0;
      transform: translate(0, 8px);
    }
  }
`;

const ScrollDownIcon: React.FC = () => (
  <StyledScrollIcon>
    <div className="scrolldown">
      <svg height="30" width="10" viewBox="0 0 10 30">
        <circle className="scrolldown-p1" cx="5" cy="15" r="2" />
        <circle className="scrolldown-p2" cx="5" cy="15" r="2" />
      </svg>
    </div>
  </StyledScrollIcon>
);

export default ScrollDownIcon;
