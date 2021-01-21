import React from 'react';
import styled from 'styled-components';
import 'normalize.css';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'IBM Plex Sans', Helvetica, Arial, sans-serif;
  font-size: 100%;
  line-height: 1.5rem;
  min-height: 100vh;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'IBM Plex Serif', 'Georgia', Times, serif;
  }

  a {
    color: black;
    text-decoration: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.7);

    &:hover {
      border-bottom: 2px solid rgba(0, 0, 0, 0.75);
      margin-bottom: -1px solid;
    }

    &:active {
      border-bottom: 3px solid rgba(0, 0, 0, 0.75);
      margin-bottom: -2px solid;
    }

    &:visited {
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
  }

  picture {
    display: block;
  }

  p,
  ul {
    max-width: 620px;
    margin: 0 auto;
  }

  p {
    margin-bottom: 0.5rem;
  }

  img,
  svg {
    display: block;
    height: auto;
    max-width: 100%;
  }

  main {
    flex: 1 auto;
  }
`;

const App: React.FC = ({ children }) => <StyledDiv>{children}</StyledDiv>;

export default App;
