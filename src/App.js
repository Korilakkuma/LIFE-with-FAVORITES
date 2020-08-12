'use strict';

import React from 'react';
import { Header } from './components/Header';
import { Profile } from './components/Profile';
import { Portfolio } from './components/Portfolio';
import { Skills } from './components/Skills';
import { Music } from './components/Music';
import { Footer } from './components/Footer';

export const App = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Profile />
        <Portfolio />
        <Skills />
        <Music />
        <Footer />
      </main>
    </React.Fragment>
  );
};
