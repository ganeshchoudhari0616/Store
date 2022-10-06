import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <>
      <div className="hero">
        <div className="card bg-dark text-white border-0">
          <img
            src="./assests/bg.jpg"
            className="card-img"
            alt="background"
            
          />
          <div className="card-img-overlay d-flex justify-content-center flex-column">
            <div className="container">
              <h5 className="card-title display-3 fw-bolder mb-0">
                New Season Arrivals
              </h5>
              <p className="card-text lead fs-2">Check all trends</p>
            </div>
          </div>
        </div>
        <Products />
      </div>
    </>
  );
};

export default Home;
