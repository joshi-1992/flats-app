import React from "react";
import "./Home.css";
//import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img className="home_image" src="15.jpeg" alt="" />
        <div className="home_row">
          <img className="home_row" src="2.jpeg" alt="" />
          <img className="home_row" src="4.jpeg" alt="" />
        </div>
        <div className="home_colum">
          <img className="home_row" src="1.jpeg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
