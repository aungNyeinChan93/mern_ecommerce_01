import React from "react";
import { Link } from "react-router";

const PorductDetailCard = ({ name, description, image }) => {
  return (
    <React.Fragment>
      <div className="hero bg-base-200 min-h-screen lg:px-[100px]">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{name}</h1>
            <p className="py-6">{description}</p>
            <Link to={"/products"} className="btn-sm btn-link ">
              Back
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PorductDetailCard;
