import React from "react";
import { assets } from "../../assets/assets";
const Hero = () => {
  return (
    <React.Fragment>
      <section>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url(${assets.hero_img})`,
          }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">
                Touch With Our Service
              </h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Hero;
