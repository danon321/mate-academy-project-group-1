import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Add from './components/Add/Add';
import User from './components/User/User';
import NotFound from './components/NotFound/NotFound';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <hr />
        <Routes>
          <Route path="/add" element={<Add />} />
          <Route path="/user" element={<User />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;