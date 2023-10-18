import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { CompanyLogin } from "../../store"
import { AiFillEye, AiFillEyeInvisible, AiOutlineMail } from 'react-icons/ai'
import { RiLockPasswordLine } from 'react-icons/ri'
import { ToastContainer, toast } from "react-toastify"
import AppView from "../view/AppView"
import axios from "axios"
import { useGoogleLogin } from "@react-oauth/google"

const ProviderLogin = () => {
  const [loginData, setLoginData] = useState({ email: '', password: '' })
  const navigate = useNavigate()
  const handleChange = (e) => {
    setLoginData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  useEffect(() => {
    const isLogin = sessionStorage.getItem("LOGIN")
    if (isLogin === "true") {
      navigate('/providerPanel')
    } else {
    }
  }, [])

  const login = () => {
    CompanyLogin(loginData.email, loginData.password).then(res => {
      console.log(res)
      const { data: { data } } = res;
      const { data: { status } } = res;
      console.log('res', status)
      if (status === 'OK') {
        sessionStorage.setItem("LOGIN", "true")
        sessionStorage.setItem("ID", data.id)
        sessionStorage.setItem("TYPE", "PROVIDER")
        sessionStorage.setItem("PROVIDER", JSON.stringify(data))
        navigate('/providerPanel')
      }
      else {
        toast.error('Invalid Username or Password', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    })
  }



  const googleLogin = useGoogleLogin({
    onSuccess: async tokenResponse => {
      console.log(tokenResponse);

      // fetching userinfo can be done on the client or the server
      const userInfo = await axios
        .get('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        })
        .then(async res => {

          console.log(res)

        });
      // console.log(userInfo);
    },
    // flow: 'implicit', // implicit is the default
  });

  const [open, setOpen] = useState()
  const toggleOpenVisible = () => setOpen(!open)


  const [show, setShow] = useState(false)

  const handleSubmit = () => {
    setShow(!show)
    myFunction()
  }
  // navigate('/')


  const  myFunction = () => {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  return (
    <>
      <div>
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
              <img src="./assets/panelLogin.png" alt="" className="w-160 " />
            </div>
            <center className="w-[40%] max-md:w-[90%] max-md:m-auto">
              <div className=' p-[10px]'><br />
                <h1 className='text-[22px]'>Welcome Back :)</h1><br />
                <h1 className='text-[13px] text-gray-600 font-[600]'>To keep connected with us please login with your personal information by email and password on Provider Panel</h1><br />
                <input type="email" name="email" onChange={handleChange} placeholder='Enter Your Email' className='shadow-lg rounded-[12px] text-[.9rem] text-gray-700 font-[500] w-[100%] max-md:w-[100%] pl-[50px] border-2 pt-[7px] pb-[7px]' /><br />
                <div className="relative top-[-1.9rem] left-[-44%] w-[10%]"> <AiOutlineMail />
                </div>
                <input type="password" name="password" id="myInput" onChange={handleChange} placeholder='Password' className='pr-[50px] shadow-lg rounded-[12px] text-[.9rem] text-gray-700 font-[500] w-[100%] max-md:w-[100%] pl-[50px] border-2 pt-[7px] pb-[7px]' /><br />
                <div className="relative top-[-1.9rem] left-[-44%] w-[10%]"> <RiLockPasswordLine />
                </div>
                {show ?
                  <div className="relative top-[-2.9rem] left-[44%] w-[10%] text-[1.4rem]" onClick={() => handleSubmit()}> <AiFillEye />
                  </div>
                  :
                  <div className="relative top-[-2.9rem] left-[44%] w-[10%] text-[1.4rem]" onClick={() => handleSubmit()}> <AiFillEyeInvisible />
                  </div>
                }
                <h1 onClick={() => toggleOpenVisible()} className="text-[.9rem] text-blue-600 text-right cursor-pointer font-[600] hover:underline">Register Now</h1>

                <input type='submit' value='Log In' onClick={() => login()} className='bg-blue-600 text-white cursor-pointer font-[600] px-10 py-[5px] w-[100%] rounded-full mt-6' />
                <h1 className="text-[.9rem] text-gray-700 font-[600] text-left mt-4">You can also join with</h1>
                <div onClick={() => googleLogin()} className="flex justify-center border-2 gap-2 mt-4 rounded-xl p-2 cursor-pointer hover:bg-gray-200">
                  <img src='./assets/google.png' alt="" className="w-8 mr-auto h-8 ml-4 cursor-pointer rounded-full border-2 border-gray-100" />
                  <p className="mr-auto ml-[-2rem] mt-[2px] text-[1.2rem] text-gray-600 font-[600]">Google</p>
                </div>

              </div>
            </center>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProviderLogin
