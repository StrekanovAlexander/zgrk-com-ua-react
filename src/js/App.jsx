import { useState } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <div className='wrapper'>
        <Header />
        <div className='container'>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App;
