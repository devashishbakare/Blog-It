import React from 'react';
import Navbar from './Navbar';
import { Routes, Route } from 'react-router';
import Home from './Home';
import PostDetails from './PostDetails';
import CreatePost from './CreatePost';
function App() {
  return (
    <div className="App">
      <Navbar />
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createPost" element={<CreatePost />} />
        <Route path="/postDetails/:id" element={<PostDetails />} />
      </Routes>
      
    </div>
  );
}

export default App;