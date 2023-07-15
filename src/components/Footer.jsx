import React, { useEffect, useState } from "react";

const Footer = ({ footerAPI: { titles, links } }) => {
  const [Year, setYear] = useState();
  useEffect(() => {
    const getYear = () => setYear(new Date().getFullYear());
    getYear();
  }, []);
  return (
    <>
      <footer className="bg-theme pt-7 pb-5">
        <div className="nike-container text-slate-200">
          <div className="mt-5 text-center">
            <p className="text-sm md:text-center">
              <sup className="text-base font-semibold">&copy;</sup>
              {Year} UltraCoffee{" "}
              <span className="font-semibold">All Reserved Rights </span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
