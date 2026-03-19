// ChartLordBlogList.js - Main blog listing page
// Edit the blogPosts array below to add, remove, or modify blog posts
// Replace placeholder images with actual image URLs when available

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import BlogCard from './BlogCard';
import './ChartLordBlogList.css';

const ChartLordBlogList = () => {
  // Affiliate link - Update this if the referral code changes
  const affiliateLink = "https://chartlordai.com/?ref=mrxw4yhbhrco";

  // Blog posts data array - Edit this to add/remove posts
  // Each post object contains all the information for a blog card
  const blogPosts = [
    {
      id: 1,
      category: "REVIEW",
      title: "ChartLord AI Review: Is This Automated Trading Platform Legit?",
      excerpt: "An honest, in-depth review of ChartLord AI's features, performance, and whether it delivers on its promises for Kenyan traders.",
      author: "James Mwangi",
      date: "March 4, 2026",
      imageEmoji: "📊",
      // When adding real images, replace imageEmoji with: imageUrl: "/images/review.jpg"
    },
    {
      id: 2,
      category: "GUIDE",
      title: "How ChartLord AI Works: A Beginner's Guide to Automated Trading",
      excerpt: "No trading experience? No problem. This guide explains how ChartLord AI handles everything automatically.",
      author: "Sarah Kimani",
      date: "March 3, 2026",
      imageEmoji: "🤖",
    },
    {
      id: 3,
      category: "SUCCESS STORY",
      title: "From 5,000 KES to 50,000 KES: How One Trader Did It in 3 Months",
      excerpt: "Real story of a Nairobi teacher who started small and grew her investment using ChartLord AI's automated system.",
      author: "Brian Otieno",
      date: "March 2, 2026",
      imageEmoji: "📈",
    },
    {
      id: 4,
      category: "RISKS & CAUTIONS",
      title: "What You Need to Know Before Using Automated Trading Software",
      excerpt: "Important information about risks, realistic expectations, and how to use ChartLord AI responsibly.",
      author: "Dr. Anne Wambui",
      date: "March 1, 2026",
      imageEmoji: "⚠️",
    },
    {
      id: 5,
      category: "COMPARISON",
      title: "ChartLord AI vs. Manual Trading: Which One Wins for Kenyan Traders?",
      excerpt: "We compare the pros and cons of automated vs manual trading to help you decide the best approach.",
      author: "David Omondi",
      date: "February 28, 2026",
      imageEmoji: "⚖️",
    },
    {
      id: 6,
      category: "INTERVIEW",
      title: "10 Kenyan Traders Share Their ChartLord AI Experience",
      excerpt: "Real users from Nairobi, Mombasa, Kisumu, and Eldoret share honest feedback about their results.",
      author: "Lucy Njeri",
      date: "February 27, 2026",
      imageEmoji: "🗣️",
    },
    {
      id: 7,
      category: "TECHNOLOGY",
      title: "Understanding Smart Money Concepts: The Tech Behind ChartLord AI",
      excerpt: "A simple explanation of the institutional-grade technology powering ChartLord AI's trading decisions.",
      author: "Michael Otieno",
      date: "February 26, 2026",
      imageEmoji: "🔧",
    },
    {
      id: 8,
      category: "BEGINNER",
      title: "Who Should Use ChartLord AI? A Guide for Kenyan Beginners",
      excerpt: "Find out if automated trading is right for your situation, goals, and risk tolerance.",
      author: "Grace Akinyi",
      date: "February 25, 2026",
      imageEmoji: "👋",
    }
  ];

  // Optional: Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* SEO Meta Tags - Edit these for each deployment */}
      <Helmet>
        <title>ChartLord AI </title>
        <meta name="description" content="Chartload AI." />
        <meta name="keywords" content="ChartLord AI" />
        <meta property="og:title" content="ChartLord AI" />
        <meta property="og:description" content="Chartload AI." />
        <meta property="og:type" content="Chartload AI" />
        <meta property="og:url" content="https://chartai.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://chartai.vercel.app/" />
      </Helmet>

      <div className="blog-page">
        {/* Header Section */}
        <header className="blog-header">
          <div className="container">
            <h1 className="blog-main-title">
              ChartLord AI <span className="title-light">Blog</span>
            </h1>
            <p className="blog-description">
              Reviews, guides, success stories, and everything you need to know about automated trading in Kenya
            </p>
            
            {/* CTA Button - Links to official site */}
            <div className="header-cta">
              <a 
                href={affiliateLink} 
                className="cta-button" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Visit Official ChartLord AI Site →
              </a>
            </div>
          </div>
        </header>

        {/* Blog Posts Grid */}
        <main className="blog-main">
          <div className="container">
            <div className="blog-grid">
              {blogPosts.map((post) => (
                <BlogCard 
                  key={post.id} 
                  post={post} 
                  affiliateLink={affiliateLink}
                />
              ))}
            </div>
          </div>
        </main>

        {/* Footer with another CTA */}
        <footer className="blog-footer">
          <div className="container">
            <div className="footer-content">
              <h3>Ready to Start Your Trading Journey?</h3>
              <p>Join thousands of Kenyan traders using ChartLord AI</p>
              <a 
                href={affiliateLink} 
                className="footer-cta" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Get ChartLord AI Now
              </a>
              <p className="footer-note">No trading experience required • 24/7 automated trading</p>
              <p className="footer-disclaimer">
                Disclaimer: Trading involves risk. Past performance does not guarantee future results. 
                This blog is for informational purposes only.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ChartLordBlogList;
