import React from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Feature from "./components/features/Feature";
import Projects from "./components/projects/Projects";


function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
      <div className="max-w-screen-xl mx-auto px-16">
        <Navbar />
        <Banner />
        <Feature />
        <Projects />
      </div>
    </div>
  );
}

export default App;
