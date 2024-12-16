import React from 'react';
import './App.css';
import MyAppArticle from './components/Article/Article';
import Head from './components/Header/Header';
import Sec from './components/Welcome/Welcome';
// Move each BEM block to a separate component (file) and import them here

function App() {
  return (
    <main className="app">
      <Head />
      <Sec />
      <MyAppArticle />
    </main>
  );
}

export default App;
