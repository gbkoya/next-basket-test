import { useRouter } from "next/router";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";

const PageTitle = ({ pageName }) => {
  const router = useRouter();

  return (
    <>
      {pageName && (
        <div className=" w-full text-textColor left-0 px-3 font-semibold  lg:left-[300px]  items-center bg-opacity-7 md:text-2xl ">
          <div className="flex items-center space-x-2 my-2">
            <BsArrowLeft className="text-3xl cursor-pointer" onClick={() => router.back()} />
            <span> {pageName}</span>
          </div>
          <div className="mt-2 mx-auto inset-0 w-full">
            <hr className="border-black border-opacity-20 border-t-[1.3px] mt-1 " />
          </div>
        </div>
      )}
    </>
  );
};

export default PageTitle;
