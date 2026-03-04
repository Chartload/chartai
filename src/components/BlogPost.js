// BlogPost.js - Full article page for each blog post
// Users read the full story here, only buttons link to affiliate

import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './BlogPost.css';

const BlogPost = () => {
  const { postId } = useParams();
  const affiliateLink = "https://chartlordai.com/?ref=mrxw4yhbhrco";

  // Blog posts data - same as in the list
  const blogPosts = [
    {
      id: "1",
      category: "REVIEW",
      title: "ChartLord AI Review: Is This Automated Trading Platform Legit?",
      fullContent: `
        <p>After testing ChartLord AI for 3 months with a $500 account, here's my honest review.</p>
        
        <h2>What I Tested</h2>
        <p>I used ChartLord AI on a standard MT4 account with Exness broker. The setup took about 10 minutes - just install, connect broker, and activate.</p>
        
        <h2>The Results</h2>
        <p>Month 1: +8% (conservative settings)<br>
        Month 2: +12% (adjusted settings)<br>
        Month 3: +15% (let it run full auto)</p>
        
        <h2>What I Liked</h2>
        <ul>
          <li>Truly hands-off - it trades while I sleep</li>
          <li>Risk management is solid - never lost more than 2% in a day</li>
          <li>Support team responds within hours</li>
        </ul>
        
        <h2>What to Know</h2>
        <p>It's not "get rich quick" - it's steady growth. Some days are down, but overall trend is up. Perfect for someone who wants passive income without learning complex trading.</p>
        
        <div class="post-cta">
          <p>Ready to try it yourself?</p>
          <a href="${affiliateLink}" class="post-cta-button" target="_blank" rel="noopener noreferrer">Get ChartLord AI →</a>
        </div>
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
        
        <div class="post-cta">
          <p>Start your journey today →</p>
          <a href="${affiliateLink}" class="post-cta-button" target="_blank" rel="noopener noreferrer">Get ChartLord AI Now</a>
        </div>
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
        
        <div class="post-cta">
          <p>Peter started with 5,000 KES. You can too.</p>
          <a href="${affiliateLink}" class="post-cta-button" target="_blank" rel="noopener noreferrer">Join Peter and Thousands More →</a>
        </div>
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
        
        <div class="post-cta">
          <p>Ready to start responsibly?</p>
          <a href="${affiliateLink}" class="post-cta-button" target="_blank" rel="noopener noreferrer">Get Official ChartLord AI →</a>
        </div>
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
        
        <div class="post-cta">
          <p>See why 15,000+ Kenyans chose automated</p>
          <a href="${affiliateLink}" class="post-cta-button" target="_blank" rel="noopener noreferrer">Try ChartLord AI →</a>
        </div>
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
        <meta name="description" content={post.fullContent.substring(0, 160).replace(/<[^>]*>/g, '')} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.fullContent.substring(0, 160).replace(/<[^>]*>/g, '')} />
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

          {/* Author Bio */}
          <div className="author-bio">
            <p><strong>About {post.author}:</strong> {post.authorBio}</p>
          </div>

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
