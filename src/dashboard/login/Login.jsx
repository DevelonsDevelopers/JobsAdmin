import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginUser } from "../../store";
import { AiFillEye, AiFillEyeInvisible, AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
import {
  SESSION_ADMIN_ID,
  SESSION_ADMIN_LOGIN,
  SESSION_ADMIN_TYPE,
  SESSION_ADMIN_USER,
  SESSION_PROVIDER_LOGIN,
} from "../../Utils/Constant";
import picture from "../../assets/login-profile.png";
import { IoMail } from "react-icons/io5";
import { FaKey } from "react-icons/fa";

const Login = () => {
  const [loading, setLoading] = useState(false);

  const [adminLoginData, setAdminLoginData] = useState({ email: "", password: "" });
  console.log(adminLoginData)
  const navigate = useNavigate();
  const handleChange = (e) => {
    setAdminLoginData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    const isLogin = sessionStorage.getItem(SESSION_ADMIN_LOGIN);
    const adminType = sessionStorage.getItem(SESSION_ADMIN_TYPE);
    if (isLogin === "true" && adminType === "USER") {
      navigate("/userPanel");
    } else {
    }
  }, []);

  const login = () => {
    setLoading(true);
    LoginUser(adminLoginData.email, adminLoginData.password).then((res) => {
      const {
        data: { data },
      } = res;
      const {
        data: { status },
      } = res;
      if (adminLoginData?.email?.length || adminLoginData?.password?.length !== 0) {
        if (adminLoginData?.email?.length != 0) {
          if (adminLoginData?.password?.length != 0) {
            if (status === "OK") {
              setLoading(false);
              sessionStorage.setItem(SESSION_ADMIN_LOGIN, "true");
              sessionStorage.setItem(SESSION_ADMIN_ID, data.id);
              sessionStorage.setItem(SESSION_ADMIN_TYPE, "USER");
              sessionStorage.setItem(SESSION_ADMIN_USER, JSON.stringify(data));
              sessionStorage.setItem(SESSION_PROVIDER_LOGIN, "false");
              navigate(
                "/userPanel",
                toast.success("Login Successfully", {
                  position: "top-right",
                  autoClose: 1000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                })
              );
            } else {
              toast.error("No Email or Password Exists", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            }
          } else {
            toast.error("Enter Your Valid Password", {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }
        } else {
          toast.error("Please Enter Your Valid Email", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      } else {
        toast.error("Enter Your Valid Email Address or Password", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    });
  };

  const [show, setShow] = useState(false);

  const handleSubmit = () => {
    setShow(!show);
    myFunction();
  };
  // navigate('/')

  function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  return (
    <>
      <div className="bg-yellow-400 h-screen flex justify-center items-center">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <div className="flex bg-white rounded-xl shadow-md shadow-gray-500 h-[30rem] w-[70%] m-auto ">
          <div className="w-[40%] flex flex-col items-center py-10 h-full rounded-l-[10px] bg-black max-md:hidden">
              <img src={picture} alt="" className="w-[60%] h-[60%] " />
              <h1 className="text-white mt-10 text-[2.5rem] font-[600] uppercase" >SIGN In</h1>
          </div>
          <div className="w-[60%] py-10 max-md:w-[90%] max-md:m-auto flex items-center justify-center ">
            <div className="w-[50%]">
              <h1 className="text-[22px] font-[600] ">Hello! Welcome Back :)</h1>
              <br />
              <h1 className="text-[13px] text-gray-600 font-[600]">
                To keep connected with us please login with your personal
                information by email and password
              </h1>
              <br />
              <div className=" pl-3 pr-[1px] shadow-lg flex gap-5 rounded-[10px] w-[100%] max-md:w-[100%]  border-2 border-gray-400 ">
                <div className="flex items-center justify-center">
                  <IoMail className="text-[1.7rem] text-black" />
                </div>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  placeholder="Enter Your Email(eg.admin@gmail.com)"
                  className="py-3 text-[.9rem] w-full rounded-r-[10px] text-gray-700 font-[500] outline-none hover:outline-none focus:bg-white"
                />
              </div>
              <br />
              <div className=" px-3 shadow-lg flex gap-5 rounded-[10px] w-[100%] max-md:w-[100%]  border-2 border-gray-400 ">
                <div className="flex items-center justify-center">
                  <FaKey className="text-[1.7rem] text-black" />
                </div>
                <input
                  type="password"
                  id="myInput"
                  name="password"
                  onChange={handleChange}
                  placeholder="Enter Your Password"
                  className="py-3 text-[.9rem] text-gray-700 font-[500] outline-none hover:outline-none "
                />
              </div>
              {show ? (
                <div
                  className="relative top-[-2.2rem] left-[90%] w-[10%] text-[1.4rem]"
                  onClick={() => handleSubmit()}
                >
                  {" "}
                  <AiFillEye />
                </div>
              ) : (
                <div
                  className="relative top-[-2.2rem] left-[90%] w-[10%] text-[1.4rem]"
                  onClick={() => handleSubmit()}
                >
                  {" "}
                  <AiFillEyeInvisible />
                </div>
              )}
              {loading ? (
                <center>
                  {" "}
                  <div className="bg-black border-black text-white transition-all ease-in-out duration-150 border-2 cursor-pointer font-[600] px-10 py-[7px] w-[100%] rounded-full mt-6">
                    <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-white"></div>
                  </div>
                </center>
              ) : (
                <input
                  type="submit"
                  value="SIGN IN"
                  onClick={() => login()}
                  className="bg-white text-black hover:bg-black border-black hover:text-white transition-all ease-in-out duration-150 border-2 cursor-pointer font-[600] px-10 py-[5px] w-[100%] rounded-full mt-6"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
