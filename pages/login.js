import { useLoginAdminMutation } from "@/store/APIs/authAPI";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import * as Yup from "yup";
import "react-toastify/dist/ReactToastify.css";
import MyInput from "@/components/01-Utils/Formik";

const Login = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState("password");
  const [onGoingRequest, setOnGoingRequest] = useState(false);
  const [loginAdmin] = useLoginAdminMutation();

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

  const makeRequestToLogin = async (values) => {
    try {
      setOnGoingRequest(true);
      const result = await loginAdmin(values);
      if (result?.error?.data?.message) toast.warning(result?.error?.data?.message);
      const errors = result?.error?.data;
      if (result?.error?.data?.error && typeof result?.error?.data?.error === "string") {
        setOnGoingRequest(false);
        return toast.warning(result?.error?.data?.error);
      }
      if (errors) {
        const { password, email } = errors;
        if (password) toast.warning(password[0]);
        if (email) toast.warning(email[0]);
        if (errors.error) toast.warning(errors.error);
        setOnGoingRequest(false);
      } else {
        localStorage.setItem("token", result.data.token);
        router.push("/products");
      }
    } catch (err) {
      console.log(err);
      setOnGoingRequest(false);
    }
  };

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
            <h2 className="text-2xl font-bold mb-6">Admin Login</h2>
            <Formik
              onSubmit={(values) => makeRequestToLogin(values)}
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
            <div className="absolute top-[1%] left-[100%] transform -translate-x-1/2 -translate-y-1/2">
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
