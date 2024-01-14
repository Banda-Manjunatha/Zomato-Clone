import React from "react";
import { useState } from "react";
import "../styles/Getapp.css";
import appstore from "../assets/applestore.webp";
import playstore from "../assets/googleplay.webp";
import logo from "../assets/logo.avif";
import Footer from "../Components/common/Footer.js";
import phoneapp from "../assets/Zomato-App.avif";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const GetApp = () => {
  const [contactType, setContactType] = useState("email");

  const handleRadioChange = (event) => {
    setContactType(event.target.value);
  };

  const navigate = useNavigate();
  const logoclickhandle = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="getapp-page">
        <header>
          <div className="header-container">
            <div className="header-logo">
              <img src={logo} alt="logo" onClick={logoclickhandle} />
            </div>
            <div className="header-text">
              <Link to="/login">
                <p>Log in</p>
              </Link>
              <Link to="/signup">
                <p>Sign up</p>
              </Link>
            </div>
          </div>
        </header>
        <div className="mobileapp-container">
          <div className="mobileapp-data">
            <div className="get-zomato-image">
              <img src={phoneapp} alt="" />
            </div>
            <div className="app-info">
              <section className="app-heading">
                <h2>Get the Zomato App</h2>
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

        <Footer />
      </div>
    </div>
  );
};

export default GetApp;
