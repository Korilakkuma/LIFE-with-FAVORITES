import React from 'react';
import { Header } from './Header';
import { Profile } from './Profile';
import { Portfolio } from './Portfolio';
import { Skills } from './Skills';
import { Music } from './Music';
import { Footer } from './Footer';

export const App = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Profile />
        <Portfolio />
        <Skills />
        <Music />
      </main>
      <Footer />
    </React.Fragment>
  );
};
