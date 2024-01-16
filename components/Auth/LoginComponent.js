import { Form, Formik } from "formik";
import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { ToastContainer } from "react-toastify";
import * as Yup from "yup";
import MyInput from "../01-Utils/Formik";
import MainNavbar from "../Helper/Navbar/GeneralNavbar";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const LoginComponent = ({ makeRequestToLogin, onGoingRequest }) => {
  const router = useRouter();
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState("password");
  const [landlordDashboard, setAdminDashboard] = useState(false);

  useEffect(() => {
    if (router.pathname.includes("landlord-page")) setAdminDashboard(true);
  }, []);

  const showPasswordHandler = () => {
    if (showPassword === "password") setShowPassword("text");
    else setShowPassword("password");
  };

  // Validate landlord input
  const validation = Yup.object({
    email: Yup.string().required("Email is required").email("Kindly enter a valid email"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
  });

  return (
    <div className="min-h-screen">
      <div
        className="flex bg-cover relative"
        style={{ backgroundImage: `url('/assets/images/slidee2.jpg')` }}
      >
        <div className="absolute z-10 inset-0 bg-black opacity-50 "></div>
        <div className="text-4xl w-full lg:mt-44 mt-5 font-bold text-tenantColor px-4 sm:px-6 lg:px-24 pt-10 z-20">
          We provide convenient access for landlords,<p>and tenants to manage their </p>
          <p>accounts and interact with our</p>
          <p> platform.</p>
        </div>

        <div className="p-4 md:p-16 w-full md:w-1/2 h-screen flex items-center justify-center">
          <div className="w-[400px] bg-white p-8 z-20">
            <h2 className="text-2xl font-bold mb-6">
              {landlordDashboard ? "Admin Login" : "Tenant Login"}
            </h2>
            <Formik
              onSubmit={(values) => makeRequestToLogin(values, remember)}
              initialValues={{ email: "", password: "" }}
              validationSchema={validation}
            >
              {() => (
                <Form>
                  <div className="mb-4">
                    <MyInput
                      label=" Email"
                      className="w-full p-2 rounded border border-gray-300 focus:outline-none  focus:border-indigo-500"
                      placeholder=" "
                      name="email"
                      labelClassName="block font-semibold mb-1"
                    />
                  </div>
                  <div className="mb-4 relative">
                    <button
                      type="button"
                      onClick={showPasswordHandler}
                      className=" absolute right-4 top-10 border-none flex text-gray-800  bottom-3 cursor-pointer "
                    >
                      {showPassword === "password" ? (
                        <BsEye className="text-gray-800" />
                      ) : (
                        <BsEyeSlash className="text-gray-800" />
                      )}
                    </button>
                    <MyInput
                      label=" Password"
                      type={showPassword}
                      className="w-full p-2 rounded border border-gray-300 focus:outline-none  focus:border-indigo-500"
                      placeholder=" "
                      name="password"
                      labelClassName="block font-semibold mb-1"
                    />
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <label htmlFor="remember" className="flex items-center ">
                      <input
                        type="checkbox"
                        id="remember"
                        defaultChecked={false}
                        name="remember"
                        value={remember}
                        onChange={(e) => setRemember((remember) => !remember)}
                        className="mr-2"
                      />
                      <span className="text-sm">Remember Me</span>
                    </label>
                    <a href="/login-2" className="text-sm text-blue-500 hover:underline">
                      Forgot Password
                    </a>
                  </div>
                  <button
                    disabled={onGoingRequest}
                    type="submit"
                    className="w-full py-2 px-4 bg-green-500 text-white font-semibold rounded hover:bg-green-600"
                  >
                    {onGoingRequest ? <div className="loading_spinner"></div> : "Login"}
                  </button>
                </Form>
              )}
            </Formik>
            {landlordDashboard && (
              <div className="flex items-center justify-center mt-4">
                <span className="text-sm py-5">No Account?</span>
                <Link
                  passHref
                  href="/auth/signup"
                  className="text-sm text-blue-500 hover:underline pl-2"
                >
                  Sign up here
                </Link>
              </div>
            )}
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
