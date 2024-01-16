import { useRouter } from "next/router";
import { BsHouseExclamation } from "react-icons/bs";

const EmptyData = ({ emptyDataMessage }) => {
  const router = useRouter();
  return (
    <div className="items-center flex flex-col justify-center gap-y-3 font-bold w-fit text-lg md:text-xl m-auto inset-0 mt-20">
      <BsHouseExclamation
        className={`text-6xl ${
          // router.pathname.includes("landlord-page") ? "text-blue-700" : "text-textColor"
          "text-blue-700"
        } animate-pulse `}
      />
      <p>{emptyDataMessage}</p>
    </div>
  );
};

export default EmptyData;
