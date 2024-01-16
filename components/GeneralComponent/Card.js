import React from 'react';



const Card = ({setClassName, imageSrc, cardName, cardDetails, oldPrice, newPrice }) => {
    return (
      <div className={`p-4 pb-7 font-montserrat ${setClassName}`}>
        <img src={imageSrc} className="lg:h-44 w-full object-cover mx-auto" alt="card image" />
        <div>
          <div className="text-base font-bold text-center mt-5">{cardName}</div>
          <div className="text-sm font-bold text-center mt-3 text-[#737373]">{cardDetails}</div>
          <div className="flex mt-3 justify-center">
            <div className="text-base text-[#BDBDBD] font-bold">{oldPrice}</div>
            <div className="mx-1 text-base text-[#23856D] font-bold">{newPrice}</div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Card;