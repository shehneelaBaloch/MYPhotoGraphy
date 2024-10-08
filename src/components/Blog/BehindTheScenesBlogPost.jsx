
import "./Blog.css"; // Import the CSS file for styles

const BehindTheScenesBlogPost = () => {
  return (
    <div className="blog-container">
      <article className="blog-post-full">
        <header>
          <h1>Behind the Scenes of Our Latest Shoot</h1>
          <p className="blog-date">Published on: October 6, 2024</p>
          <p className="blog-author">By: Jane Doe</p>
        </header>

        <img
          className="blog-post-image"
          src="behind-the-scenes.jpg"
          alt="Behind the Scenes of Our Latest Shoot"
        />

        <section className="blog-content">
          <h2>The Planning Stage</h2>
          <p>
            Every great photoshoot starts with careful planning. For this shoot,
            we spent hours scouting the perfect location, working with our
            clients to determine the best lighting and angles.
          </p>

          <h2>The Day of the Shoot</h2>
          <p>
            On the day of the shoot, our team arrived early to set up the
            equipment and ensure everything was ready. It was a long day, but
            seeing the results made it all worthwhile.
          </p>

          <h2>Post-Processing Magic</h2>
          <p>
            After the shoot, the work wasn't over. Our post-production team
            spent hours editing the photos to ensure they met the high standards
            we set for ourselves.
          </p>

          <h2>The Final Product</h2>
          <p>
            We couldn't be happier with how the shoot turned out. The photos
            were stunning, and our clients were thrilled with the results.
          </p>
        </section>

        <footer className="blog-footer">
          <p>If you enjoyed this behind-the-scenes look, share this post!</p>
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

export default BehindTheScenesBlogPost;
