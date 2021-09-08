import React from "react";
import "./App.css";
import Todos from "./components/Todos";

function App() {
  return (
    <div
      className="row"
      style={{
        color: "white",
        fontFamily:"Helvetica",
        backgroundColor: "black",
      }}
    >
      <div
        className="col-md-8 offset-md-2"
        style={{
          color: "white",
          backgroundColor: "black",
        }}
      >
        <Todos />
      </div>
    </div>
  );
}

export default App;
