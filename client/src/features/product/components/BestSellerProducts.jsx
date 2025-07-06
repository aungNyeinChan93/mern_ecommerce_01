import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import SingleCard from "../../../components/share/SingleCard";

const BestSellerProducts = () => {
  const { products } = useSelector((store) => store.products);
  const [bestSellers] = useState(() => {
    return products
      ? products?.filter((product) => product.bestseller === true).slice(0, 5)
      : [];
  });
  console.log(products);

  return (
    <React.Fragment>
      <section>
        {bestSellers && (
          <>
            <div className="flex justify-between items-center px-10 py-4 hover:bg-pink-200">
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2">
                {bestSellers &&
                  Array.isArray(bestSellers) &&
                  bestSellers?.map((product) => {
                    return <ProductCard key={product._id} {...product} />;
                  })}
              </div>
            </div>
          </>
        )}
      </section>
    </React.Fragment>
  );
};

export default BestSellerProducts;
