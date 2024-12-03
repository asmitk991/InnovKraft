import { HeroSection } from "./components/herosection"
import React from 'react';
// import '/.styles.css';

function App() {

  return (
    <>
    <HeroSection />
<div>
  {/* Our Products */}
  <div className="products">
    <h1 className="product-heading">Our Products</h1>
  </div>
  <div className="product-display">
    {[...Array(4)].map((_, index) => (
      <div className="sales-item" key={index}>
        <img
          src="https://abhyanjana.com/wp-content/uploads/2023/03/amazon-post-1.jpg"
          alt="Item Image"
          className="item-image"
        />
        <div className="content">
          <div className="description">
            <p>
              <b>Samasti Hair Oil ‐ Natural hair oil for hair growth (100ML)</b>
            </p>
          </div>
          <div className="rating">★★★★☆</div>
          <div className="price">
            <div className="original-price">₹999</div>
            <div className="discounted-price">₹699</div>
          </div>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
    ))}
  </div>

  {/* Real People Real Stories */}
  <div className="people-heading">
    <h1 className="people-h1">Real People Real Stories</h1>
  </div>
  <div className="shorts-container">
    {[
      "_jaCdPa2JRg?si=QH9z38HCW4wTxqRJ&controls=0",
      "8GLKAtgZSs0?si=17udwFB0iudxwQXc",
      "MRHFrzVUcxM",
      "bkpx1z9I6Vs",
    ].map((videoId, index) => (
      <div className="short" key={index}>
        <iframe
          width="300"
          height="300"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={`YouTube video player ${index}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    ))}
  </div>

  {/* Crafting Care */}
  <div className="care">
    <h1>Abhyanjana: Crafting Care</h1>
  </div>
  <div className="img-stories">
    <div className="photo-abhi">
      <img
        className="photo-div"
        src="https://abhyanjana.com/wp-content/uploads/2024/05/Crafting-Care.png"
        alt="Crafting Care"
      />
    </div>
    <div className="story-abhi">
      <p className="para">
      Abhyanjana, emerged from a tradition of natural remedies, starting with a grandmother’s handcrafted hair oil made from homegrown ingredients. This recipe was perfected by a devoted mother for her son’s self-care needs. Each product of Abhyanjana is organically made and free from harmful chemicals, embodies love, tradition, and a nurturing spirit with organically sourced ingredients Abhyanjana continues its legacy of high-quality, organic hair care rooted in love, tradition, and a nurturing spirit passed down through generations.
      </p>
      <div className="story-button">
        <button className="story-btn">Know More</button>
      </div>
    </div>
  </div>

  {/* Customer Stories */}
  <div className="customer-stories">
    <h1>Our Customer Stories</h1>
  </div>
  <div className="feedback-container">
    {[
      {
        message:
          '"I tried the samasti hair oil recently and it has reduced my hairfall. Highly recommend to anyone with dry or damaged hair."',
        name: "- Keshav",
      },
      {
        message:
          '"The samasti hair oil is pretty good. I have been using it twice a week and have noticed a few improvements."',
        name: "- Ranjhan",
      },
      {
        message:
          '"The Abhyanjana Hairkit is really the best combo ever!! Absolutely buying it again."',
        name: "- Bharath",
      },
    ].map((feedback, index) => (
      <div className="feedback-card" key={index}>
        <p className="feedback-message">{feedback.message}</p>
        <p className="customer-name">{feedback.name}</p>
      </div>
    ))}
  </div>

  {/* Subscribe */}
  <div className="subscribe">
    <div className="sub-hed">
      <h1>Subscribe & Get 10% Off</h1>
      <p>Be updated on new arrivals, trends, and offers. Subscribe now!</p>
    </div>
    <div className="input-btn">
      <input type="text" placeholder="Email" />
      <button>Subscribe</button>
    </div>
  </div>

  {/* Footer */}
  <div className="footer">
    <div className="footer-logo">
      <img
        src="https://abhyanjana.com/wp-content/uploads/2023/08/abhyanjana-logo.png"
        alt="Logo"
      />
    </div>
    <ul className="footer-links">
      {[
        "Home",
        "About Us",
        "Products",
        "FAQ",
        "Contact Us",
        "Terms And Conditions",
        "Privacy Policy",
        "Return Policy",
        "Shipping & Delivery",
      ].map((link, index) => (
        <li key={index}>
          <a href={`#${link.toLowerCase().replace(/ /g, "-")}`}>{link}</a>
        </li>
      ))}
    </ul>
    <p className="footer-copyright">
      Copyright © 2024 Abhyanjana. All Rights Reserved.
    </p>
  </div>
</div>

    </>
  )
}


export default App;

