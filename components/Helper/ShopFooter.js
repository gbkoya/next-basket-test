import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

function ShopFooter() {
  return (

    <div className="w-full ">

      <div className="lg:px-28 px-7 py-12 lg:flex justify-between bg-white">
        <div className="flex font-montserrat text-[#252B42] font-semibold text-2xl items-center">
          Bandage
        </div>
        <div>
          <div className="flex items-center lg:mt-0 mt-3 lg:ml-0 -ml-1 lg:mx-8">
            <FaFacebook className="text-[#23A6F0] lg:text-sm text-lg mx-2" />
            <FaInstagram className="mx-2 text-[#23A6F0] lg:text-sm text-lg" />
            <FaTwitter className="text-[#23A6F0] lg:text-sm mx-2 text-lg" />
          </div>
        </div>
      </div>
      <div className="border mx-28 lg:block hidden"></div>
      <div className="lg:px-28 px-7 mt-12">
        <div className="lg:flex justify-between font-montserrat">
          <div>
            <div className="text-base font-bold pb-2 lg:mt-0 mt-5">Company Info</div>
            <div className="text-sm font-bold text-[#737373]">
              <div className="py-2"><a href=""> About Us</a></div>
              <div className="py-2"><a href=""> Carrier</a></div>
              <div className="py-2"><a href=""> We are Hiring</a></div>
              <div className="py-2"><a href=""> Blog</a></div>
            </div>
          </div>
          <div>
            <div className="text-base font-bold pb-2 lg:mt-0 mt-5">Legal</div>
            <div className="text-sm font-bold text-[#737373]">
              <div className="py-2"><a href=""> About Us</a></div>
              <div className="py-2"><a href=""> Carrier</a></div>
              <div className="py-2"><a href=""> We are Hiring</a></div>
              <div className="py-2"><a href=""> Blog</a></div>
            </div>
          </div>
          <div>
            <div className="text-base font-bold pb-2 lg:mt-0 mt-5">Features</div>
            <div className="text-sm font-bold text-[#737373]">
              <div className="py-2"><a href=""> Business Marketing</a></div>
              <div className="py-2"><a href=""> User Analytic</a></div>
              <div className="py-2"><a href=""> Live Chat</a></div>
              <div className="py-2"><a href=""> Unlimited Support</a></div>
            </div>
          </div>
          <div>
            <div className="text-base font-bold lg:mt-0 mt-5">Resources</div>
            <div className="text-sm font-bold text-[#737373]">
              <div className="py-2"><a href=""> IOS & Android</a></div>
              <div className="py-2"><a href=""> Watch a Demo</a></div>
              <div className="py-2"><a href=""> Customers</a></div>
              <div className="py-2"><a href=""> API</a></div>
            </div>
          </div>
          <div>
            <div className="text-base font-bold lg:mt-0 mt-5">Get In Touch</div>

            <div className="flex text-sm font-medium border border-[#E6E6E6] mt-4  rounded-md">
              <input
                type="search"
                placeholder="Your Email"
                id="SearchInput"
                className="bg-[#F9F9F9] text-sm text-[#737373] w-full py-4 px-5 border-none outline-none"
              />
              <button className="bg-[#23A6F0] px-5 items-center rounded-r-md text-sm font-normal text-white">Subscribe</button>
            </div>

            <div className=" text-xs font-normal text-[#737373] mt-2">Lorem imp sum dolor Amit</div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <div className="lg:px-28 lg:py-8 py-16 flex text-center justify-center bg-[#FAFAFA]">
          <div className="lg:flex font-montserrat text-[#737373] font-semibold lg:mx-0 mx-20  text-sm items-center">
            Made With Love By Finland All Right Reserved
          </div>
        </div>
      </div>

    </div>
  );
}

export default ShopFooter;
