import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <Navbar/>
      <Route path="/">
        <Home/>
      </Route>
      <Route path="/about">
        <About/> 
      </Route>
      <Route path="/projects">
        <Projects/>
      </Route>
      <Route path="/contact">
        <Contact/>
      </Route>
    </Router>
  );
}

export default App;
