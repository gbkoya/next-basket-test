import React from 'react';



const CardTwo = ({setClassName, imageSrc, cardName, cardDetails, oldPrice, newPrice }) => {
    return (
      <div className={`p-4 pb-7 font-montserrat ${setClassName}`}>
        <img src={imageSrc} className="lg: h-72 w-full object-cover mx-auto" alt="card image" />
        <div className='mx-8'>
          <div className="text-base font-bold  mt-5">{cardName}</div>
          <div className="text-sm font-bold  mt-3 text-[#737373]">{cardDetails}</div>
          <div className="flex mt-3 ">
            <div className="text-base text-[#BDBDBD] font-bold">{oldPrice}</div>
            <div className="mx-1 text-base text-[#23856D] font-bold">{newPrice}</div>
          </div>
        </div>
      </div>
    );
  };
  
  export default CardTwo;