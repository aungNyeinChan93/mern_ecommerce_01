import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { products, isLoading, error } = useSelector((store) => store.products);

  return (
    <React.Fragment>
      <section>
        {isLoading && <>Loading . . .</>}
        {error && <>{error}</>}
        {products && Array.isArray(products) && (
          <>
            <div className="flex justify-center items-center ">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {products?.map((product) => {
                  return <ProductCard key={product.id} {...product} />;
                })}
              </div>
            </div>
          </>
        )}
      </section>
    </React.Fragment>
  );
};

export default ProductList;
