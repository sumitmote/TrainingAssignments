import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth, fs } from "../Util/Util";
import { useHistory } from "react-router-dom";

export const SignUp = () => {
  const history = useHistory();

  const [fullName, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log(fullName, email, password);
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((credentials) => {
        console.log(credentials);
        fs.collection("users")
          .doc(credentials.user.uid)
          .set({
            FullName: fullName,
            Email: email,
            Password: password,
          })
          .then(() => {
            setSuccessMsg("Registration Successfully Done,Happy Loggin in.");
            setFullname("");
            setEmail("");
            setPassword("");
            setErrorMsg("");
            setTimeout(() => {
              setSuccessMsg("");
              history.push("/login");
            }, 4000);
          })
          .catch((error) => {
            setErrorMsg(error.message);
          });
      })
      .catch((error) => {
        setErrorMsg(error.message);
      });
  };

  return (
    <div className="container">
      <br></br>
      <h1>SignUp</h1>
      <hr></hr>

      {successMsg && (
        <React.Fragment>
          <div className="success-msg">{successMsg}</div>
          <br></br>
        </React.Fragment>
      )}
      <form className="form-group" autoComplete="off" onSubmit={handleSignUp}>
        <label>Full Name</label>
        <input
          type="text"
          className="form-control"
          required
          onChange={(e) => setFullname(e.target.value)}
          value={fullName}
        ></input>
        <br></br>
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
            Already Registered then login
            <Link to="login">Here</Link>
            <button type="submit" className="btn btn-success btn-md">
              SignUp
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
