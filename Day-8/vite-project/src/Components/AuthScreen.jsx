import React, { useState } from "react";
import "../styles/AuthScreen.css";
import { useNavigate } from "react-router-dom";
export default function AuthScreen() {
  const [isLogin, setLogin] = useState(false);
  const navigate = useNavigate()
  return (
    <div>
      <section className="auth-screen-container">
        <div className="auth-screen-selector-container">
          <div className="auth-screen-selector-element">
            <button onClick={() => setLogin(true)}>LOGIN</button>
          </div>
          <div className="auth-screen-selector-line"></div>
          <div className="auth-screen-selector-element">
            <button onClick={() => setLogin(false)}>SIGNUP</button>
          </div>
        </div>
        {isLogin ? (
          <form className="auth-screen-component">
            <div className="auth-screen-heading">LOGIN</div>
            <div className="auth-screen-component-element">
                <input type="text" placeholder="UserName" required></input>
            </div>
            <div className="auth-screen-component-element">
                <input type="text" placeholder="Password" required></input>
            </div>
            <div className="auth-screen-component-element">
                <button type="submit" onClick={() => {navigate("/")}}>LOGIN</button>
            </div>
          </form>
        ) : (
            <form className="auth-screen-component">
            <div className="auth-screen-heading">SIGNUP</div>
            <div className="auth-screen-component-element">
                <input type="text" placeholder="UserName" required></input>
            </div>
            <div className="auth-screen-component-element">
                <input type="email" placeholder="email" required></input>
            </div>
            <div className="auth-screen-component-element">
                <input type="text" placeholder="Password" required></input>
            </div>
            <div className="auth-screen-component-element">
                <button type="submit" onClick={() => setLogin(true)}>SIGNUP</button>
            </div>
          </form>
        )}
      </section>
    </div>
  );
}
