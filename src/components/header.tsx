import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: rgb(0, 0, 0);
  padding: 1.25rem;
  h1 {
    color: white;
  }
`;

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <h1>Pedro Marthan</h1>
    </StyledHeader>
  );
};

export default Header;
