import { Form, Formik } from "formik";
import Link from "next/link";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import MyInput from "../01-Utils/Formik";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const SignupComponent = ({ onGoingRequest, makeApiRequestForSignup }) => {
  const router = useRouter();
  const [landlordDashboard, setAdminDashboard] = useState(false);
  const [showPassword, setShowPassword] = useState("password");
  const [showConfirmPassword, setShowConfirmPassword] = useState("password");

  const showPasswordHandler = () => {
    if (showPassword === "password") setShowPassword("text");
    else setShowPassword("password");
  };
  const showConfirmPasswordHandler = () => {
    if (showConfirmPassword === "password") setShowConfirmPassword("text");
    else setShowConfirmPassword("password");
  };

  useEffect(() => {
    if (router.pathname.includes("landlord-page")) setAdminDashboard(true);
  }, []);

  // Validate landlord input
  const validation = Yup.object({
    email: Yup.string().required("Email is required").email("Kindly enter a valid email"),
    firstname: Yup.string()
      .required("First name is required")
      .min(2, "First name must be at least 2 characters")
      .max(40, "First name must be max of 40 characters"),
    lastname: Yup.string()
      .required("Last name is required")
      .min(2, "Last name must be at least 2 characters")
      .max(40, "Last name must be max of 40 characters"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain at least one uppercase letter, lowercase letter, number and one special character"
      ),
    password_confirmation: Yup.string()
      .required("Confirm your password")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });

  return (
    <div className="min-h-screen">
      <div
        className="flex bg-cover relative"
        style={{ backgroundImage: `url('/assets/images/slidee1.jpg')` }}
      >
        <div className="absolute z-10 inset-0 bg-black opacity-50 "></div>
        <div className=" text-4xl w-full lg:mt-44 mt-5 font-bold text-lime-500 px-4 sm:px-6 lg:px-32 pt-10 z-20">
          We provide convenient access for
          <div>landlords, and tenants to manage their</div>
          <div>accounts and interact with our</div>
          <div>platform.</div>
        </div>
        <div className=" bg-cover bg-left hidden md:block h-screen"></div>
        <div className="p-4 md:p-16 w-full md:w-1/2 h-screen flex items-center justify-center z-20">
          <div className="w-[400px] bg-white p-8 pb-0 mt-0">
            <h2 className="text-2xl font-bold mb-3">
              {landlordDashboard ? "Admin Sign Up" : "Tenant Sign Up"}
            </h2>
            <Formik
              onSubmit={makeApiRequestForSignup}
              validationSchema={validation}
              initialValues={{
                email: "",
                firstname: "",
                lastname: "",
                password: "",
                password_confirmation: "",
              }}
            >
              {() => (
                <Form>
                  <div className="mb-4">
                    <MyInput
                      label="Email"
                      className="w-full p-2 rounded border border-gray-300 focus:outline-none  focus:border-indigo-500"
                      placeholder=" "
                      name="email"
                      labelClassName="block font-semibold mb-1"
                    />
                  </div>

                  <div className="mb-4">
                    <MyInput
                      label="First Name"
                      className="w-full p-2 rounded border border-gray-300 focus:outline-none  focus:border-indigo-500"
                      placeholder="Enter your first name"
                      name="firstname"
                      labelClassName="block font-semibold mb-1"
                    />
                  </div>
                  <div className="mb-4">
                    <MyInput
                      label="Last Name"
                      className="w-full p-2 rounded border border-gray-300 focus:outline-none  focus:border-indigo-500"
                      placeholder="Enter your last name"
                      name="lastname"
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
                      label="Password"
                      type={showPassword}
                      className="w-full p-2 rounded border border-gray-300 focus:outline-none  focus:border-indigo-500"
                      placeholder=" "
                      name="password"
                      labelClassName="block font-semibold mb-1"
                    />
                  </div>

                  <div className="mb-4 relative">
                    <button
                      type="button"
                      onClick={showConfirmPasswordHandler}
                      className=" absolute right-4 top-10 border-none flex text-gray-800  bottom-3 cursor-pointer "
                    >
                      {showConfirmPassword === "password" ? (
                        <BsEye className="text-gray-800" />
                      ) : (
                        <BsEyeSlash className="text-gray-800" />
                      )}
                    </button>
                    <MyInput
                      label="Repeat Password"
                      type={showConfirmPassword}
                      className="w-full p-2 rounded border border-gray-300 focus:outline-none  focus:border-indigo-500"
                      placeholder="Confirm your password"
                      name="password_confirmation"
                      labelClassName="block font-semibold mb-1"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2 px-4 bg-green-500 text-white font-semibold rounded hover:bg-green-600"
                  >
                    {onGoingRequest ? <div className="loading_spinner"></div> : "Sign Up"}
                  </button>

                  <div className="flex items-center justify-center mb-4">
                    <label htmlFor="rememberMe" className="flex items-center">
                      <span className="text-sm py-3">Have an account?</span>
                      <Link
                        passHref
                        href={landlordDashboard ? "/login" : "/tenant-page/login"}
                        className="text-sm text-blue-500 hover:underline pl-2"
                      >
                        Login
                      </Link>
                    </label>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignupComponent;
