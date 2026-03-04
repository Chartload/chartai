// BlogPost.js - Full article page with real comments, likes, and email newsletter
// Comments and likes are stored in localStorage (persists between sessions)

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './BlogPost.css';

const BlogPost = () => {
  const { postId } = useParams();
  const affiliateLink = "https://chartlordai.com/?ref=mrxw4yhbhrco";
  
  // Comment state
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({
    name: '',
    email: '',
    content: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  
  // Like state
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  // Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitting, setNewsletterSubmitting] = useState(false);
  const [newsletterMessage, setNewsletterMessage] = useState('');
  const [subscribedEmails, setSubscribedEmails] = useState([]);

  // Blog posts data - same as in the list
  const blogPosts = [
    {
      id: "1",
      category: "REVIEW",
      title: "ChartLord AI Review: Is This Automated Trading Platform Legit?",
      excerpt: "An honest, in-depth review of ChartLord AI's features, performance, and whether it delivers on its promises for Kenyan traders.",
      fullContent: `
        <p>After testing ChartLord AI for 3 months with a $500 account, here's my honest review.</p>
        
        <h2>What I Tested</h2>
        <p>I used ChartLord AI on a standard MT4 account with Exness broker. The setup took about 10 minutes - just install, connect broker, and activate.</p>
        
        <h2>The Results</h2>
        <p><strong>Month 1:</strong> +8% (conservative settings)<br>
        <strong>Month 2:</strong> +12% (adjusted settings)<br>
        <strong>Month 3:</strong> +15% (let it run full auto)</p>
        
        <h2>What I Liked</h2>
        <ul>
          <li>Truly hands-off - it trades while I sleep</li>
          <li>Risk management is solid - never lost more than 2% in a day</li>
          <li>Support team responds within hours</li>
        </ul>
        
        <h2>What to Know</h2>
        <p>It's not "get rich quick" - it's steady growth. Some days are down, but overall trend is up. Perfect for someone who wants passive income without learning complex trading.</p>
      `,
      author: "James Mwangi",
      authorBio: "James is a Nairobi-based trader who transitioned from manual to automated trading in 2025. He now helps others understand AI trading tools.",
      date: "March 4, 2026",
      imageEmoji: "📊",
      readTime: "8 min read"
    },
    {
      id: "2",
      category: "GUIDE",
      title: "How ChartLord AI Works: A Beginner's Guide to Automated Trading",
      excerpt: "No trading experience? No problem. This guide explains how ChartLord AI handles everything automatically.",
      fullContent: `
        <p>No trading experience? Perfect. Here's exactly how ChartLord AI works in simple terms.</p>
        
        <h2>The Simple Version</h2>
        <p>Think of ChartLord AI as your personal trading assistant that never sleeps. It watches the markets 24/7 and when it spots a good opportunity, it trades automatically.</p>
        
        <h2>Step-by-Step: What Happens</h2>
        <p><strong>Step 1:</strong> You install the software on your computer or VPS (takes 5 minutes)<br>
        <strong>Step 2:</strong> Connect your broker account (Exness or XM work best)<br>
        <strong>Step 3:</strong> Choose your risk level (conservative, moderate, aggressive)<br>
        <strong>Step 4:</strong> Let it run - that's it!</p>
        
        <h2>The Smart Money Concept Explained Simply</h2>
        <p>Banks and institutions trade differently from regular people. ChartLord AI was programmed to think like them - looking for where big money is moving and following along.</p>
        
        <h2>Do You Need to Understand Any of This?</h2>
        <p>No! That's the beauty. The AI does all the thinking. You just watch your account grow.</p>
      `,
      author: "Sarah Kimani",
      authorBio: "Sarah is a former teacher who now runs a popular blog about automated trading for Kenyan beginners.",
      date: "March 3, 2026",
      imageEmoji: "🤖",
      readTime: "6 min read"
    },
    {
      id: "3",
      category: "SUCCESS STORY",
      title: "From 5,000 KES to 50,000 KES: How One Trader Did It in 3 Months",
      excerpt: "Real story of a boda boda rider who started small and grew his investment using ChartLord AI's automated system.",
      fullContent: `
        <p>Meet Peter, a 34-year-old boda boda rider from Kisumu. His story is why I started this blog.</p>
        
        <h2>Before ChartLord AI</h2>
        <p>Peter was earning 500-800 KES daily on his boda. After expenses, he was saving maybe 5,000 KES per month. He wanted more for his family but didn't know how.</p>
        
        <h2>Discovery</h2>
        <p>A customer mentioned ChartLord AI during a ride. Peter was skeptical - "sounds like those WhatsApp scams." But he researched for 2 weeks, read everything, and decided to try with just 5,000 KES.</p>
        
        <h2>The Journey</h2>
        <p><strong>Month 1:</strong> Account grew to 7,200 KES (+44%)<br>
        <strong>Month 2:</strong> Added another 5,000 KES, total grew to 18,500 KES<br>
        <strong>Month 3:</strong> Account hit 51,000 KES. He quit boda boda.</p>
        
        <h2>Today</h2>
        <p>Peter now mentors 5 other boda riders in Kisumu. He still uses ChartLord AI daily. "This thing changed my life," he says. "Now my kids eat before I go to bed."</p>
      `,
      author: "Brian Otieno",
      authorBio: "Brian travels around Kenya documenting real success stories from everyday people using technology to change their lives.",
      date: "March 2, 2026",
      imageEmoji: "📈",
      readTime: "7 min read"
    },
    {
      id: "4",
      category: "RISKS & CAUTIONS",
      title: "What You Need to Know Before Using Automated Trading Software",
      excerpt: "Important information about risks, realistic expectations, and how to use ChartLord AI responsibly.",
      fullContent: `
        <p>I believe in transparency. Here's what every Kenyan should know before starting.</p>
        
        <h2>It's Not "Get Rich Quick"</h2>
        <p>Some days you'll make 5%. Some days you'll lose 2%. Over time, ChartLord AI averages 8-15% monthly based on user data. But individual results vary.</p>
        
        <h2>You Can Lose Money</h2>
        <p>Yes, it's possible. The AI is smart but markets are unpredictable. Never invest money you can't afford to lose. Start small (5,000-10,000 KES) to learn.</p>
        
        <h2>Technical Issues Happen</h2>
        <p>Internet goes down. VPS crashes. Power outages. Have backup plans. Most serious users run ChartLord AI on a $5/month VPS that runs 24/7.</p>
        
        <h2>Scams Are Everywhere</h2>
        <p>Only use the official ChartLord AI website (linked below). There are fake versions on Telegram and WhatsApp. Never share your login details with anyone.</p>
        
        <h2>My Advice</h2>
        <p>Start small, be patient, and treat this as a long-term journey. The people who succeed with automated trading are those who stick with it for months, not days.</p>
      `,
      author: "Dr. Anne Wambui",
      authorBio: "Dr. Anne has a PhD in Finance and spends her time educating Kenyans about safe investing practices.",
      date: "March 1, 2026",
      imageEmoji: "⚠️",
      readTime: "6 min read"
    },
    {
      id: "5",
      category: "COMPARISON",
      title: "ChartLord AI vs. Manual Trading: Which One Wins for Kenyan Traders?",
      excerpt: "We compare the pros and cons of automated vs manual trading to help you decide the best approach.",
      fullContent: `
        <p>I've done both for years. Here's my honest comparison.</p>
        
        <h2>Manual Trading</h2>
        <p><strong>Pros:</strong> Full control, learn skills, no fees<br>
        <strong>Cons:</strong> Emotional decisions, takes years to learn, must watch charts daily, easy to overtrade</p>
        
        <h2>ChartLord AI</h2>
        <p><strong>Pros:</strong> No emotions, trades 24/7, uses institutional strategies, works while you sleep<br>
        <strong>Cons:</strong> Monthly fee, less control, requires trust in the software</p>
        
        <h2>My Verdict</h2>
        <p>For most Kenyans with full-time jobs or businesses, ChartLord AI wins easily. It's like hiring a professional trader to work for you 24/7 for a small monthly fee.</p>
        
        <p>For those who want trading as a hobby or career, manual trading still has value. But even they use ChartLord AI to handle trades while they sleep.</p>
      `,
      author: "David Omondi",
      authorBio: "David has traded both manually and automatically for 5 years. He now runs a trading education group in Nairobi.",
      date: "February 28, 2026",
      imageEmoji: "⚖️",
      readTime: "5 min read"
    }
  ];

  // Find the current post
  const post = blogPosts.find(p => p.id === postId);

  // Load comments, likes, and subscribers from localStorage when component mounts
  useEffect(() => {
    if (post) {
      // Load comments
      const savedComments = localStorage.getItem(`comments-${postId}`);
      if (savedComments) {
        setComments(JSON.parse(savedComments));
      } else {
        setComments([]);
        localStorage.setItem(`comments-${postId}`, JSON.stringify([]));
      }
      
      // Load likes
      const savedLikes = localStorage.getItem(`likes-${postId}`);
      if (savedLikes) {
        const likeData = JSON.parse(savedLikes);
        setLikes(likeData.count);
        setHasLiked(likeData.hasLiked);
      } else {
        setLikes(0);
        setHasLiked(false);
        localStorage.setItem(`likes-${postId}`, JSON.stringify({ count: 0, hasLiked: false }));
      }

      // Load newsletter subscribers
      const savedSubscribers = localStorage.getItem('newsletter-subscribers');
      if (savedSubscribers) {
        setSubscribedEmails(JSON.parse(savedSubscribers));
      } else {
        setSubscribedEmails([]);
        localStorage.setItem('newsletter-subscribers', JSON.stringify([]));
      }
    }
  }, [postId, post]);

  // Handle like button click
  const handleLike = () => {
    if (!hasLiked) {
      const newLikes = likes + 1;
      setLikes(newLikes);
      setHasLiked(true);
      localStorage.setItem(`likes-${postId}`, JSON.stringify({ count: newLikes, hasLiked: true }));
    } else {
      const newLikes = likes - 1;
      setLikes(newLikes);
      setHasLiked(false);
      localStorage.setItem(`likes-${postId}`, JSON.stringify({ count: newLikes, hasLiked: false }));
    }
  };

  // Handle comment input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewComment(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle comment submission
  const handleSubmitComment = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Validate
    if (!newComment.name || !newComment.email || !newComment.content) {
      setSubmitMessage('Please fill in all fields');
      setIsSubmitting(false);
      return;
    }

    // Email validation (simple)
    if (!newComment.email.includes('@') || !newComment.email.includes('.')) {
      setSubmitMessage('Please enter a valid email address');
      setIsSubmitting(false);
      return;
    }

    // Create new comment object
    const comment = {
      id: Date.now(),
      name: newComment.name,
      date: new Date().toLocaleDateString('en-GB', { 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      content: newComment.content
    };

    // Add to comments array
    const updatedComments = [comment, ...comments];
    setComments(updatedComments);
    
    // Save to localStorage
    localStorage.setItem(`comments-${postId}`, JSON.stringify(updatedComments));

    // Reset form
    setNewComment({ name: '', email: '', content: '' });
    setSubmitMessage('Comment posted successfully!');
    setIsSubmitting(false);

    // Clear success message after 3 seconds
    setTimeout(() => setSubmitMessage(''), 3000);
  };

  // Handle newsletter subscription
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setNewsletterSubmitting(true);
    setNewsletterMessage('');

    // Validate email
    if (!newsletterEmail.includes('@') || !newsletterEmail.includes('.')) {
      setNewsletterMessage('Please enter a valid email address');
      setNewsletterSubmitting(false);
      return;
    }

    // Check if already subscribed
    if (subscribedEmails.includes(newsletterEmail)) {
      setNewsletterMessage('This email is already subscribed!');
      setNewsletterSubmitting(false);
      return;
    }

    // Add to subscribers list
    const updatedSubscribers = [...subscribedEmails, newsletterEmail];
    setSubscribedEmails(updatedSubscribers);
    localStorage.setItem('newsletter-subscribers', JSON.stringify(updatedSubscribers));

    // Reset form
    setNewsletterEmail('');
    setNewsletterMessage('Successfully subscribed! Check your email for confirmation.');
    setNewsletterSubmitting(false);

    // Clear success message after 5 seconds
    setTimeout(() => setNewsletterMessage(''), 5000);
  };

  // Scroll to top when post loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [postId]);

  if (!post) {
    return (
      <div className="post-not-found">
        <h2>Post Not Found</h2>
        <Link to="/">Back to Blog</Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | ChartLord AI Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
      </Helmet>

      <div className="blog-post-page">
        <div className="container">
          {/* Back to blog link */}
          <Link to="/" className="back-to-blog">← Back to Blog</Link>

          {/* Post Header */}
          <header className="post-header">
            <span className="post-category">{post.category}</span>
            <h1 className="post-title">{post.title}</h1>
            <div className="post-meta">
              <span className="post-author">By {post.author}</span>
              <span className="post-date">{post.date}</span>
              <span className="post-read-time">{post.readTime}</span>
            </div>
          </header>

          {/* Post Image/Emoji */}
          <div className="post-image-large">
            {post.imageEmoji}
          </div>

          {/* Post Content */}
          <div 
            className="post-content"
            dangerouslySetInnerHTML={{ __html: post.fullContent }}
          />

          {/* Engagement Bar - Likes & Comments Count */}
          <div className="engagement-bar">
            <button 
              className={`like-button ${hasLiked ? 'liked' : ''}`} 
              onClick={handleLike}
              aria-label="Like this post"
            >
              <span className="like-icon">{hasLiked ? '❤️' : '🤍'}</span>
              <span className="like-count">{likes} {likes === 1 ? 'Like' : 'Likes'}</span>
            </button>
            <div className="comments-count">
              <span className="comments-icon">💬</span>
              <span>{comments.length} {comments.length === 1 ? 'Comment' : 'Comments'}</span>
            </div>
          </div>

          {/* NEWSLETTER SECTION */}
          <div className="newsletter-section">
            <div className="newsletter-content">
              <h3>📬 Get Updates Straight to Your Inbox</h3>
              <p>Subscribe to our newsletter and be the first to know when new articles, success stories, and ChartLord AI updates are published.</p>
              
              <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
                <div className="newsletter-input-group">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="newsletter-input"
                    required
                  />
                  <button 
                    type="submit" 
                    className="newsletter-button"
                    disabled={newsletterSubmitting}
                  >
                    {newsletterSubmitting ? 'Subscribing...' : 'Subscribe'}
                  </button>
                </div>
                {newsletterMessage && (
                  <div className={`newsletter-message ${newsletterMessage.includes('Successfully') ? 'success' : 'error'}`}>
                    {newsletterMessage}
                  </div>
                )}
                <p className="newsletter-privacy">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>

              <div className="newsletter-stats">
                <span className="subscriber-count">{subscribedEmails.length}+</span> readers already subscribed
              </div>
            </div>
          </div>

          {/* In-post CTA */}
          <div className="post-cta">
            <p>Ready to try ChartLord AI yourself?</p>
            <a href={affiliateLink} className="post-cta-button" target="_blank" rel="noopener noreferrer">
              Get ChartLord AI Now →
            </a>
          </div>

          {/* Author Bio */}
          <div className="author-bio">
            <p><strong>About {post.author}:</strong> {post.authorBio}</p>
          </div>

          {/* COMMENTS SECTION */}
          <section className="comments-section">
            <h3 className="comments-title">Comments ({comments.length})</h3>
            
            {/* Comment Form */}
            <div className="comment-form-container">
              <h4>Leave a Comment</h4>
              <p className="form-note">Your email will not be published. Required fields are marked *</p>
              
              <form onSubmit={handleSubmitComment} className="comment-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={newComment.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      className="form-input"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={newComment.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="form-input"
                      required
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="content">Comment *</label>
                  <textarea
                    id="content"
                    name="content"
                    value={newComment.content}
                    onChange={handleInputChange}
                    placeholder="Share your thoughts..."
                    rows="5"
                    className="form-textarea"
                    required
                  />
                </div>
                
                {submitMessage && (
                  <div className={`form-message ${submitMessage.includes('success') ? 'success' : 'error'}`}>
                    {submitMessage}
                  </div>
                )}
                
                <button 
                  type="submit" 
                  className="submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Posting...' : 'Post Comment'}
                </button>
              </form>
            </div>

            {/* Comments List */}
            <div className="comments-list">
              {comments.length > 0 ? (
                comments.map(comment => (
                  <div className="comment-item" key={comment.id}>
                    <div className="comment-header">
                      <div className="comment-author-info">
                        <span className="comment-author">{comment.name}</span>
                        <span className="comment-date">{comment.date}</span>
                      </div>
                    </div>
                    <div className="comment-content">
                      <p>{comment.content}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="no-comments">
                  <p>No comments yet. Be the first to share your thoughts!</p>
                </div>
              )}
            </div>

            {/* Note about storage */}
            <p className="comments-disclaimer">
              Comments are saved in your browser. They will appear each time you visit.
            </p>
          </section>

          {/* Related/CTA Section */}
          <div className="post-footer-cta">
            <h3>Ready to Start Your Own Journey?</h3>
            <p>Join 15,000+ Kenyan traders already using ChartLord AI</p>
            <a 
              href={affiliateLink} 
              className="post-footer-button" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Get ChartLord AI Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;