import React from "react";
import laptop from "../assets/laptop.jpg";

export const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[12240px mx-auto grid md:grid-col-2">
        <img className="w-[500px] mx-auto my-4" src={laptop} alt="/" />

        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-extrabold text-3xl font-mono">
            DATA ANALYTICS DASHBOARD
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            MANAGE DATA ANALYTICS DASHBOARD
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            accusamus repellendus, consequuntur numquam quasi animi dolorem
            expedita fugit debitis illo doloremque ipsum ad, quisquam eveniet,
            excepturi nihil incidunt ex assumenda!
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};
export default Analytics;
