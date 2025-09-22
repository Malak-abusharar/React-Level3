import React from "react";

const Model = ({ closeModel, children }) => {
  return (
    <div className="parent-of-model">
      <form className={`model`}>
        <div
          onClick={() => {
            closeModel();
          }}
          className="close"
        >
          X
        </div>
        {children}
      </form>
    </div>
  );
};

export default Model;