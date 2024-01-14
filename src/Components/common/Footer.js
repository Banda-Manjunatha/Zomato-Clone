import React from "react";
import "../../styles/Footer.css";
import logo from "../../assets/logo.avif";
import flag from "../../assets/flag.png";
import linkedin from "../../assets/linkedin.png";
import insta from "../../assets/insta.png";
import twitter from "../../assets/twitter.png";
import yt from "../../assets/yt.png";
import fb from "../../assets/fb.png";
import playstore from "../../assets/googleplay.webp";
import appstore from "../../assets/applestore.webp";

export default function Footer() {
  return (
    <div>
      <div className="footer-container">
        <footer>
          <section className="head-footer">
            <img src={logo} alt="Logo" />
            <div className="empty"></div>
            <section className="lang">
              <div className="country select">
                <img src={flag} alt="" />
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
                <img src={linkedin} alt="" />
                <img src={insta} alt="" />
                <img src={twitter} alt="" />
                <img src={yt} alt="" />
                <img src={fb} alt="" />
              </div>
              <img
                src={playstore}
                alt="playstore"
                className="playstore image"
              />
              <img src={appstore} alt="Appstore" className="appstore image" />
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
