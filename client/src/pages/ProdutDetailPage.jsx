import React, { useState } from "react";
import ProductCard from "../features/product/components/ProductCard";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import PorductDetailCard from "../features/product/components/ProductDetailCard";

const ProductDetailPage = () => {
  const { products } = useSelector((store) => store.products);
  const { product_id } = useParams();
  const [product] = useState(() => {
    return products ? products?.find((p) => p._id == product_id) : {};
  });

  return (
    <React.Fragment>
      <section>
        {product && Object.keys(product) && <PorductDetailCard {...product} />}
      </section>
    </React.Fragment>
  );
};

export default ProductDetailPage;
