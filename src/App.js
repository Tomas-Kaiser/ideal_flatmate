import React, { Fragment } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Callout from './components/Callout';
import Footer from './components/Footer';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Callout />
    </Fragment>
  );
}

export default App;
