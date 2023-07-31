import React from "react";
import { FaFacebookSquare, FaYoutubeSquare, FaInstagram } from "react-icons/fa";
import download from "../assets/download.png";

const Footer = () => {
  return (
    <div className="mX-W-[1240PX] mx-auto py-16 px-4 grid lg:grid-cols-3 text-gray-400">
      <div>
        <h1 className="w-full text-3xl py-2 px-4 font-bold text-[#00df9a]">
          SRJ DA
          <img
            className="w-[80px] py-2 px-4 mt-4 my-4 grid lg:grid-cols-1"
            src={download}
            alt="/"
          />
        </h1>
        <p className="text-gray-400">Contact us through</p>
        <div className=" text-gray-400 flex justify-between md:w-[75%] my-4  ">
          <a href="https://www.facebook.com/SRJSuraj15?mibextid=ZbWKwL">
            <FaFacebookSquare size={30} />
          </a>
          <a href="https://instagram.com/its_srj15?igshid=MzRlODBiNWFlZA==L">
            <FaInstagram size={30} />
          </a>
          <a href="https://youtube.com/@srj2629">
            <FaYoutubeSquare size={30} />
          </a>
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between py-2 px-20  mt-4 my-2">
        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            <li className="py-2 text-sm text-gray-400">Analytics</li>
            <li className="py-2 text-sm text-gray-400">Marketing</li>
            <li className="py-2 text-sm text-gray-400">Commerce</li>
            <li className="py-2 text-sm text-gray-400">Insights</li>
          </ul>
        </div>

        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <li className="py-2 text-sm text-gray-400">Pricing</li>
            <li className="py-2 text-sm text-gray-400">Documentation</li>
            <li className="py-2 text-sm text-gray-400">Guides</li>
            <li className="py-2 text-sm text-gray-400">API Status</li>
          </ul>
        </div>

        <div>
          <h6 className="font-medium text-gray-400">Company</h6>
          <ul>
            <li className="py-2 text-sm text-gray-400">About</li>
            <li className="py-2 text-sm text-gray-400">Blogs</li>
            <li className="py-2 text-sm text-gray-400">Jobs</li>
            <li className="py-2 text-sm text-gray-400">Career</li>
          </ul>
        </div>

        <div>
          <h6 className="font-medium text-gray-400 ">Legal</h6>
          <ul>
            <li className="py-2 text-sm text-gray-400">Claim</li>
            <li className="py-2 text-sm text-gray-400">Policy</li>
            <li className="py-2 text-sm text-gray-400">Terms</li>
            <li className="py-2 text-sm text-gray-400">Conditions</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
