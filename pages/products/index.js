import PageTitle from "@/components/Helper/PageTitle";
import { getLayout } from "@/components/Layouts/LeadLayout";
import NewProductForm from "@/components/products/NewProductForm";
import { Dialog } from "@headlessui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";
import { BsFillPersonFill, BsHouseDoorFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import PageLoader from "@/components/01-Utils/PageLoader";
//import AuthorizationHOC from "@/HOC/AuthorizationHOC";
import Layout from "@/components/Layouts/Layout";
import Card from "@/components/GeneralComponent/Card";
import { BiSolidBookReader } from "react-icons/bi";
import { FaArrowTrendUp } from "react-icons/fa6";
import { GiAlarmClock } from "react-icons/gi";
import { AiOutlineAreaChart } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

const ProductsHome = () => {

  return (
    <div className="w-full font-montserrat">
      <div className="lg:mt-28 mt-5 lg:px-28 px-8">
        <div className="lg:flex align-bottom">
          <div className="lg:w-4/12 px-1">
            <div className="lg:h-[75.1vh] h-[300px]  bg-cover" style={{ backgroundImage: 'url(/assets/images/card-cover-5.jpg)' }}>
              <div className="mx-5 pt-6 font-montserrat">
                <div className="text-[#2DC071] text-sm font-bold">
                  5 items
                </div>
                <div className=" lg:text-4xl text-2xl text-[#252B42] font-bold mt-1">
                  FURNITURE
                </div>
                <a className="text-sm text-[#252B42] font-bold mt-1">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-8/12 lg:mt-0 mt-4">
            <div className="px-1">
              <div className="lg:h-[37vh] h-[300px] bg-cover flex-wrap flex-shrink-0" style={{ backgroundImage: 'url(/assets/images/mediabg-cover.png)' }}>
                <div className="mx-5 pt-6 font-montserrat">
                  <div className="text-[#2DC071] text-sm font-bold">
                    5 items
                  </div>
                  <div className="text-2xl text-[#252B42] font-bold mt-1">
                    FURNITURE
                  </div>
                  <a className="text-sm text-[#252B42] font-bold mt-1">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:flex  mt-2">
              <div className="px-1 lg:w-1/2 w-full lg:mt-0 mt-4">
                <div className="lg:h-[37vh] h-[300px] bg-cover flex-shrink-0" style={{ backgroundImage: 'url(/assets/images/lamp.png)' }}>
                  <div className="mx-5 pt-6 font-montserrat">
                    <div className="text-[#2DC071] text-sm font-bold">
                      5 items
                    </div>
                    <div className="text-2xl text-[#252B42] font-bold mt-1">
                      FURNITURE
                    </div>
                    <a className="text-sm text-[#252B42] font-bold mt-1">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="mx-1 lg:w-1/2 lg:mt-0 mt-4">
                <div className="lg:h-[37vh] h-[300px] bg-cover flex-shrink-0" style={{ backgroundImage: 'url(/assets/images/vase.png)' }}>
                  <div className="mx-5 pt-6 font-montserrat">
                    <div className="text-[#2DC071] text-sm font-bold">
                      5 items
                    </div>
                    <div className="text-2xl text-[#252B42] font-bold mt-1">
                      FURNITURE
                    </div>
                    <a className="text-sm text-[#252B42] font-bold mt-1">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>



        </div>

        <section>
          <div className="mx-12 mt-20">

            <div className="font-montserrat text-center">
              <div className=" text-[#737373] text-xl font-normal lg:block hidden">Featured Products</div>
              <div className=" text-[#252B42] text-2xl py-4 font-bold">BESTSELLER PRODUCTS</div>
              <div className=" text-[#737373] text-sm font-normal lg:pb-8 pb-12 lg:px-0 px-5">Problems trying to resolve the conflict between </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {/* Your grid items go here */}
              <Card
                imageSrc="/assets/images/fixed-height.png"
                cardName="Graphic Design"
                cardDetails="English Department"
                oldPrice="$16.48"
                newPrice="$6.48"
              />
              <Card
                imageSrc="/assets/images/product-cover-5.png"
                cardName="Graphic Design"
                cardDetails="English Department"
                oldPrice="$16.48"
                newPrice="$6.48"
              />
              <Card
                imageSrc="/assets/images/product-cover-5 (1).png"
                cardName="Graphic Design"
                cardDetails="English Department"
                oldPrice="$16.48"
                newPrice="$6.48"
              />
              <Card
                imageSrc="/assets/images/product-cover-5 (2).png"
                cardName="Graphic Design"
                cardDetails="English Department"
                oldPrice="$16.48"
                newPrice="$6.48"
              />
              <Card
                imageSrc="/assets/images/product-cover-5 (3).png"
                cardName="Graphic Design"
                cardDetails="English Department"
                oldPrice="$16.48"
                newPrice="$6.48"
              />
              <Card
                imageSrc="/assets/images/untitled.png"
                cardName="Graphic Design"
                cardDetails="English Department"
                oldPrice="$16.48"
                newPrice="$6.48"
                setClassName="lg:block hidden"
              />
              <Card
                imageSrc="/assets/images/product-cover-5 (3).png"
                cardName="Graphic Design"
                cardDetails="English Department"
                oldPrice="$16.48"
                newPrice="$6.48"
                setClassName="lg:block hidden"
              />
              <Card
                imageSrc="/assets/images/untitled.png"
                cardName="Graphic Design"
                cardDetails="English Department"
                oldPrice="$16.48"
                newPrice="$6.48"
                setClassName="lg:block hidden"
              />
              <Card
                imageSrc="/assets/images/product-cover-5 (4).png"
                cardName="Graphic Design"
                cardDetails="English Department"
                oldPrice="$16.48"
                newPrice="$6.48"
                setClassName="lg:block hidden"
              />
              <Card
                imageSrc="/assets/images/product-cover-5 (5).png"
                cardName="Graphic Design"
                cardDetails="English Department"
                oldPrice="$16.48"
                newPrice="$6.48"
                setClassName="lg:block hidden"
              />
            </div>
          </div>
          <div className="mx-auto text-center mt-20 font-montserrat">
            <button className="px-3 py-2 bg-white border border-[#23A6F0] text-[#23A6F0] text-sm font-bold">LOAD MORE PRODUCTS</button>
          </div>
        </section>

        <section>
          <div className="mt-24">
            <div className="font-montserrat text-center">
              <div className=" text-[#737373] text-xl font-normal">Featured Products</div>
              <div className=" text-[#252B42] text-2xl py-4 font-bold">THE BEST SERVICES</div>
              <div className=" text-[#737373] text-sm font-normal lg:pb-8 px-16 pb-12">Problems trying to resolve the conflict between </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <div className="text-center items-center justify-center mx-auto">
                <BiSolidBookReader className="text-7xl text-[#23A6F0] mx-auto" />
                <div className="text-2xl font-bold mt-2">Easy Wins</div>
                <div className="text-sm font-normal mt-2 px-24">Get your best looking smile now!</div>
              </div>
            </div>

            <div>
              <div className="text-center items-center justify-center mx-auto">
                <img src="/assets/images/carbon_book.svg" className="h-[72px] mx-auto" alt="book" />
                <div className="text-2xl font-bold mt-2">Concrete</div>
                <div className="text-sm font-normal mt-2 px-20">Defalcate is most focused in helping you discover your most beautiful smile</div>
              </div>
            </div>

            <div>
              <div className="text-center items-center justify-center mx-auto">
                <FaArrowTrendUp className="text-7xl text-[#23A6F0] mx-auto" />
                <div className="text-2xl font-bold mt-2">Hack Growth</div>
                <div className="text-sm font-normal mt-2 px-20">Overcame any hurdle or any other problem.</div>
              </div>
            </div>
          </div>
        </section>

        <section className=" font-montserrat">
          <div className="mt-24">
            <div className="font-montserrat text-center">
              <div className=" text-[#23A6F0] text-sm font-bold">Practice Advice</div>
              <div className=" text-[#252B42] text-4xl py-4 font-bold">Featured Posts</div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">

            <div className="border border-gray-100 mr-1">
              <div>
                <div className="bg-[#E74040] shadow-md text-sm font-bold font-montserrat text-white px-2 py-[1.5px] rounded-md absolute mt-4 mx-4">NEW</div>
              </div>
              <img src="/assets/images/unsplash_hHdHCfAifHU.png" alt="image 1" className="h-[300px] w-full" />
              <div className="flex mx-5 mt-3">
                <div className="text-xs font-normal mx-1 text-[#8EC2F2]">
                  Google
                </div>
                <div className="text-xs font-normal mx-3">
                  Trending
                </div>
                <div className="text-xs font-normal mx-1">
                  New
                </div>
              </div>
              <div className="mx-6 mt-4 text-xl font-normal">
                Loudest à la Madison #1
                (L'integral)
              </div>
              <div className=" text-sm mt-4 pr-10 text-[#737373] font-normal mx-6">
                We focus on ergonomics and meeting
                you where you work. It's only a
                keystroke away.
              </div>
              <div className="flex mx-6 mt-4 justify-between">
                <div className="flex items-center">
                  <GiAlarmClock className="text-sm text-[#23A6F0]" />
                  <div className="text-xs font-normal mx-1">22 April 2021</div>
                </div>
                <div className="flex items-center">
                  <AiOutlineAreaChart className="text-sm text-[#23856D]" />
                  <div className="text-xs font-normal text-[#737373] mx-1">10 comments</div>
                </div>

              </div>
              <div className="flex items-center mx-6 mt-4 mb-6">
                <div className="text-sm text-[#737373] font-bold">Learn More</div>
                <IoIosArrowForward className="text-base text-[#23A6F0] mx-1 items-center" />
              </div>
            </div>

            <div className="border border-gray-100 mr-1">
              <div>
                <div className="bg-[#E74040] shadow-md font-montserrat text-sm font-bold text-white px-2 py-[1.5px] rounded-md absolute mt-4 mx-4">NEW</div>
              </div>
              <img src="/assets/images/no-two.png" alt="image 1" className="h-[300px] w-full" />
              <div className="flex mx-5 mt-3">
                <div className="text-xs font-normal mx-1 text-[#8EC2F2]">
                  Google
                </div>
                <div className="text-xs font-normal mx-3">
                  Trending
                </div>
                <div className="text-xs font-normal mx-1">
                  New
                </div>
              </div>
              <div className="mx-6 mt-4 text-xl font-normal">
                Loudest à la Madison #1
                (L'integral)
              </div>
              <div className=" text-sm mt-4 pr-10 text-[#737373] font-normal mx-6">
                We focus on ergonomics and meeting
                you where you work. It's only a
                keystroke away.
              </div>
              <div className="flex mx-6 mt-4 justify-between">
                <div className="flex items-center">
                  <GiAlarmClock className="text-sm text-[#23A6F0]" />
                  <div className="text-xs font-normal mx-1">22 April 2021</div>
                </div>
                <div className="flex items-center">
                  <AiOutlineAreaChart className="text-sm text-[#23856D]" />
                  <div className="text-xs font-normal text-[#737373] mx-1">10 comments</div>
                </div>

              </div>
              <div className="flex items-center mx-6 mt-4 mb-6">
                <div className="text-sm text-[#737373] font-bold">Learn More</div>
                <IoIosArrowForward className="text-base text-[#23A6F0] mx-1 items-center" />
              </div>
            </div>

            <div className="border border-gray-100 mr-1">
              <div>
                <div className="bg-[#E74040] shadow-md font-montserrat text-sm font-bold text-white px-2 py-[1.5px] rounded-md absolute mt-4 mx-4">NEW</div>
              </div>
              <img src="/assets/images/no-3.png" alt="image 1" className="h-[300px] w-full" />
              <div className="flex mx-5 mt-3">
                <div className="text-xs font-normal mx-1 text-[#8EC2F2]">
                  Google
                </div>
                <div className="text-xs font-normal mx-3">
                  Trending
                </div>
                <div className="text-xs font-normal mx-1">
                  New
                </div>
              </div>
              <div className="mx-6 mt-4 text-xl font-normal">
                Loudest à la Madison #1
                (L'integral)
              </div>
              <div className=" text-sm mt-4 pr-10 text-[#737373] font-normal mx-6">
                We focus on ergonomics and meeting
                you where you work. It's only a
                keystroke away.
              </div>
              <div className="flex mx-6 mt-4 justify-between">
                <div className="flex items-center">
                  <GiAlarmClock className="text-sm text-[#23A6F0]" />
                  <div className="text-xs font-normal mx-1">22 April 2021</div>
                </div>
                <div className="flex items-center">
                  <AiOutlineAreaChart className="text-sm text-[#23856D]" />
                  <div className="text-xs font-normal text-[#737373] mx-1">10 comments</div>
                </div>

              </div>
              <div className="flex items-center mx-6 mt-4 mb-6">
                <div className="text-sm text-[#737373] font-bold">Learn More</div>
                <IoIosArrowForward className="text-base text-[#23A6F0] mx-1 items-center" />
              </div>
            </div>

          </div>
        </section>
        <section className="font-montserrat mt-20">
          <div className="lg:flex">
            <div className="lg:w-6/12 w-full mt-12 lg:px-0 px-12">
              <div className="mx-auto text-center font-bold text-[#252B42] lg:px-0 px-5 text-2xl">What they say about us</div>
              <div><img src="/assets/images/user.jpg" className=" rounded-full h-[90px] w-[90px] mt-8 mx-auto" alt="" /></div>
              <div className="flex mx-auto justify-center text-center mt-4">
                <FaStar className="text-[#F3CD03] text-xl mx-1" />
                <FaStar className="text-[#F3CD03] text-xl mx-1" />
                <FaStar className="text-[#F3CD03] text-xl mx-1" />
                <FaStar className="text-[#F3CD03] text-xl mx-1" />
                <FaRegStar className="text-[#F3CD03] text-xl mx-1" />

              </div>
              <div className="text-center mx-5 text-sm font-bold text-[#737373] mt-4">
                Slate helps you see how many more days you need to work to
                reach your financial goal.
              </div>
              <div className="text-center mt-5 text-[#23A6F0] font-bold text-sm">
                Regina Daniels
              </div>
              <div className="text-center text-[#252B42] font-bold text-sm mt-2">Designer</div>


            </div>
            <div className="lg:pl-20 lg:mr-10 lg:mt-0 mt-8 lg:w-6/12 w-full grid grid-cols-3">
              <div className="lg:mx-0 mx-1">
                <div>
                  <img src="/assets/images/cam.png" className="h-auto" alt="" />
                </div>
                <div>
                  <img src="/assets/images/cake.png" className="h-auto mt-2" alt="" />
                </div>
                <div>
                  <img src="/assets/images/mountains.png" className="h-auto mt-2" alt="" />
                </div>
              </div>


              <div className="lg:mx-0 mx-1">
                <div>
                  <img src="/assets/images/ligirl.png" className="h-auto" alt="" />
                </div>
                <div>
                  <img src="/assets/images/woman.png" className="h-auto mt-2" alt="" />
                </div>
                <div>
                  <img src="/assets/images/scenary.png" className="h-auto mt-2" alt="" />
                </div>
              </div>


              <div className="lg:mx-0 mx-1">
                <div>
                  <img src="/assets/images/building.png" className="h-auto" alt="" />
                </div>
                <div>
                  <img src="/assets/images/writing.png" className="h-auto mt-2" alt="" />
                </div>
                <div>
                  <img src="/assets/images/blue.png" className="h-auto mt-2" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="bg-cover -mx-5 lg:-mx-28 mt-20" style={{ backgroundImage: 'url(/assets/images/bggg.png)' }}>
            <div className="lg:mx-28 text-center pt-36">
              <div className="text-[#23A6F0] text-sm font-bold">Designing Better Experience</div>
              <div className="mt-8 text-[#252B42] text-4xl font-bold lg:px-72">Problems trying to resolve
                the conflict between
              </div>
              <div className="mt-8 text-[#737373] font-normal text-sm lg:px-96">
                Problems trying to resolve the conflict between the two major realms of Classical physics:
              </div>
              <div className="mt-8 text-[#23856D] font-bold text-2xl lg:px-96">
                $16.48
              </div>
              <div>
                <button className="text-white bg-[#23A6F0] rounded-md px-5 mt-8 mb-24 py-3">ADD YOUR CALL TO ACTION</button>
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>


  )
}

ProductsHome.getLayout = getLayout;
export default ProductsHome;