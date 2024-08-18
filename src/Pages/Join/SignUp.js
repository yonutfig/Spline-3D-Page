import React, { useState } from "react";
import { IonIcon } from "@ionic/react";
import { mailOutline, lockClosedOutline, personOutline } from "ionicons/icons";
import "./SignInPage.css";
import Navigation from "../../Components/Header";

const Join = () => {
  const [isRegisterActive, setIsRegisterActive] = useState(false);

  const toggleRegister = (e) => {
    e.preventDefault();
    setIsRegisterActive(!isRegisterActive);
  };

  return (
    <>
      <div className="navigation">
        <Navigation />
      </div>

      <div className={`wrapper ${isRegisterActive ? "active" : ""}`}>
        <img src="img.png" alt="" />
        <h2 className="text-right">Welcome</h2>
        <div className="form-wrapper login">
          <form>
            <h2>Login</h2>
            <div className="input-box">
              <span className="icon">
                <IonIcon icon={mailOutline} />
              </span>
              <input type="email" placeholder="Email" required />
            </div>
            <div className="input-box">
              <span className="icon">
                <IonIcon icon={lockClosedOutline} />
              </span>
              <input type="password" placeholder="Password" required />
            </div>
            <div className="forgot-pass">
              <a href="google.com">Forgot Password?</a>
            </div>
            <button type="submit">Login</button>
            <div className="sign-link">
              <p>
                Don't have an account?{" "}
                <button onClick={toggleRegister} className="toggle-button">
                  Register
                </button>
              </p>
            </div>
          </form>
        </div>
        <div className="form-wrapper register">
          <form>
            <h2>Registration</h2>
            <div className="input-box">
              <span className="icon">
                <IonIcon icon={personOutline} />
              </span>
              <input type="text" placeholder="Full Name" required />
            </div>
            <div className="input-box">
              <span className="icon">
                <IonIcon icon={mailOutline} />
              </span>
              <input type="email" placeholder="Email" required />
            </div>
            <div className="input-box">
              <span className="icon">
                <IonIcon icon={lockClosedOutline} />
              </span>
              <input type="password" placeholder="Password" required />
            </div>
            <button type="submit">Register</button>
            <div className="sign-link">
              <p>
                Already have an account?{" "}
                <button onClick={toggleRegister} className="toggle-button">
                  Login
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Join;
