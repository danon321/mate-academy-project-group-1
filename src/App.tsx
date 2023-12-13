import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.scss';
import './variables/variables.scss';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Add from './components/Add/Add';
import User from './components/User/User';
import NotFound from './components/NotFound/NotFound';
import HomeId from './components/HomeId/HomeId';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/add" element={<Add />} />
        <Route path="/user" element={<User />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/posts/:id" element= {<HomeId />} />
      </Routes>
    </Router>
  );
};

export default App;
