// src/Pages/About.js
import React from 'react';

function About() {
  return (
    <div className="about">
      <h1>About Us</h1>
      <div className="about-content">
        <section className="bio">
          <h2>About Us</h2>
          <p>
          At Coastal Kitchens, our story begins by the sea. Inspired by the rich flavors and fresh ingredients of coastal living, we set out to create a place where the taste of the ocean meets the warmth of home. What started as a small family dream has grown into a restaurant that brings the best of the coast to our community. From the freshest seafood to vibrant, locally sourced produce, each dish tells the story of our love for great food and the beauty of coastal life. Join us at Coastal Kitchens, where every meal is an invitation to the coast.
          </p>
        </section>
        
        <section className="contact">
          <h2>Contact Us</h2>
          <p>If you have any questions or would like to place an order, feel free to reach out to us!</p>
          <form>
            <div className="form-group">
              <label htmlFor="name">Your Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message:</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </section>
      </div>

      <footer>
        <div className="socials">
          
        </div>
        <p>© 2024 Coastal Kitchens - All rights reserved.</p>
      </footer>
    </div>
  );
}

export default About;
