import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import User from './components/User/User';
import NotFound from './components/NotFound/NotFound';
import { PostPage } from './components/post';
import { Add, FormData } from './components/Add/Add';


const App = () => {
  const handleSubmit = ((data: FormData) => {
    console.log(data);
  });

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/add" element={<Add onSubmit={handleSubmit} />} />
        <Route path="/user" element={<User />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/posts/:id" element= {<PostPage />} />
      </Routes>
    </Router>
  );
};

export default App;
