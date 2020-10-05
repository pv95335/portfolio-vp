import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects/index";
import Contact from "./components/Contact/index";

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
        <Projects></Projects>
        {/* <Contact></Contact> */}
      </main>
    </div>
  );
}

export default App;
