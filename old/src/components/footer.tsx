import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: black;
  padding: 1.25rem;
  color: white;
  display: flex;
  justify-content: space-between;

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
      border-bottom: 1px solid rgba(255, 255, 255, 0.6);
    }
  }

  & > p {
    max-width: 100% !important;
    flex-basis: 100%;
    margin-bottom: initial;
  }

  & > p:last-of-type {
    text-align: end;
  }
`;

const updateTime = new Intl.DateTimeFormat('es-VE', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}).format(new Date());

const datimeString = new Intl.DateTimeFormat('es-VE').format(new Date());

const Footer = () => (
  <StyledFooter>
    <p>
      Hecho con{' '}
      <span role="img" arial-title="amor">
        ❤️
      </span>{' '}
      por{' '}
      <a
        href="https://www.linkedin.com/in/pataruco/"
        target="_blank"
        rel="noopener"
      >
        Pedro
      </a>{' '}
      y Yoana
    </p>
    <p>
      Actualizado el <time dateTime={datimeString}>{updateTime}</time>
    </p>
  </StyledFooter>
);

export default Footer;
