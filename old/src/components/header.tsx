import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledHeader = styled.header`
  background-color: rgb(0, 0, 0);
  padding: 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 a {
    color: white;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    li {
      margin-left: 1.25rem;
      a {
        color: white;
        border-bottom: 1px solid rgba(255, 255, 255, 0.7);
        &:hover {
          border-bottom: 2px solid rgba(255, 255, 255, 0.75);
          margin-bottom: -1px solid;
        }
        &:active {
          border-bottom: 3px solid rgba(255, 255, 255, 0.75);
          margin-bottom: -2px solid;
        }
        &:visited {
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
      }
    }
  }
`;

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <h1>
        <Link to="/">Pedro Marthan</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/gallery">Galería</Link>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
};

export default Header;
