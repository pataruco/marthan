import styled from 'styled-components';
import React, { lazy, Suspense } from 'react';
import { importMDX } from 'mdx.macro';
import Header from '../components/header';
import Footer from '../components/footer';

const Content = lazy(() => importMDX('../content/home.md'));

const StyledMain = styled.main`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: -10vh;
  background-color: white;
  padding: 1.25rem;
`;
const Home: React.FC = () => {
  return (
    <>
      <Header />
      <StyledMain>
        <Suspense fallback={<div>Loading...</div>}>
          <Content />
        </Suspense>
      </StyledMain>
      <Footer />
    </>
  );
};

export default Home;
