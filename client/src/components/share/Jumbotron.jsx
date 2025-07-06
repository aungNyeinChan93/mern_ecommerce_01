import React from "react";
import { Link } from "react-router";

const Jumbotron = ({ title, body, image, to = "#" }) => {
  return (
    <React.Fragment>
      <div className="relative before:absolute before:w-full before:h-full before:inset-0 before:bg-black/50 before:z-10">
        <img
          src={image}
          alt="Banner Image"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="min-h-[380px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center p-6">
          <h2 className="text-white sm:text-4xl text-2xl font-semibold mb-6 ">
            {title}
          </h2>

          <p className="text-base text-center text-slate-200 leading-relaxed">
            {(body && body) ||
              ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero id
          totam cupiditate facere eius. Quaerat ab harum rerum eveniet,
          molestias debitis omnis voluptatibus deserunt, modi animi quam. Iure,
          reprehenderit blanditiis!`}
          </p>
          <Link
            to={to}
            className="px-6 py-3 mt-12 rounded-full text-white text-base tracking-wider font-medium outline-none  bg-orange-600 hover:bg-orange-700 border-2 border-orange-600 transition-all duration-300 cursor-pointer"
          >
            Getting started now
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Jumbotron;
