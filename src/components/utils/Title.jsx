import React from "react";

const Title = ({ title }) => {
  return (
    <>
      <div className="grid items-center" style={{ marginTop: "80px" }}>
        {" "}
        {/* Adjust the margin-top value as needed */}
        <h1 className="text-5xl lg:text-4xl md:text-3xl font-bold text-slate-900 filter drop-shadow-lg">
          {title}
        </h1>
      </div>
    </>
  );
};

export default Title;
