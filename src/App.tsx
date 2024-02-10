import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Navbar/Header';
import { Home } from './pages/Home/Home';
import User from './pages/User/User';
import NotFound from './pages/NotFound/NotFound';
import Settings from './pages/Settings/Settings';
import { PostPage } from './pages/post';
import { Footer } from './components/Footer/Footer';
import AddPost from './components/Add/AddPost';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/add" element={<AddPost />} />
        <Route path="/users/:id" element={<User />} />
        <Route path="/users/settings" element={<Settings />} />
        <Route path="/" element={<Home />} />
        <Route path="/posts/:id" element={<PostPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
