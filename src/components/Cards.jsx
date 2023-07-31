import React from "react";
import single from "../assets/single.png";
import double from "../assets/double.png";
import triple from "../assets/triple.png";

export const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 lg:py-10 my-4 rounded-lg hover:scale-105 duration-0  ">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={single}
            alt="/"
          />
          <h2 className="text-2xl font-mono font-bold text-center py-8">
            Single User
          </h2>
          <p className="text-center font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8"> 500 GB Storage</p>
            <p className="py-2 border-b mx-8"> 1 Granted User</p>
            <p className="py-2 border-b mx-8"> Send up to 2 GB </p>
          </div>
          <button className=" hover:scale-110 duration-75 bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto  px-6 py-3 ">
            Start Trial
          </button>
        </div>

        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-0  ">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={double}
            alt="/"
          />
          <h2 className="text-2xl font-mono font-bold text-center py-8">
            Double User
          </h2>
          <p className="text-center font-bold">$199</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8"> 1 TB Storage</p>
            <p className="py-2 border-b mx-8"> 3 User Allowed</p>
            <p className="py-2 border-b mx-8"> Send up to 10 GB </p>
          </div>
          <button className="hover:scale-110 duration-75 bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto  px-6 py-3 ">
            Start Trial
          </button>
        </div>

        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-0  ">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={triple}
            alt="/"
          />
          <h2 className="text-2xl font-mono font-bold text-center py-8">
            Triple User
          </h2>
          <p className="text-center font-bold">$299</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8"> 5 TB Storage</p>
            <p className="py-2 border-b mx-8"> 10 User Allowed</p>
            <p className="py-2 border-b mx-8"> Send up to 20 GB </p>
          </div>
          <button className="hover:scale-110 duration-75 bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto  px-6 py-3 ">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};
export default Cards;
