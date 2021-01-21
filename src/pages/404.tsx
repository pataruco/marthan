import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import MainWrapper from '../components/main';

const ErrorPage: React.FC = () => (
  <>
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
