import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: black;
  padding: 1.25rem;
  color: white;
  display: flex;
  justify-content: space-between;

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
      por Pedro y Yoana
    </p>
    <p>
      Actualizado el <time dateTime={datimeString}>{updateTime}</time>
    </p>
  </StyledFooter>
);

export default Footer;
