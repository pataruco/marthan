import React, { lazy, Suspense } from 'react';
import { importMDX } from 'mdx.macro';
import Header from '../components/header';
import Footer from '../components/footer';
import MainWrapper from '../components/main';
import Carrousel from '../components/carrousel';
import Head from '../components/head';

const Content = lazy(() => importMDX('../content/home.md'));

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Pedro Marthan | Inicio</title>
      </Head>
      <Header />
      <main>
        <Carrousel />
        <MainWrapper>
          <Suspense fallback={<div>Loading...</div>}>
            <Content />
          </Suspense>
        </MainWrapper>
      </main>
      <Footer />
    </>
  );
};

export default Home;
