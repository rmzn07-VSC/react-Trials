import React from 'react'; // 'react' import ediliyor
import './App.css';
import Navbar from './components/Navbar';
import BlogList from './components/BlogList';
import PostDetail from './components/PostDetail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const samplePosts = [
  { id: 1, title: 'Yazı 1 Başlığı', shortDescription: 'Kısa bir açıklama metni...', image: 'https://via.placeholder.com/350x150' }, 
  { id: 2, title: 'Yazı 2 Başlığı', shortDescription: 'Başka bir açıklama metni...', image: 'https://via.placeholder.com/350x150' },
  { id: 3, title: 'Yazı 3 Başlığı', shortDescription: 'Daha farklı bir açıklama...', image: 'https://via.placeholder.com/350x150' },
];

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        
        <Routes >     
            <Route path="/" element={<BlogList posts={samplePosts} />} />
            <Route path="/post/:postId" element={<PostDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
