import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../components/footer';
import Header from '../components/header';
import MainWrapper from '../components/main';

const ErrorPage: React.FC = () => (
  <>
    <Helmet>
      <title>Pedro Marthan | 404</title>
    </Helmet>
    <Header />
    <main>
      <MainWrapper>
        <h2>404</h2>
      </MainWrapper>
    </main>
    <Footer />
  </>
);

export default ErrorPage;
