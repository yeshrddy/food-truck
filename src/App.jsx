import React from "react";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import About from "./components/About";
import Header from "./components/Header";
import Announcement from "./components/Announcement";
import Example2 from "./components/Carousel";

const App = () => {
  return (
    <div>
      <Announcement />
      <Header />
      <Hero />
      <About />
      <Example2 />
      <Footer />
    </div>
  );
};

export default App;
