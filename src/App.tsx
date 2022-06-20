import React from 'react';
import './App.css';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <Header />
      <Body />
      <Footer />
    </Layout>
  );
}

export default App;
