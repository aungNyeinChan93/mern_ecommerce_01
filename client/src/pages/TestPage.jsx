import React, { useContext } from "react";
import { ThemeContext } from "../contexts/Theme/ThemeContext";
import ShopContext from "../contexts/shop/ShopContext";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../features/product/productSlice";
import ProductList from "../features/product/components/ProdutLists";
import LatestProducts from "../features/product/components/LatestProducts";
import BestSellerProducts from "../features/product/components/BestSellerProducts";
import TestModal from "../tests/components/TestModal";
import TestQuotes from "../tests/components/TestQuotes";

const TestPage = () => {
  const { themeState, themeDispatch } = useContext(ThemeContext);
  const { name } = useContext(ShopContext);
  const { products } = useSelector((store) => store.products);
  const dispatch = useDispatch();

  console.log(products);

  return (
    <React.Fragment>
      <section>
        <h1>
          Test Page || {themeState.theme} || {name}
        </h1>

        <button onClick={() => themeDispatch({ type: "CHANGE_THEME" })}>
          Change Theme
        </button>

        <button
          className="btn btn-sm btn-error"
          onClick={() => dispatch(addProduct({ name: "test products" }))}
        >
          Add Porduct
        </button>

        {/* <ProductList /> */}

        {/* <LatestProducts /> */}

        {/* <BestSellerProducts /> */}

        {/* <TestModal /> */}

        <TestQuotes />
      </section>
    </React.Fragment>
  );
};

export default TestPage;
