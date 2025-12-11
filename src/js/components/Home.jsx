import React from "react";
import NavBar from "./Navbar";
import Heroe from "./Heroe";
import CardsTimes from "./CardsTimes";
import Footer from "./Footer";
//Componentes

//create your first component
const Home = () => {
  return (
    <div className="bg-dark">
      <NavBar/>
      <Heroe/>
      <CardsTimes/>
      <Footer/>
    </div>
  );
};

export default Home;
