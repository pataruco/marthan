import React from 'react';
import styled from 'styled-components';
import 'normalize.css';
import '../styles/index.css';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;

  main {
    flex: 1 auto;
  }
`;

const App: React.FC = ({ children }) => <StyledDiv>{children}</StyledDiv>;

export default App;
