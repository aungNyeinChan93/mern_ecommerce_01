import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../features/product/components/ProductCard";
import CollectionCard from "./CollectionCard";

const Collections = () => {
  const [showFilter, setShowFilter] = useState(true);
  const { products } = useSelector((store) => store.products);

  const [filterPorducts, setFilterProducts] = useState([]);

  const [categoryList, setCategoryList] = useState([]);
  const [subCategoryList, setSubCategory] = useState([]);

  const [sortType, setSortType] = useState();

  const [search, setSearch] = useState("");

  const fiterCategory = (e) => {
    if (categoryList.includes(e.target.value)) {
      setCategoryList((pre) => pre.filter((p) => p !== e.target.value));
    } else {
      setCategoryList((pre) => [...pre, e.target.value]);
    }
  };

  const filterSubCategory = (e) => {
    if (subCategoryList.includes(e.target.value)) {
      setSubCategory((pre) => pre.filter((p) => p !== e.target.value));
    } else {
      setSubCategory((pre) => [...pre, e.target.value]);
    }
  };

  // filter case
  const applyFilter = () => {
    let productsCopy = products && [...products];
    if (search.length > 0) {
      productsCopy = productsCopy.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (categoryList.length > 0) {
      productsCopy = productsCopy.filter((p) =>
        categoryList.includes(p.category)
      );
    }
    if (subCategoryList.length > 0) {
      productsCopy = productsCopy.filter((p) =>
        subCategoryList.includes(p.subCategory)
      );
    }

    setFilterProducts(productsCopy);
  };

  // sort case
  const sorting = () => {
    let sortProducts = [...products];
    switch (sortType) {
      case "DESC":
        setFilterProducts(sortProducts.sort((a, b) => b.price - a.price));
        break;

      case "ASC":
        setFilterProducts(sortProducts.sort((a, b) => a.price - b.price));
        break;

      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [categoryList, subCategoryList, search]);

  useEffect(() => {
    sorting();
  }, [sortType]);

  return (
    <React.Fragment>
      <section>
        <div className="flex flex-col md:flex-row">
          {/* Left Side */}
          <div className="w-full max-w-[300px] shrink-0 shadow-md px-6 sm:px-8 min-h-screen py-6 mx-auto">
            <div className="flex items-center border-b border-gray-300 pb-2 mb-6">
              <h3 className="text-slate-900 text-lg font-semibold">Filter</h3>
              <button
                type="button"
                className="text-sm text-red-500 font-semibold ml-auto cursor-pointer"
              >
                Clear all
              </button>
            </div>

            <div>
              {/* Search Section */}
              <div className="flex px-3 py-1.5 rounded-md border border-gray-300 bg-gray-100 overflow-hidden my-2">
                <input
                  type="text"
                  placeholder="Search Products"
                  className="w-full bg-transparent outline-none text-gray-900 text-sm"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 192.904 192.904"
                  className="w-3 fill-gray-600"
                >
                  <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
                </svg>
              </div>

              {/* category Filter */}
              <div className="flex justify-between mt-8">
                <h6 className="text-slate-900 text-sm font-semibold">
                  Category
                </h6>
                <span
                  onClick={() => setShowFilter((pre) => !pre)}
                  className={`text-red-500 sm:hidden  ${
                    showFilter ? "rotate-90" : ""
                  }`}
                >
                  {">"}
                </span>
              </div>

              {/* Category Lists */}
              {showFilter && (
                <>
                  <ul className="mt-6 space-y-4">
                    <li className="flex items-center gap-3">
                      <input
                        id="men"
                        type="checkbox"
                        className="w-4 h-4 cursor-pointer"
                        value={"Men"}
                        onChange={fiterCategory}
                      />
                      <label
                        htmlFor="Men"
                        className="text-slate-600 font-medium text-sm cursor-pointer"
                      >
                        Men
                      </label>
                    </li>
                    <li className="flex items-center gap-3">
                      <input
                        id="women"
                        type="checkbox"
                        className="w-4 h-4 cursor-pointer"
                        value={"Women"}
                        onChange={fiterCategory}
                      />
                      <label
                        htmlFor="women"
                        className="text-slate-600 font-medium text-sm cursor-pointer"
                      >
                        Women
                      </label>
                    </li>
                    <li className="flex items-center gap-3">
                      <input
                        id="kids"
                        type="checkbox"
                        className="w-4 h-4 cursor-pointer"
                        value={"Kids"}
                        onChange={fiterCategory}
                      />
                      <label
                        htmlFor="kids"
                        className="text-slate-600 font-medium text-sm cursor-pointer"
                      >
                        Kids
                      </label>
                    </li>
                  </ul>
                </>
              )}

              {/* Types Filter */}
              <div className="flex justify-between mt-8">
                <h6 className="text-slate-900 text-sm font-semibold">Type</h6>
                <span
                  onClick={() => setShowFilter((pre) => !pre)}
                  className={`text-red-500 sm:hidden  ${
                    showFilter ? "rotate-90" : ""
                  }`}
                >
                  {">"}
                </span>
              </div>

              {/* SubCategory Lists */}
              {showFilter && (
                <>
                  <ul className="mt-6 space-y-4">
                    <li className="flex items-center gap-3">
                      <input
                        id="Topwear"
                        type="checkbox"
                        className="w-4 h-4 cursor-pointer"
                        value={"Topwear"}
                        onChange={filterSubCategory}
                      />
                      <label
                        htmlFor="Topwear"
                        className="text-slate-600 font-medium text-sm cursor-pointer"
                      >
                        Topwear
                      </label>
                    </li>
                    <li className="flex items-center gap-3">
                      <input
                        id="hmBottomwear"
                        type="checkbox"
                        className="w-4 h-4 cursor-pointer"
                        value={"Bottomwear"}
                        onChange={filterSubCategory}
                      />
                      <label
                        htmlFor="Bottomwear"
                        className="text-slate-600 font-medium text-sm cursor-pointer"
                      >
                        Bottomwear
                      </label>
                    </li>
                    <li className="flex items-center gap-3">
                      <input
                        id="Winterwear"
                        type="checkbox"
                        className="w-4 h-4 cursor-pointer"
                        value={"Winterwear"}
                        onChange={filterSubCategory}
                      />
                      <label
                        htmlFor="Winterwear"
                        className="text-slate-600 font-medium text-sm cursor-pointer"
                      >
                        Winterwear
                      </label>
                    </li>
                  </ul>
                </>
              )}
            </div>

            <hr className="my-6 border-gray-300" />

            {/* Size Section */}
            <div>
              <h6 className="text-slate-900 text-sm font-semibold">Size</h6>
              <div className="flex flex-wrap gap-3 mt-4">
                <button
                  type="button"
                  className="cursor-pointer border border-gray-300 hover:border-blue-600 rounded-md text-[13px] text-slate-600 font-medium py-1 px-1 min-w-14"
                >
                  XS
                </button>
                <button
                  type="button"
                  className="cursor-pointer border border-gray-300 hover:border-blue-600 rounded-md text-[13px] text-slate-600 font-medium py-1 px-1 min-w-14"
                >
                  S
                </button>
                <button
                  type="button"
                  className="cursor-pointer border border-gray-300 hover:border-blue-600 rounded-md text-[13px] text-slate-600 font-medium py-1 px-1 min-w-14"
                >
                  M
                </button>
                <button
                  type="button"
                  className="cursor-pointer border border-gray-300 hover:border-blue-600 rounded-md text-[13px] text-slate-600 font-medium py-1 px-1 min-w-14"
                >
                  L
                </button>
                <button
                  type="button"
                  className="cursor-pointer border border-gray-300 hover:border-blue-600 rounded-md text-[13px] text-slate-600 font-medium py-1 px-1 min-w-14"
                >
                  XL
                </button>
                <button
                  type="button"
                  className="cursor-pointer border border-gray-300 hover:border-blue-600 rounded-md text-[13px] text-slate-600 font-medium py-1 px-1 min-w-14"
                >
                  XXL
                </button>
                <button
                  type="button"
                  className="cursor-pointer border border-gray-300 hover:border-blue-600 rounded-md text-[13px] text-slate-600 font-medium py-1 px-1 min-w-14"
                >
                  XXXL
                </button>
                <button
                  type="button"
                  className="cursor-pointer border border-gray-300 hover:border-blue-600 rounded-md text-[13px] text-slate-600 font-medium py-1 px-1 min-w-14"
                >
                  4XL
                </button>
              </div>
            </div>

            <hr className="my-6 border-gray-300" />

            {/* Price Section */}
            <div>
              <h6 className="text-slate-900 text-sm font-semibold">Price</h6>
              <div className="relative mt-6">
                <div className="h-1.5 bg-gray-300 relative">
                  <div
                    id="activeTrack"
                    className="absolute h-1.5 bg-pink-500 rounded-full w-9/12"
                  ></div>
                </div>
                <input
                  type="range"
                  id="minRange"
                  min="0"
                  max="1000"
                  defaultValue="0"
                  className="absolute top-0 w-full h-1.5 bg-transparent appearance-none cursor-pointer 
                    [&::-webkit-slider-thumb]:appearance-none 
                    [&::-webkit-slider-thumb]:w-5 
                    [&::-webkit-slider-thumb]:h-5 
                    [&::-webkit-slider-thumb]:bg-pink-500 
                    [&::-webkit-slider-thumb]:rounded-full 
                    [&::-webkit-slider-thumb]:border-2 
                    [&::-webkit-slider-thumb]:border-white 
                    [&::-webkit-slider-thumb]:shadow-md 
                    [&::-webkit-slider-thumb]:cursor-pointer
                    [&::-moz-range-thumb]:w-5 
                    [&::-moz-range-thumb]:h-5 
                    [&::-moz-range-thumb]:bg-pink-500 
                    [&::-moz-range-thumb]:rounded-full 
                    [&::-moz-range-thumb]:border-2 
                    [&::-moz-range-thumb]:border-white 
                    [&::-moz-range-thumb]:shadow-md 
                    [&::-moz-range-thumb]:cursor-pointer
                    [&::-moz-range-thumb]:border-none"
                />

                <input
                  type="range"
                  id="maxRange"
                  min="0"
                  max="1000"
                  defaultValue="750"
                  className="absolute top-0 w-full h-1.5 bg-transparent appearance-none cursor-pointer 
                    [&::-webkit-slider-thumb]:appearance-none 
                    [&::-webkit-slider-thumb]:w-5 
                    [&::-webkit-slider-thumb]:h-5 
                    [&::-webkit-slider-thumb]:bg-pink-500 
                    [&::-webkit-slider-thumb]:rounded-full 
                    [&::-webkit-slider-thumb]:border-2 
                    [&::-webkit-slider-thumb]:border-white 
                    [&::-webkit-slider-thumb]:shadow-md 
                    [&::-webkit-slider-thumb]:cursor-pointer
                    [&::-moz-range-thumb]:w-5 
                    [&::-moz-range-thumb]:h-5 
                    [&::-moz-range-thumb]:bg-pink-500 
                    [&::-moz-range-thumb]:rounded-full 
                    [&::-moz-range-thumb]:border-2 
                    [&::-moz-range-thumb]:border-white 
                    [&::-moz-range-thumb]:shadow-md 
                    [&::-moz-range-thumb]:cursor-pointer
                    [&::-moz-range-thumb]:border-none"
                />

                <div className="flex justify-between text-slate-600 font-medium text-sm mt-4">
                  <span id="minPrice">$750</span>
                  <span id="maxPrice">$1000</span>
                </div>
              </div>
            </div>

            <hr className="my-6 border-gray-300" />
          </div>

          {/* Right Side */}
          <div className="w-full p-6">
            <div className=" flex justify-between items-center">
              <h1 className="text-2xl text-slate-600 p-2 ">
                All Collcetions -{" "}
                <span className="text-red">
                  {filterPorducts && filterPorducts.length}
                </span>
              </h1>{" "}
              {/* sorting */}
              <div>
                <select
                  name="orderBy"
                  className="border border-green-500 px-4 py-2 text-gray-500 rounded"
                  onChange={(e) => setSortType(e.target.value)}
                >
                  <option value="DESC">DESC BY PRICE</option>
                  <option value="ASC">ASC BY PRICE</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterPorducts &&
                Array.isArray(filterPorducts) &&
                filterPorducts?.map((p) => {
                  return <CollectionCard key={p._id} {...p} />;
                })}
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Collections;
