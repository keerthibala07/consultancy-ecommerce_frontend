import React from "react";
import "./CSS/Contactus.css";
import backgroundImage from "../Components/Assets/ad.jpg";

const AboutUs = () => {
  return (
    <div className="about-us" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="about-content">
        <h2>About Us</h2>
        <p>Welcome to Royal Garments We're not just about fashion; we're about style, confidence, and embracing individuality. At Royal Garments, we believe that what you wear is a reflection of who you are, and we're here to help you express yourself boldly , beautifully and providing clothing for Womens and Kids.</p>
<p>
Our journey began with a simple vision: to redefine the world of garments. From chic dresses that effortlessly transition from day to night to cozy knitwear that wraps you in comfort, each piece in our collection is thoughtfully designed to inspire and empower.
</p><p>
We're passionate about quality, craftsmanship, and attention to detail. Every stitch, every fabric choice, and every silhouette is carefully curated to ensure that you not only look fabulous but feel amazing too.
</p>
<p>
But we're more than just a clothing brand. We're a community of trendsetters, trailblazers, and fashion enthusiasts. We celebrate diversity, inclusivity, and the unique stories that make us who we are.
</p>
<p>
So whether you're stepping into the boardroom, hitting the streets, or dancing the night away, do it with confidence, do it with style, do it with Royal Garments.
</p>
<p>
Join us on this journey of self-expression, exploration, and endless possibilities. Welcome to the world of Royal Garments - where fashion meets passion, and every outfit tells a story.</p>
    
{/* <div className="contact-info">
          
            <p>Email: <a href="mailto:contact@example.com">contact@example.com</a></p>
            <p>Phone: <a href="tel:1234567890">123-456-7890</a></p>
            <p>Address: 123 Main Street, City, Country</p>
          
        </div> */}
      </div>
    </div>
  );
};

export default AboutUs;
