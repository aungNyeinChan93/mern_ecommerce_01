import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import Jumbotron from "../../../components/share/Jumbotron";
import { assets } from "../../../assets/assets";

const LatestProducts = () => {
  const { products } = useSelector((store) => store.products);
  const [latestProducts] = useState(() => {
    return products ? [...products].reverse().slice(0, 5) : [];
  });
  return (
    <React.Fragment>
      <section>
        <div className="p-2 bg-green-400/98 rounded">
          <Jumbotron title={"Latest Products"} image={assets.about_img} />
          {latestProducts && latestProducts.length > 0 && (
            <ul className=" grid grid-cols-1 md:grid-cols-5 gap-3 ">
              {latestProducts.map((product, idx) => (
                <ProductCard key={idx} {...product} />
              ))}
            </ul>
          )}
        </div>
      </section>
    </React.Fragment>
  );
};

export default LatestProducts;
