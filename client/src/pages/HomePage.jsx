import React from "react";
import Hero from "../components/base/Hero";
import LatestProducts from "../features/product/components/LatestProducts";
import Divider from "../components/share/Divider";
import BestSellerProducts from "../features/product/components/BestSellerProducts";
import Jumbotron from "../components/share/Jumbotron";
import { assets } from "../assets/assets";
import Policies from "../components/base/Policies";
import NewLetter from "../components/base/NewLetter";

const HomePage = () => {
  return (
    <React.Fragment>
      <section>
        <Hero />
        <Divider text={"Let Lux Together! "} />
        <LatestProducts />
        <Divider text={"Let Lux Together! "} color="red" />
        <Jumbotron title={"Best Seller !"} image={assets.contact_img} />
        <BestSellerProducts />
        <Policies />
        <NewLetter />
      </section>
    </React.Fragment>
  );
};

export default HomePage;
