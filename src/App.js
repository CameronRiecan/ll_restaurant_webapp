import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Nav from './components/Nav';
import BookingForm from './components/BookingForm';
import Main from './components/Main.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <>
      <Nav />
      <Header />
      <BookingForm />
      <Main />
      <Footer />
    </>
  );
}

export default App;