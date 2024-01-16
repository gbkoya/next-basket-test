import PageLoader from "@/components/01-Utils/PageLoader";
import { useGetAuthUserQuery } from "@/store/APIs/authAPI";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const AuthorizationHOC = (ChildComponent, Layout) => {

  const ComposeComponent = (props) => {
    const { data, isLoading } = useGetAuthUserQuery();
    const [showChildComponent, setShowChildComponent] = useState(false);
    const [checkingToken, setCheckingToken] = useState(true);
    const router = useRouter();

    const getAuthUserFunction = async () => {
      const token = localStorage.getItem("token");
      const adminLoginPage = "/login";

      // If there is no token and page is for admin, push user to admin login page
      if (!token) {
        return router.push(adminLoginPage);
      }
      // If there is no token and page is for tenant, push user to tenant login page

      // If there is token and error was gotten from the backend (meaning, token is invalid)
      // push user to admin dashboard
      if (token) {

        setCheckingToken(false);
        return setShowChildComponent(true);

      } else {
        return router.push(adminLoginPage);
      }
    };

    useEffect(() => {
      getAuthUserFunction();
    }, [data, isLoading]);

    return (
      <div>
        {checkingToken && !showChildComponent ? <PageLoader /> : <ChildComponent {...props} />}
      </div>
    );
  };
  ComposeComponent.getLayout = Layout;

  return ComposeComponent;
};

export default AuthorizationHOC;
