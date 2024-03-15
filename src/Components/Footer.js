import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <div>
      <div className="footer-container">
        <footer>
          <section className="head-footer">
            <img
              src="https://res.cloudinary.com/dmn7qksnf/image/upload/v1709400348/logo_qyvu6e.avif"
              alt="Logo"
            />
            <div className="empty"></div>
            <section className="lang">
              <div className="country select">
                <img
                  src="https://res.cloudinary.com/dmn7qksnf/image/upload/v1709400561/flag_qcxalr.png"
                  alt=""
                />
                <span>India</span>
              </div>
              <div className="select">
                <span>English</span>
              </div>
            </section>
          </section>
          <div className="about">
            <div>
              <h4>ABOUT ZOMATO</h4>
              <p>Who We Are</p>
              <p>Blog</p>
              <p>Work with us</p>
              <p>Investor Relations</p>
              <p>Report Fraud</p>
              <p>Press Kit</p>
              <p>Contact Us</p>
            </div>
            <div>
              <h4>ZOMAVERSE</h4>
              <p>Zomato</p>
              <p>Blinkit</p>
              <p>Feeding India</p>
              <p>Hyperpure</p>
              <p>Zomaland</p>
            </div>
            <div>
              <h4>FOR RESTAURENTS</h4>
              <p>Partner With Us</p>
              <p>Apps For You</p>
              <h4>FOR ENTERPRISES</h4>
              <p>Zomato For Enterprise</p>
            </div>
            <div>
              <h4>LEARN MORE</h4>
              <p>Privacy</p>
              <p>Security</p>
              <p>Terms</p>
              <p>Sitemap</p>
            </div>
            <div className="social-links">
              <h4>SOCIAL LINKS</h4>
              <div className="social-images">
                <img
                  src="https://res.cloudinary.com/dmn7qksnf/image/upload/v1709400579/twitter_qunarw.png"
                  alt=""
                />
                <img
                  src="https://res.cloudinary.com/dmn7qksnf/image/upload/v1709400621/fb_ykn1b9.png"
                  alt=""
                />
                <img
                  src="https://res.cloudinary.com/dmn7qksnf/image/upload/v1709400632/insta_sghozm.png"
                  alt=""
                />
                <img
                  src="https://res.cloudinary.com/dmn7qksnf/image/upload/v1709400640/linkedin_ppvwiz.png"
                  alt=""
                />
                <img
                  src="https://res.cloudinary.com/dmn7qksnf/image/upload/v1709400842/yt_tdeefs.png"
                  alt=""
                />
              </div>
              <img
                src="https://res.cloudinary.com/dmn7qksnf/image/upload/v1709400920/googleplay_oikvq9.webp"
                alt="playstore"
                className="playstore image"
              />
              <img
                src="https://res.cloudinary.com/dmn7qksnf/image/upload/v1709400899/applestore_bhtcff.webp"
                alt="Appstore"
                className="appstore image"
              />
            </div>
          </div>
          <hr />

          <div className="rights">
            <p>
              By continuing past this page, you agree to our Terms of Service,
              Cookie Policy, Privacy Policy and Content Policies. All trademarks
              are properties of their respective owners. 2008-2023 © Zomato™
              Ltd. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
