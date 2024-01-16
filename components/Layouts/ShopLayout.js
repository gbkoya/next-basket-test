import WebsiteMetadata from "@/components/00-WebsiteMetadata/WebsiteMetadata";
import { useEffect, useState } from "react";
import { AiOutlineEnvironment } from "react-icons/ai";
import { FaBath, FaBed } from "react-icons/fa";
import ShopFooter from "../Helper/ShopFooter";
import ShopNavbar from "../Helper/ShopNavbar";
import { getLayout as getSiteLayout } from "./Layout";

const ShopLayout = ({ children }) => {
//   const slides = [
//     "/assets/images/city.jpeg",
//     "/assets/images/city2.jpeg",
//     "/assets/images/city3.jpeg",
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);

//   const [selectedOption, setSelectedOption] = useState("");
//   const [selectedOption2, setSelectedOption2] = useState("");

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
//     }, 5000); // Change slide every 5 seconds (adjust as needed)

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

  return (
    <>
      <ShopNavbar />
      <div className="pt-16 bg-white">{children}</div>
      <div className=" w-screen">
        <ShopFooter />
      </div>
    </>
  );
};
export const getLayout = (page) => getSiteLayout(<ShopLayout>{page}</ShopLayout>);

export default ShopLayout;
