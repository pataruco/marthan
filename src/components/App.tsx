import React from 'react';
import styled from 'styled-components';
import ReactGA from 'react-ga';
import 'normalize.css';
import '../styles/index.css';

ReactGA.initialize('G-T4T6Q95Z67');
ReactGA.pageview(window.location.pathname + window.location.search);

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;

  main {
    flex: 1 auto;
  }
`;

const App: React.FC = ({ children }) => <StyledDiv>{children}</StyledDiv>;

export default App;
