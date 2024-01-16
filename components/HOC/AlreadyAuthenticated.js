import PageLoader from "@/components/01-Utils/PageLoader";
import { useGetTheAuthUserMutation } from "@/store/APIs/authAPI";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const AlreadyAuthenticatedHOC = (ChildComponent, Layout) => {
  const ComposeComponent = (props) => {
    const [getAuthUser] = useGetTheAuthUserMutation();
    const [showChildComponent, setShowChildComponent] = useState(false);
    const [checkingToken, setCheckingToken] = useState(true);
    const router = useRouter();

    const getAuthUserFunction = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setCheckingToken(false);
        return setShowChildComponent(true);
      }

      if (token) {
        const result = await getAuthUser();

        if (result?.error) {
          setCheckingToken(false);
          return setShowChildComponent(true);
        }

        if (result?.data?.role === "admin") router.push("/#");
        if (result?.data?.role === "tenant") router.push("/tenant-page/#");
      } else {
        setCheckingToken(false);
        return setShowChildComponent(true);
      }
    };

    useEffect(() => {
      getAuthUserFunction();
    }, []);

    return (
      <div>
        {checkingToken && !showChildComponent ? <PageLoader /> : <ChildComponent {...props} />}
      </div>
    );
  };
  ComposeComponent.getLayout = Layout;

  return ComposeComponent;
};

export default AlreadyAuthenticatedHOC;
