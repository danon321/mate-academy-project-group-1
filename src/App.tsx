import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Navbar/Header';
import { Home } from './components/Home/Home';
import User from './components/User/User';
import NotFound from './components/NotFound/NotFound';
import { PostPage } from './components/post';
import { Footer } from './components/Footer/Footer';
import AddUser from './components/Add/AddUser';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/add" element={<AddUser />} />
        <Route path="/user" element={<User />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/posts/:id" element={<PostPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
