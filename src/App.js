import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ChartLordBlogList from './components/ChartLordBlogList';
import BlogPost from './components/BlogPost';
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<ChartLordBlogList />} />
            <Route path="/post/:postId" element={<BlogPost />} />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
