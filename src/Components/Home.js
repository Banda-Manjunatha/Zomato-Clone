import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import { Link, useNavigate } from "react-router-dom";
import appstore from "../assets/applestore.webp";
import playstore from "../assets/googleplay.webp";
import location from "../assets/location.png";
import mobile from "../assets/mobile.png";
import Footer from "../Components/common/Footer";
import { signOut } from "firebase/auth";
import { database } from "./Firebase";

const Home = () => {
  const navigate = useNavigate();
  const [contactType, setContactType] = useState("email");

  const handleRadioChange = (event) => {
    setContactType(event.target.value);
  };
  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);
  }, []);
  const signoutClick = () => {
    signOut(database).then((value) => {
      console.log(value);
      navigate("/");
    });
  };
  return (
    <>
      <div className="home-section">
        <div className="hero-section">
          <div className="nav-section">
            <div className="navbar">
              <ul>
                <li className="app">
                  <Link to="/mobile">
                    <div className="appdiv">
                      <img src={mobile} alt="" />
                      <p>Get the App</p>
                    </div>
                  </Link>
                </li>

                <li>Investor Relations</li>
                <Link to="/partner-with-us">
                  <li>Add Restaurent</li>
                </Link>
                <li onClick={signoutClick} className="signout">
                  Sign Out
                </li>
              </ul>
            </div>
          </div>
          <div className="heading-section">
            <div className="logo"></div>
            <div className="caption">
              <p>Discover the best food & drinks in Ananthapur</p>
            </div>
            <div className="search-container">
              <img src={location} alt="image" />
              <select className="search-select">
                <option value="town">Ananthapur</option>
              </select>
              <input
                type="text"
                placeholder="Search for restaurent, cuisine or a dish"
                className="search-input"
              />
            </div>
          </div>
        </div>
        <div className="homecard-container">
          <Link to="/anantapur">
            <div className="homecard">
              <div className="homecard-image-1"></div>
              <div className="homecard-content">
                <p className="homecard-heading">Order Online</p>
                <p className="homecard-text">
                  Stay home and Order to your doorstep
                </p>
              </div>
            </div>
          </Link>
          <Link to={`/order?section=dining`}>
            <div className="homecard">
              <div className="homecard-image-2"></div>
              <div className="homecard-content">
                <p className="homecard-heading">Dining</p>
                <p className="homecard-text">
                  View the city's favorite dining venues
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="city-coontainer">
          <div className="city-heading">
            <p>
              Popular Restaurents in and around <span>Ananthapur</span>
            </p>
          </div>
          <div className="city-selection">
            <Link to="/anantapur">
              <div class="city-select atp">
                <p>Ananthapur Locality</p>
                <p className="number">493 places</p>
                <i class="fas fa-chevron-right"></i>
              </div>
            </Link>
          </div>
        </div>
        <div className="mobileapp-container">
          <div className="mobileapp-data">
            <div className="mobileapp">
              <div className="mobile-pic">
                <div className="zomato-app-pic"></div>
              </div>
            </div>
            <div className="app-info">
              <section className="app-heading">
                <h2>Get the Zomato app</h2>
                <p className="info-p">
                  We will send you a link, open it on your phone to download the
                  app
                </p>
              </section>
              <section className="contact">
                <label>
                  <input
                    type="radio"
                    name="contactType"
                    value="email"
                    checked={contactType === "email"}
                    onChange={handleRadioChange}
                  />
                  Email
                </label>
                <label>
                  <input
                    type="radio"
                    name="contactType"
                    value="number"
                    checked={contactType === "number"}
                    onChange={handleRadioChange}
                  />
                  Number
                </label>
                {contactType === "email" && (
                  <div className="contact-email">
                    <input type="email" placeholder="Enter email" />
                    <button>Share App Link</button>
                  </div>
                )}

                {contactType === "number" && (
                  <div className="contact-number">
                    <div className="contact-box">
                      <select>
                        <option value="+91">+91</option>
                        <option value="+81">+81</option>
                        <option value="+51">+51</option>
                      </select>
                      <input type="text" placeholder="Enter Number" />
                    </div>
                    <button>Share App Link</button>
                  </div>
                )}
              </section>

              <div className="store">
                <p className="store-heading">Download app from</p>
                <div className="store-images">
                  <div className="appstore image">
                    <img src={playstore} alt="playstore" />
                  </div>
                  <div className="playstore image">
                    <img src={appstore} alt="Appstore" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="explore-container">
          <div className="explore-text">
            <h4>Explore options near me</h4>
            <p>Popular cuisines snear me</p>
            <p>Popular restaurent types near me</p>
            <p>Cities We Deliver To</p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
