import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Navbar/Header';
import { Home } from './components/Home/Home';
import User from './components/User/User';
import NotFound from './components/NotFound/NotFound';
import HomeId from './components/HomeId/HomeId';

const App = () => {
  // const handleSubmit = ((data: FormData) => {
  //   console.log(data);
  // });

  return (
    <Router>
      <Header />
      <Routes>
        {/* <Route path="/add" element={<Add onSubmit={handleSubmit} />} /> */}
        <Route path="/user" element={<User />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/posts/:id" element={<HomeId />} />
      </Routes>
    </Router>
  );
};

export default App;
