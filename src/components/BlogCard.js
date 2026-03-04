// BlogCard.js - Updated to link to full article, not affiliate

import React from 'react';
import { Link } from 'react-router-dom';
import './BlogCard.css';

const BlogCard = ({ post }) => {
  return (
    <Link to={`/post/${post.id}`} className="blog-card-link">
      <article className="blog-card">
        {/* Featured Image */}
        <div className="blog-image-wrapper">
          <div className="blog-image-placeholder">
            {post.imageEmoji}
          </div>
        </div>
        
        <div className="blog-content">
          {/* Category/Tag */}
          {post.category && (
            <span className="blog-category">{post.category}</span>
          )}
          
          {/* Blog Title */}
          <h3 className="blog-title">{post.title}</h3>
          
          {/* Short Excerpt */}
          <p className="blog-excerpt">{post.excerpt}</p>
          
          {/* Author and Date */}
          <div className="blog-meta">
            <span className="blog-author">By {post.author}</span>
            <span className="blog-date">{post.date}</span>
          </div>
          
          {/* Read More indicator */}
          <div className="blog-read-more">
            Read Full Article →
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
