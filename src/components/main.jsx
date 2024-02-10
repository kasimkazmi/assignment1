import React from "react";
import Image from "../assets/Images/banner.png";
const Home = () => {
  return (
    <>
      <div className=" border-1 pb-2">
        <div className="card bg-dark text-white border-0 mx-2">
          <img
            className="card-img img-fluid"
            src={Image}
            alt="Card"
            // height={100}
          />
          <div className="card-img-overlay border-bottomd-flex border ">
            <div className="container  badge  d-lg-inline">
              <h5 className="card-title fs-1  fw-lighter">
                New Season Arrivals
              </h5>
               </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
