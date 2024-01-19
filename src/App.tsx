import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Navbar/Header';
import { Home } from './pages/Home/Home';
import User from './pages/User/User';
import NotFound from './pages/NotFound/NotFound';
import { PostPage } from './pages/post';
import { Footer } from './components/Footer/Footer';
import AddUser from './components/Add/AddUser';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/add" element={<AddUser />} />
        <Route path="/users/:id" element={<User />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/posts/:id" element={<PostPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
