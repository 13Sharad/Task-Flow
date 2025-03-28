import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
