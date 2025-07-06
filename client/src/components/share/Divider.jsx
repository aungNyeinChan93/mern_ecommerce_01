import React from "react";

const Divider = ({ text, color }) => {
  return (
    <React.Fragment>
      <div
        className={`divider divider-success px-10 ${
          color ? `text-${color}-600` : `text-green-600`
        }`}
      >
        {text || "Let Shop Now !"}
      </div>
    </React.Fragment>
  );
};

export default Divider;
