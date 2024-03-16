import React, { useState } from "react";
import { database } from "./Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "../styles/RegisterAndLogin.css";

const RegisterAndLogin = () => {
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();
  const [formValid, setFormValid] = useState(false);

  const handleInputChange = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const checkbox = document.getElementById("checkbox").checked;

    setFormValid(email && password && checkbox);
  };

  const handleSubmit = async (e, type) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (type === "signup") {
      createUserWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data);
          alert("Welcome to Zomato!");
          navigate("/home");
        })
        .catch((err) => {
          if (err.code === "auth/email-already-in-use") {
            alert("This email is already in use.");
            setLogin(true);
          } else {
            alert("Invalid Email!");
          }
        });
    } else {
      signInWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data);
          alert("Welcome to Zomato!");
          navigate("/home");
        })
        .catch((err) => {
          alert("Invalid Email!");
        });
    }
  };

  return (
    <div>
      <div className="signup-page">
        <div className="signup-box">
          <div className="heading">
            <h2>{login ? "Sign In" : "Sign Up"}</h2>
          </div>
          <form
            onSubmit={(e) => handleSubmit(e, login ? "signin" : "signup")}
            autoComplete="off"
          >
            <input
              type="email"
              placeholder="Email"
              name="email"
              id="email"
              onChange={handleInputChange}
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              name="password"
              id="password"
              onChange={handleInputChange}
            />
            <br />
            <div className="conditions">
              <input
                type="checkbox"
                id="checkbox"
                onChange={handleInputChange}
              />
                <label for="checkbox">
                  I agree to Zomato's{" "}
                  <span>Terms of Services, Privacy Policy</span> and{" "}
                  {" "}
                  <span>Content Policies</span>
                </label>
            </div>
            <button
              type="submit"
              disabled={!formValid}
              className={formValid ? "enabled" : ""}
            >
              {login ? "Sign In" : "Sign Up"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterAndLogin;
