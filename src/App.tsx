import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.scss';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Add from './components/Add/Add';
import User from './components/User/User';
import NotFound from './components/NotFound/NotFound';
import { Post } from './components/post';


const App = () => {
  // const { id } = useParams();
  // const post = usePostSelector((state) => 
  //   state.posts.posts.find((post) => Number(post.id) === Number(id))
  // );

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/add" element={<Add />} />
        <Route path="/user" element={<User />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/posts/:id" element= {<Post />} />
      </Routes>
    </Router>
  );
};

export default App;
