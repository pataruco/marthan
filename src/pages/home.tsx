import React, { lazy, Suspense } from 'react';
import { importMDX } from 'mdx.macro';
import Header from '../components/header';
import Footer from '../components/footer';
import Main from '../components/main';

const Content = lazy(() => importMDX('../content/home.md'));

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Main>
        <Suspense fallback={<div>Loading...</div>}>
          <Content />
        </Suspense>
      </Main>
      <Footer />
    </>
  );
};

export default Home;
