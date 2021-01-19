import React from 'react';
// import { Link } from 'react-router-dom';

import styled from 'styled-components';

const StyledMain = styled.main`
  padding: 1.25rem;

  li {
    margin-bottom: 0.5rem;
  }

  a {
    color: black;
    text-decoration: none;
    &:hover {
      border-bottom: 2px solid red;
    }
  }
`;

const Home: React.FC = () => (
  <StyledMain>
    <h1>Home</h1>
  </StyledMain>
);

export default Home;
