import styled from 'styled-components';
import React, { lazy, Component, Suspense } from 'react';
import { importMDX } from 'mdx.macro';
import Header from '../components/header';
import Footer from '../components/footer';

const Content = lazy(() => importMDX('../content/home.md'));

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
  <>
    <Header />
    <StyledMain>
      <h1>Home</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Content />
      </Suspense>
    </StyledMain>
    <Footer />
  </>
);

export default Home;
