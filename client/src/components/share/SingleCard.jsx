import React from "react";
import { Link } from "react-router";

const SingleCard = ({ _id, name, image, description }) => {
  return (
    <React.Fragment>
      <section>
        <Link
          to={`/products/${_id}`}
          className="card bg-base-100 lg:w-99 md:w-96 shadow-sm"
        >
          <div className="card-body">
            <h2 className="card-title">{name?.slice(0, 20)}</h2>
            <p>{description}</p>
          </div>
          <figure>
            <img src={image} alt={name} />
          </figure>
        </Link>
      </section>
    </React.Fragment>
  );
};

export default SingleCard;
