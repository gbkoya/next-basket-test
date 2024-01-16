import PageLoader from "@/components/01-Utils/PageLoader";
import { getLayout } from "@/components/Layouts/Layout";
import { useLogoutUserMutation } from "@/store/APIs/authAPI";
import { fetcherApi } from "@/store/fetcherApi";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Logout = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [logoutUser] = useLogoutUserMutation();
  useEffect(() => {
    logoutUser();
    localStorage.removeItem("token");
    dispatch(fetcherApi.util.resetApiState());
    router.push("/login");
  }, [router]);

  return (
    <div>
      <h1 className="sr-only">Blank</h1>
      <PageLoader />
    </div>
  );
};

Logout.getLayout = getLayout;
export default Logout;
