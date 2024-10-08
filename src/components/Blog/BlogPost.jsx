
import "./Blog.css"// Import the CSS file for styles

const BlogPost = () => {
  return (
    <div className="blog-container">
      <article className="blog-post-full">
        <header>
          <h1>5 Tips for Capturing the Perfect Portrait</h1>
          <p className="blog-date">Published on: October 6, 2024</p>
          <p className="blog-author">By: Jane Doe</p>
        </header>

        <img
          className="blog-post-image"
          src="https://thumb.ac-illust.com/24/2482d38a9c7094df0355ec72bf389844_t.jpeg"
          alt="Tips for Capturing the Perfect Portrait"
        />

        <section className="blog-content">
          <h2>1. Focus on Lighting</h2>
          <p>
            Lighting is one of the most important aspects of photography,
            especially for portraits. Make sure you have good natural light or
            use artificial lighting to highlight your subject's best features.
          </p>

          <h2>2. Engage Your Subject</h2>
          <p>
            The key to capturing a great portrait is to make your subject feel
            comfortable. Engage with them, create rapport, and make them laugh
            if possible.
          </p>

          <h2>3. Experiment with Composition</h2>
          <p>
            Don't be afraid to try unconventional angles or compositions. Play
            around with the rule of thirds, or even break the rules entirely to
            capture something unique.
          </p>

          <h2>4. Use the Right Equipment</h2>
          <p>
            While you can take great portraits with almost any camera, using a
            good quality lens, especially with a shallow depth of field, can
            make a significant difference.
          </p>

          <h2>5. Post-Processing is Key</h2>
          <p>
            Editing your photos helps bring out the best in them. Focus on
            enhancing the natural colors, adjusting exposure, and removing any
            distractions from the background.
          </p>
        </section>

        <footer className="blog-footer">
          <p>If you enjoyed these tips, share this post with your friends!</p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default BlogPost;
