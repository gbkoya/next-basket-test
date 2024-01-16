import { useEffect, useState } from "react";
import GeneralFooter from "../Helper/GeneralFooter";
import LandLordNavbar from "../Helper/LandLordNavbar";
import { getLayout as getSiteLayout } from "./Layout";

const LeadLayoutTwo = ({ children }) => {
  const slides = [
    "/assets/images/city.jpeg",
    "/assets/images/city2.jpeg",
    "/assets/images/city3.jpeg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds (adjust as needed)

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <LandLordNavbar />
      <div className="pt-16 bg-white">{children}</div>
      <div className=" w-screen">
        <GeneralFooter />
      </div>
    </>
  );
};
export const getLayout = (page) => getSiteLayout(<LeadLayoutTwo>{page}</LeadLayoutTwo>);

export default LeadLayoutTwo;
