import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../Util/Util";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);

    if (email === "admin@gmail.com") {
      auth
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          setSuccessMsg(
            "Login successful ..You will be redirected to the HOME page.."
          );
          setEmail("");
          setPassword("");
          setErrorMsg("");
          setTimeout(() => {
            setSuccessMsg("");
            props.history.push("/add-products");
          }, 3000);
        })
        .catch((err) => setErrorMsg(err.message));
    } else {
      auth
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          setSuccessMsg(
            "Login successful ..You will be redirected to the HOME page.."
          );
          setEmail("");
          setPassword("");
          setErrorMsg("");
          setTimeout(() => {
            setSuccessMsg("");
            props.history.push("/");
          }, 3000);
        })
        .catch((err) => setErrorMsg(err.message));
    }
  };
  return (
    <div className="container">
      <br></br>
      <h1>Login</h1>
      <hr></hr>
      {successMsg && (
        <React.Fragment>
          <div className="success-msg">{successMsg}</div>
          <br></br>
        </React.Fragment>
      )}
      <form className="form-group" autoComplete="off" onSubmit={handleLogin}>
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        ></input>
        <br></br>
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        ></input>
        <br></br>
        <div className="btn-box">
          <span>
            Not yet registered then Sign up now!!
            <Link to="signup">Here</Link>
            <button type="submit" className="btn btn-success btn-md">
              Login
            </button>
          </span>
        </div>
      </form>
      {errorMsg && (
        <React.Fragment>
          <br></br>
          <div className="error-msg">{errorMsg}</div>
        </React.Fragment>
      )}
    </div>
  );
};
