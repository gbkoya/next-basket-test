import { Inter } from "next/font/google";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { BsTelephone } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { BsCart } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { BiMenuAltRight } from "react-icons/bi";


function ShopNavbar() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <div className="w-full bg-white font-montserrat">
            <nav className="fixed top-0 w-full z-[50]">
                <div className="lg:block hidden">
                    <div className="h-12 bg-[#23856D] text-white  px-32 flex justify-between items-center font-montserrat">
                        <div className="flex">
                            <div className="flex  items-center">
                                <BsTelephone className="mt-1" />
                                <span className="text-sm mx-2 font-semibold ">(225) 555-0118</span>
                            </div>
                            <div className="flex mx-5 items-center">
                                <TfiEmail className="mt-0" />
                                <span className="text-sm mx-2 font-semibold ">michelle.rivera@example.com</span>
                            </div>
                        </div>
                        <div>
                            <div className="text-sm mx-2 font-semibold">Follow Us  and get a chance to win 80% off</div>
                        </div>
                        <div className="flex items-center">
                            <div className="text-sm mx-2 font-semibold">Follow Us  :</div>
                            <FaInstagram className="mx-1" />
                            <FaYoutube className="text-white mx-1" />
                            <FaFacebook className="text-white mx-1" />
                            <FaTwitter className="text-white mx-1" />
                        </div>
                    </div>
                </div>




                <div className="lg:py-4 py-8 h-12  px-5 flex  items-center lg:px-28 bg-white">
                    {/* Logo */}
                    <div className="flex lg:w-fit w-full">
                        <div className="flex font-montserrat  text-[#252B42] font-semibold text-2xl items-center">
                            Bandage
                        </div>
                    </div>

                    <div className="flex justify-between  ml-28">
                        <div className="hidden md:flex space-x-4 items-center font-montserrat">
                            <Link href="/">
                                <div
                                    className="text-sm mx-1 font-bold text-[#737373] hover:text-gray-300"
                                >
                                    Home
                                </div>
                            </Link>

                            <div className="relative group ">
                                {/* Trigger */}
                                <div
                                    className="text-sm mx-1 flex font-medium text-[#737373] cursor-pointer"
                                    onClick={toggleDropdown}
                                >
                                    Shop
                                    <span className="ml-1 mt-1">
                                        <IoIosArrowDown />
                                    </span>
                                </div>

                                {/* Dropdown Content */}
                                {isDropdownOpen && (
                                    <div className="absolute w-36 z-10 mt-2 p-2 bg-white shadow-md">
                                        {/* Your dropdown content goes here */}
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200">
                                            Item 1
                                        </a>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200">
                                            Item 2
                                        </a>
                                        {/* Add more items as needed */}
                                    </div>
                                )}
                            </div>

                            <Link href="">
                                <div
                                    className="text-sm mx-1 font-bold text-[#737373] hover:text-gray-300"
                                >
                                    About
                                </div>
                            </Link>
                            <Link href="/joinus">
                                <div className="text-sm mx-1 font-bold text-[#737373] hover:text-gray-300">
                                    Blog
                                </div>
                            </Link>
                            <Link href="/landlordHome">
                                <div className=" text-sm mx-1 font-bold text-[#737373] hover:text-gray-300">
                                    Contact
                                </div>
                            </Link>
                            <Link href="/ArtisanHome">
                                <div className=" text-sm mx-1 font-bold text-[#737373] hover:text-gray-300">
                                    Pages
                                </div>
                            </Link>
                        </div>

                        {/* Middle Links (Hidden on Small and Medium screens) */}

                        {/* Hamburger Icon (Visible on Small and Medium screens) */}
                        <div className="md:hidden flex ml-auto justify-end items-center">
                            {/* <button className="hover:text-gray-300 focus:outline-none">
                <HiMagnifyingGlass className="h-5 w-5 mx-2" />
              </button>
              <button className="hover:text-gray-300 focus:outline-none">
                <BsCart className="h-5 w-5  mx-2" />
              </button> */}
                            <button onClick={toggleDrawer} className="hover:text-gray-300 focus:outline-none">
                                <BiMenuAltRight className="h-5 w-5 mx-2" />
                            </button>
                        </div>

                    </div>

                    {/* Right Links (Hidden on Small and Medium screens) */}
                    <div className="hidden md:flex justify-end items-center w-full text-[#23A6F0] font-montserrat">
                        <div className="mx-2">
                            <Link href="" className="flex items-center text-sm">
                                <FaRegUser />
                                <div className="ml-1 font-bold">Login/Register</div>
                            </Link>
                        </div>
                        <HiMagnifyingGlass className="mx-2" />
                        <div className="mx-2 flex items-center"><BsCart /> <span className="text-sm ml-1">1</span></div>
                        <div className="mx-2 flex items-center"><CiHeart  /><span className="text-sm">1</span></div>
                    </div>
                </div>

                {/* Responsive Drawer (Visible on Small and Medium screens) */}
                {
                    isDrawerOpen && (
                        <div className="md:hidden pt-8 bg-white text-center font-montserrat p-4">
                            <Link href="/">
                                <div className="block text-[#737373] text-3xl font-normal mb-4">Home</div>
                            </Link>
                            <Link href="">
                                <div className="block text-[#737373] text-3xl  font-extralight mb-4">Shop</div>
                            </Link>
                            <Link href="">
                                <div className="block text-[#737373] text-3xl font-normal mb-4">About</div>
                            </Link>
                            <Link href="">
                                <div className="block text-[#737373] text-3xl font-normal mb-4">Blog</div>
                            </Link>
                            <Link href="">
                                <div className="block text-[#737373] text-3xl font-normal mb-4">Contact</div>
                            </Link>
                            <Link href="">
                                <div className="block text-[#737373] text-3xl font-normal mb-4">Pages</div>
                            </Link>

                            <Link href="" className="flex items-center justify-center w-full text-[#23A6F0] text-3xl font-normal mb-4">
                                <FaRegUser />
                                <div className="">Login/Register</div>
                            </Link>
                            <Link href="">
                                <HiMagnifyingGlass className="flex items-center justify-center text-center mx-auto text-[#23A6F0] text-3xl font-normal mb-4" />
                            </Link>
                            <Link href="">
                                <div className="flex items-center justify-center text-[#23A6F0] text-3xl font-normal mb-4"><BsCart /> <span className="text-xs ml-1">1</span></div>
                            </Link>
                            <Link href="">
                                <div className="flex items-center justify-center text-[#23A6F0] text-3xl font-normal mb-4"><CiHeart /> <span className="text-xs ml-1">1</span></div>
                            </Link>

                        </div>
                    )
                }
            </nav >
        </div >
    );
}
export default ShopNavbar;
