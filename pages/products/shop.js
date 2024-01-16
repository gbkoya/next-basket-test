import React, { useRef } from 'react';
import { getLayout } from "@/components/Layouts/ShopLayout";
import CardTwo from '@/components/GeneralComponent/Card-Two';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { IoEye } from "react-icons/io5";
// import 'slick-carousel/slick/slick-theme.css';


const shop = () => {
  const CustomPrevArrow = ({ onClick }) => (
    <button className="slick-prev text-black absolute top-1/2 transform -translate-y-1/2 left-4 z-30" onClick={onClick}>
      <MdOutlineArrowBackIos className='text-5xl text-white' />
    </button>
  );

  const CustomNextArrow = ({ onClick }) => (
    <button className="slick-next text-black absolute top-1/2 transform -translate-y-1/2 right-4 z-30" onClick={onClick}>
      <MdOutlineArrowForwardIos className='text-5xl text-white' />
    </button>
  );


  const sliderRef = useRef(null);

  const settings = {

    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow className='text-black' />,
    nextArrow: <CustomNextArrow className='text-black' />,
  };

  const handleThumbnailClick = (index) => {
    sliderRef.current.slickGoTo(index);
  };

  return (
    <div className="w-full !font-montserrat lg:bg-white bg-[#FAFAFA]">
      <div className="lg:mt-12 pt-5 lg:px-28 px-8">
        <div className='bg-[#FAFAFA] pt-5 lg:-mx-28'>
          <div className='lg:mx-28'>
            <div className="flex items-center lg:justify-start justify-center">
              <div className='text-sm font-bold text-[#252B42]'>Home</div>
              <div className="mx-3"><MdOutlineArrowForwardIos className='text-sm font-bold text-[#BDBDBD]' /></div>
              <div className='text-sm font-bold text-[#BDBDBD]'>Shop</div>
            </div>
            <div className='lg:flex flex-row'>

              <div className='lg:w-1/2 mt-12 lg:flex flex-row'>
                <div className='w-full'>

                  <Slider ref={sliderRef} {...settings}>
                    <div >
                      <img src="/assets/images/single-product-1-cover-2.jpg" className='h-[400px] w-full object-cover' alt="Slide 1" />
                    </div>
                    <div>
                      <img src="/assets/images/single-product-1-thumb-1.jpg" className='h-[400px] w-full object-cover' alt="Slide 2" />
                    </div>
                    <div>
                      <img src="/assets/images/single-product-1-thumb-2.jpg" className='h-[400px] w-full object-cover' alt="Slide 3" />
                    </div>
                  </Slider>

                  {/* Thumbnails */}
                  <div className="thumbnail-container flex mt-5">
                    <img
                      className='h-[80px] w-[80px] rounded-md object-cover mr-3'
                      src="/assets/images/single-product-1-cover-2.jpg"
                      alt="Thumbnail 1"
                      onClick={() => handleThumbnailClick(0)}
                    />
                    <img
                      className='h-[80px] w-[80px] rounded-md object-cover mr-3'
                      src="/assets/images/single-product-1-thumb-1.jpg"
                      alt="Thumbnail 2"
                      onClick={() => handleThumbnailClick(1)}
                    />
                    <img
                      className='h-[80px] w-[80px] rounded-md object-cover'
                      src="/assets/images/single-product-1-thumb-2.jpg"
                      alt="Thumbnail 3"
                      onClick={() => handleThumbnailClick(2)}
                    />
                  </div>
                </div>
              </div>
              <div className='lg:w-1/2 mt-20 lg:mx-12 mx-7'>
                <div className='text-xl font-normal font-montserrat'>Floating Phone</div>
                <div className="flex text-center mt-4 -mx-1">
                  <FaStar className="text-[#F3CD03] text-xl mx-1" />
                  <FaStar className="text-[#F3CD03] text-xl mx-1" />
                  <FaStar className="text-[#F3CD03] text-xl mx-1" />
                  <FaStar className="text-[#F3CD03] text-xl mx-1" />
                  <FaRegStar className="text-[#F3CD03] text-xl mx-1" />
                  <div className='mx-3 text-[#737373] text-sm font-bold'>10  Reviews</div>
                </div>
                <div className='mt-5 text-2xl font-bold text-[#252B42]'>$1,139.33
                </div>
                <div className='flex'>
                  <div className='mt-5 text-[#737373] text-sm font-bold'>Availability:</div>
                  <div className='mx-2 mt-5 text-[#23A6F0] text-sm font-bold'> In Stock</div>
                </div>
                <div className="border border-gray-200 mt-12"></div>
                <div className='mt-12 flex'>
                  <a
                    className="rounded-full bg-[#23A6F0] mr-2 font-normal text-primary lg:h-5 lg:w-5 h-8 w-8">
                  </a>
                  <a
                    className="rounded-full bg-[#2DC071] mr-2 font-normal text-primary lg:h-5 lg:w-5 h-8 w-8">
                  </a>
                  <a
                    className="rounded-full bg-[#E77C40] mr-2 font-normal text-primary lg:h-5 lg:w-5 h-8 w-8">
                  </a>
                  <a
                    className="rounded-full bg-[#252B42] mr-3 font-normal text-primary lg:h-5 lg:w-5 h-8 w-8">
                  </a>
                </div>

                <div className='flex mt-12 lg:mr-0 -mr-10 lg:pb-0 pb-12'>
                  <div>
                    <button className="text-white text-sm font-bold bg-[#23A6F0] rounded-md px-5  py-3">Select Options</button>
                  </div>

                  <button className="  font-normal items-center ml-4 lg:mr-4 mr-2">
                    <CiHeart className='text-3xl text-black rounded-full p-1 border border-gray-300' />
                  </button>

                  <button className="  font-normal items-center lg:mr-4 mr-2">
                    <BsCart className='text-3xl text-black rounded-full p-1 border border-gray-300' />
                  </button>

                  <button className="  font-normal items-center lg:mr-4 mr-2">
                    <IoEye className='text-3xl text-black rounded-full p-1 border border-gray-300' />
                  </button>

                </div>
              </div>
            </div>
          </div>
        </div>


        <div className='lg:block hidden'>
          <center>
            <div className='flex text-sm font-bold text-[#737373] justify-center mb-6 mt-12'>
              <div className=' font-semibold'>Description</div>
              <div className='mx-6'>Additional Information</div>
              <div className='flex'>
                <div>Reviews</div>
                <div className='text-[#23856D] mx-1'>(0)</div>
              </div>
            </div>
          </center>
          <div className='border mr-2 ml-8 border-[#ECECEC]'></div>
          <div className='flex mt-8 mb-12'>
            <div className='w-6/12 text-sm mr-20 font-normal #23856D'>
              <div className='text-[#252B42] font-bold text-2xl mt-2'>the quick fox jumps over </div>
              <div className='mt-5'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                RELIT official consequent door ENIM RELIT Mollie. Excitation venial
                consequent sent nostrum met.
              </div>
              <div className='flex mt-5'>
                <div className='border border-green-900 '></div>
                <div className='ml-4'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                  RELIT official consequent door ENIM RELIT Mollie. Excitation venial
                  consequent sent nostrum met.
                </div>
              </div>
              <div className='mt-5'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                RELIT official consequent door ENIM RELIT Mollie. Excitation venial
                consequent sent nostrum met.
              </div>
            </div>
            <div className='w-6/12'>
              <img src='/assets/images/pink.png' alt='review' />
            </div>
          </div>
        </div>




        <div className='bg-[#FAFAFA] lg:-mx-28 mt-12'>
          <div className='lg:block hidden'>
            <div className='mx-28'>
              <div className=" text-[#252B42] text-2xl py-4 font-bold mx-4">BESTSELLER PRODUCTS</div>
              <div className='border border-gray-300  mx-4'></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                {/* Your grid items go here */}
                <CardTwo
                  imageSrc="/assets/images/product-cover-5 (7).png"
                  cardName="Graphic Design"
                  cardDetails="English Department"
                  oldPrice="$16.48"
                  newPrice="$6.48"
                />
                <CardTwo
                  imageSrc="/assets/images/product-cover-5 (8).png"
                  cardName="Graphic Design"
                  cardDetails="English Department"
                  oldPrice="$16.48"
                  newPrice="$6.48"
                />
                <CardTwo
                  imageSrc="/assets/images/product-cover-5 (9).png"
                  cardName="Graphic Design"
                  cardDetails="English Department"
                  oldPrice="$16.48"
                  newPrice="$6.48"
                />
                <CardTwo
                  imageSrc="/assets/images/product-cover-5 (3).png"
                  cardName="Graphic Design"
                  cardDetails="English Department"
                  oldPrice="$16.48"
                  newPrice="$6.48"
                />
                <CardTwo
                  imageSrc="/assets/images/product-cover-5 (10).png"
                  cardName="Graphic Design"
                  cardDetails="English Department"
                  oldPrice="$16.48"
                  newPrice="$6.48"
                />
                <CardTwo
                  imageSrc="/assets/images/product-cover-5 (11).png"
                  cardName="Graphic Design"
                  cardDetails="English Department"
                  oldPrice="$16.48"
                  newPrice="$6.48"
                  setClassName="lg:block hidden"
                />
                <CardTwo
                  imageSrc="/assets/images/product-cover-5 (12).png"
                  cardName="Graphic Design"
                  cardDetails="English Department"
                  oldPrice="$16.48"
                  newPrice="$6.48"
                  setClassName="lg:block hidden"
                />
                <CardTwo
                  imageSrc="/assets/images/product-cover-5 (13).png"
                  cardName="Graphic Design"
                  cardDetails="English Department"
                  oldPrice="$16.48"
                  newPrice="$6.48"
                  setClassName="lg:block hidden"
                />


              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mx-28 mt-28 pb-20">
            <div className="flex items-center justify-center lg:mt-0 mt-4">
              <img src='/assets/images/Vector (6).png' alt='' />
            </div>
            <div className="flex items-center justify-center lg:mt-0 mt-4">
              <img src='/assets/images/Vector (7).png' alt='' />
            </div>
            <div className="flex items-center justify-center lg:mt-0 mt-4">
              <img src='/assets/images/Vector (8).png' alt='' />
            </div>
            <div className="flex items-center justify-center lg:mt-0 mt-4">
              <img src='/assets/images/Vector (9).png' alt='' />
            </div>
            <div className="flex items-center justify-center lg:mt-0 mt-4">
              <img src='/assets/images/Vector (11).png' alt='' />
            </div>
            <div className="flex items-center justify-center lg:mt-0 mt-4">
              <img src='/assets/images/Vector (10).png' alt='' />
            </div>
          </div>

        </div>
      </div>
    </div >
  )
}
shop.getLayout = getLayout;
export default shop