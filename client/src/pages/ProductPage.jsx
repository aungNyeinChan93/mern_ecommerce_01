import React from "react";
import ProductList from "../features/product/components/ProdutLists";
import Jumbotron from "../components/share/Jumbotron";
import { assets } from "../assets/assets";

const ProductPage = () => {
  return (
    <React.Fragment>
      <section>
        <Jumbotron title={"All Products"} image={assets.hero_img} />
        <ProductList />
      </section>
    </React.Fragment>
  );
};

export default ProductPage;
