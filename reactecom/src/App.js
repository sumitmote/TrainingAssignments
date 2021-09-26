//import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { SignUp } from "./Components/SignUp";
import { Login } from "./Components/Login";
import { AddProducts } from "./Components/AddProducts";
import { NotFound } from "./Components/NotFound";
import { Cart } from "./Components/Cart";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/add-products" component={AddProducts} />
        <Route path="/cart" component={Cart} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
