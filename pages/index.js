import { useRouter } from "next/router";
import { useEffect } from "react";

const index = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/products");
  }, []);

  return <div></div>;
};

export default index;
