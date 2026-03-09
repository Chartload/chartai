const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

const sitemap = new SitemapStream({ hostname: 'https://chartai.vercel.app' });
const writeStream = createWriteStream('./public/sitemap.xml');

const blogPosts = ['1','2','3','4','5']; // IDs of posts

// Homepage
sitemap.write({ url: '/', changefreq: 'daily', priority: 1.0 });

// Each blog post
blogPosts.forEach(id => {
  sitemap.write({ url: `/post/${id}`, changefreq: 'weekly', priority: 0.9 });
});

sitemap.end();

streamToPromise(sitemap).then((data) => {
  writeStream.write(data.toString());
  console.log('Sitemap generated');
});