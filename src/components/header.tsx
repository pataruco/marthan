import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  min-height: 25vh;
  background-color: black;
`;

const Header: React.FC = () => {
  return <StyledHeader />;
};

export default Header;
