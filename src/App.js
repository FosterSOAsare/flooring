import React from "react";
import "./styles/output.css";
import "./styles/all.css";
import Header from "./components/Header";
import Hero from "./components/Homepage/Hero";
import Services from "./components/Homepage/Services";
import About from "./components/Homepage/About";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <About />
    </>
  );
}

export default App;
