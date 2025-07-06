import React from "react";
import { Link } from "react-router";

const ProductCard = ({ _id, name = "", image = "", description = "" }) => {
  return (
    <React.Fragment>
      <Link
        to={`/products/${_id}`}
        className="bg-white shadow-sm border border-gray-200 hover:border-b-[6px] hover:border-b-red-400 p-2 w-full max-w-sm rounded-lg overflow-hidden mx-auto mt-4"
      >
        <div className="aspect-[3/2]">
          <img src={image} className="w-full h-full object-cover rounded-lg" />
        </div>
        <div className="p-4 text-center">
          <h3 className="text-xl font-bold text-gray-600">
            {name && name.length > 20 ? name.substring(0, 20) + "..." : name}
          </h3>
          <p className="mt-3 text-sm text-slate-500 leading-relaxed">
            {description && description?.substring(0, 120)}{" "}
            <strong className="text-red-300"> more . . .</strong>
          </p>
          <button
            type="button"
            className="mt-6 px-4 py-2.5 w-full rounded-lg text-white text-sm tracking-wider font-medium border-none outline-none bg-blue-600 hover:bg-blue-700 cursor-pointer"
          >
            View
          </button>
        </div>
      </Link>
    </React.Fragment>
  );
};

export default ProductCard;
