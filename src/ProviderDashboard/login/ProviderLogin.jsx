import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CompanyLogin } from "../../store";
import { AiFillEye, AiFillEyeInvisible, AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
import AppView from "../view/AppView";
import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";
import {
  SESSION_PROVIDER,
  SESSION_PROVIDER_ID,
  SESSION_PROVIDER_LOGIN,
  SESSION_PROVIDER_TYPE,
  SESSION_ADMIN_LOGIN,
} from "../../Utils/Constant";
import picture from "../../assets/login-profile.png";
import googleImg from "../../assets/google.png";
import { IoMail } from "react-icons/io5";
import { FaKey } from "react-icons/fa";

const ProviderLogin = () => {
  const [loading, setLoading] = useState(false);

  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setLoginData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    const isLogin = sessionStorage.getItem(SESSION_PROVIDER_LOGIN);
    const loginType = sessionStorage.getItem(SESSION_PROVIDER_TYPE);
    if (isLogin === "true" && loginType === "PROVIDER") {
      navigate("/providerPanel");
    } else {
    }
  }, []);

  const ProviderLogin = () => {
    setLoading(true);
    CompanyLogin(loginData.email, loginData.password).then((res) => {
      console.log(res);
      const {
        data: { data },
      } = res;
      const {
        data: { status },
      } = res;
      console.log("res", status);
      // if (status === "OK") {
      //   sessionStorage.setItem(SESSION_PROVIDER_LOGIN, "true");
      //   sessionStorage.setItem(SESSION_PROVIDER_ID, data.id);
      //   sessionStorage.setItem(SESSION_PROVIDER_TYPE, "PROVIDER");
      //   sessionStorage.setItem(SESSION_PROVIDER, JSON.stringify(data));
      //   sessionStorage.setItem(SESSION_ADMIN_LOGIN, "false");
      //   navigate("/providerPanel");
      // } else {
      //   toast.error("Invalid Username or Password", {
      //     position: "top-right",
      //     autoClose: 2000,
      //     hideProgressBar: false,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //     progress: undefined,
      //     theme: "light",
      //   });
      // }
      if (loginData?.email?.length || loginData?.password?.length !== 0) {
        if (loginData?.email?.length != 0) {
          if (loginData?.password?.length != 0) {
            if (status === "OK") {
              setLoading(false);
              sessionStorage.setItem(SESSION_PROVIDER_LOGIN, "true");
              sessionStorage.setItem(SESSION_PROVIDER_ID, data.id);
              sessionStorage.setItem(SESSION_PROVIDER_TYPE, "PROVIDER");
              sessionStorage.setItem(SESSION_PROVIDER, JSON.stringify(data));
              sessionStorage.setItem(SESSION_ADMIN_LOGIN, "false");
              navigate("/providerPanel",
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

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log(tokenResponse);

      // fetching userinfo can be done on the client or the server
      const userInfo = await axios
        .get("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        })
        .then(async (res) => {
          console.log(res);
        });
      // console.log(userInfo);
    },
    // flow: 'implicit', // implicit is the default
  });

  const [open, setOpen] = useState();
  const toggleOpenVisible = () => setOpen(!open);

  const [show, setShow] = useState(false);

  const handleSubmit = () => {
    setShow(!show);
    myFunction();
  };
  // navigate('/')

  const myFunction = () => {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };

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
            <h1 className="text-white mt-10 text-[2.5rem] font-[600] uppercase">
            SIGN In
            </h1>
          </div>
          <div className="w-[60%] py-10 max-md:w-[90%] max-md:m-auto flex items-center justify-center ">
            <div className="w-[50%]">
              <h1 className="text-[22px] font-[600] ">
                Hello! Welcome Back :)
              </h1>
              <br />
              <h1 className="text-[13px] text-gray-600 font-[600]">
                To keep connected with us please login with your personal
                information by email and password
              </h1>
              <br />
              <div className=" px-3 shadow-lg flex gap-5 rounded-[10px] w-[100%] max-md:w-[100%]  border-2 border-gray-400 ">
                <div className="flex items-center justify-center">
                  <IoMail className="text-[1.7rem] text-black" />
                </div>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  placeholder="Enter Your Email(eg.admin@gmail.com)"
                  className="py-3 text-[.9rem] w-full text-gray-700 font-[500] outline-none hover:outline-none  "
                />
              </div>
              <br />
              <div className="pl-3 pr-[1px] shadow-lg flex gap-5 rounded-[10px] w-[100%] max-md:w-[100%]  border-2 border-gray-400 ">
                <div className="flex items-center justify-center">
                  <FaKey className="text-[1.7rem] text-black" />
                </div>
                <input
                  type="password"
                  id="myInput"
                  name="password"
                  onChange={handleChange}
                  placeholder="Enter Your Password"
                  className="py-3 text-[.9rem] text-gray-700  rounded-r-[10px]  font-[500] outline-none hover:outline-none select-auto "
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
                  onClick={() => ProviderLogin()}
                  className="bg-white text-black hover:bg-black border-black hover:text-white transition-all ease-in-out duration-150 border-2 cursor-pointer font-[600] px-10 py-[5px] w-[100%] rounded-full mt-6"
                />
              )}
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        <AppView open={open} toggleOpenVisible={toggleOpenVisible} />
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
        <div className='w-[100%] h-[24rem] bg-blue-600'>
        </div>
        <div className=' bg-gray-400 '>
          <div className="flex bg-white py-10 rounded-xl w-[60%] relative top-[-250px] m-auto ">
            <div className="w-[50%] mt-[10%] max-md:hidden">
              <img src={picture} alt="" className="w-160 " />
            </div>
            <center className="w-[40%] max-md:w-[90%] max-md:m-auto">
              <div className=' p-[10px]'><br />
                <h1 className='text-[22px]'>Welcome Back :)</h1><br />
                <h1 className='text-[13px] text-gray-600 font-[600]'>To keep connected with us please login with your personal information by email and password on Provider Panel</h1><br />
                <input type="email" name="email" onChange={handleChange} placeholder='Enter Your Email' className='shadow-lg rounded-[12px] text-[.9rem] text-gray-700 font-[500] w-[100%] max-md:w-[100%] pl-[50px] border-2 pt-[7px] pb-[7px]' /><br />
                <div className="relative top-[-1.9rem] left-[-44%] w-[10%]"> <IoMail />
                </div>
                <input type="password" name="password" id="myInput" onChange={handleChange} placeholder='Password' className='pr-[50px] shadow-lg rounded-[12px] text-[.9rem] text-gray-700 font-[500] w-[100%] max-md:w-[100%] pl-[50px] border-2 pt-[7px] pb-[7px]' /><br />
                <div className="relative top-[-1.9rem] left-[-44%] w-[10%]"> <FaKey />
                </div>
                {show ?
                  <div className="relative top-[-2.9rem] left-[44%] w-[10%] text-[1.4rem]" onClick={() => handleSubmit()}> <AiFillEye />
                  </div>
                  :
                  <div className="relative top-[-2.9rem] left-[44%] w-[10%] text-[1.4rem]" onClick={() => handleSubmit()}> <AiFillEyeInvisible />
                  </div>
                }
                <h1 onClick={() => toggleOpenVisible()} className="text-[.9rem] text-blue-600 text-right cursor-pointer font-[600] hover:underline">Register Now</h1>

                <input type='submit' value='Log In' onClick={() => ProviderLogin()} className='bg-blue-600 text-white cursor-pointer font-[600] px-10 py-[5px] w-[100%] rounded-full mt-6' />
                <h1 className="text-[.9rem] text-gray-700 font-[600] text-left mt-4">You can also join with</h1>
                <div onClick={() => googleLogin()} className="flex justify-center border-2 gap-2 mt-4 rounded-xl p-2 cursor-pointer hover:bg-gray-200">
                  <img src={googleImg} alt="" className="w-8 mr-auto h-8 ml-4 cursor-pointer rounded-full border-2 border-gray-100" />
                  <p className="mr-auto ml-[-2rem] mt-[2px] text-[1.2rem] text-gray-600 font-[600]">Google</p>
                </div>

              </div>
            </center>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default ProviderLogin;
