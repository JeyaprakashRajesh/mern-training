import React, { useState } from "react";
import "../styles/AuthScreen.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function AuthScreen(props) {
  const [isLogin, setLogin] = useState(false);
  const navigate = useNavigate()
  const [username , setusername] = useState("")
  const [password , setPassword] = useState("") 
  const [email , setEmail] = useState("") 

  const handlesignup = (e) => {
    try {
      axios.post("http://localhost:3001/signup" , {
          username : username,
          password : password,
          email : email
      })
      .then((res) => {
        console.log("Res" , res)
        setLogin(true)
      })
    }catch(err) {
      console.log("error sending req" , err)
    }
  }
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
            <form className="auth-screen-component" onSubmit={(e) => handlesignup(e)}>
            <div className="auth-screen-heading">SIGNUP</div>
            <div className="auth-screen-component-element">
                <input type="text" placeholder="UserName" required value={username} onChange={(e) => setusername(e.target.value)}></input>
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
