import React from "react";
import '../styles.css'; // Import the CSS file for styles
import { Link } from "react-router-dom";
const Introduction = () => {
  return (
    <>
      <div className="introduction">
        <div className="overlay">
          <div className="text">
            <h1>Your Photography Journey Begins Here</h1>
            <p>Experience the world through our lens. Capture moments, share stories, and create timeless memories.</p>
            <Link to="/gallery" className="explore-button">
            Discover More
          </Link>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial">
            <p>"This service has transformed the way I capture and share my moments. Highly recommended!"</p>
            <span>- Alex J.</span>
          </div>
          <div className="testimonial">
            <p>"Amazing features and exceptional support. The subscription is worth every penny!"</p>
            <span>- Jamie L.</span>
          </div>
        </div>
      </div>

      {/* Membership Section */}
      <div className="membership">
        <h2>Join Our Exclusive Membership</h2>
        <p>Unlock a world of premium features, exclusive content, and special offers with our membership plans.</p>
        <div className="membership-grid">
          <div className="membership-option">
            <h3>Essential Membership</h3>
            <p>Access to premium features and early content releases.</p>
            <p>$14.99/month</p>
            <button className="join-button">Join Now</button>
          </div>
          <div className="membership-option">
            <h3>Elite Membership</h3>
            <p>All Essential benefits plus personalized support, exclusive webinars, and more.</p>
            <p>$29.99/month</p>
            <button className="join-button">Join Now</button>
          </div>
        </div>
      </div>

      
   

      {/* New Blog Section */}
      <div className="blog">
        <h2>Latest Blog Posts</h2>
        <div className="blog-post">
          <h3>5 Tips for Capturing the Perfect Portrait</h3>
          <p>Learn how to take stunning portraits with these expert tips.</p>
          <Link to="/blog/tips-for-portrait" className="read-more">
            Read More
          </Link>
        </div>
        <div className="blog-post">
          <h3>Behind the Scenes of Our Latest Shoot</h3>
          <p>Get a glimpse of the work that goes into creating our best shots.</p>
          <Link to="/blog/behind-the-scenes" className="read-more">
            Read More
          </Link>
        </div>
      </div>

      
   
      {/* New FAQ Section */}
      <div className="faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>What kind of photography services do you offer?</h3>
          <p>We specialize in portrait, wedding, and event photography. Contact us for a custom package.</p>
        </div>
        <div className="faq-item">
          <h3>How can I book a session?</h3>
          <p>You can easily book a session through our contact form or by calling us directly.</p>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <h2>Contact Us</h2>
          <p>Email: contact@photography.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Photography St, Photo City, PC 45678</p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Introduction;
