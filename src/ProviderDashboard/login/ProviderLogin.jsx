import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { CompanyLogin } from "../../store"
import { AiOutlineMail } from 'react-icons/ai'
import { RiLockPasswordLine } from 'react-icons/ri'

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
        const { data: { data }} = res;
        const { data: {status}} = res;
        console.log('res', status)
        if(status === 'OK'){
            sessionStorage.setItem("LOGIN", "true")
            sessionStorage.setItem("ID", data.id)
            sessionStorage.setItem("TYPE", "USER")
            sessionStorage.setItem("USER", JSON.stringify(data))
            navigate('/providerPanel')
        }
    })
  }

  const handleSubmit = () => {
    // navigate('/')
  }


  return (
    <>
      <div>
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
                <input type="email" name="email" onChange={handleChange} placeholder='Enter Your Email' className='shadow-lg rounded-[12px] text-[.9rem] text-gray-700 font-[500] w-[110%] max-md:w-[100%] pl-[50px] border-2 pt-[7px] pb-[7px]' /><br />
                <div className="relative top-[-1.9rem] left-[-44%] w-[10%]"> <AiOutlineMail />
                </div>
                <input type="password" name="password" onChange={handleChange} placeholder='Password' className='shadow-lg rounded-[12px] text-[.9rem] text-gray-700 font-[500] w-[110%] max-md:w-[100%] pl-[50px] border-2 pt-[7px] pb-[7px]' /><br />
                <div className="relative top-[-1.9rem] left-[-44%] w-[10%]"> <RiLockPasswordLine />
                </div>
                <div className="flex">
                  <div className="flex gap-2">
                    <input type="checkbox" name="" id="" />
                    <p className="text-[.9rem] mt-[3px] font-[500]">Remember me</p>
                  </div>
                  <Link className="ml-auto text-[.9rem] hover:underline text-blue-600"> Forgot Password </Link>
                </div>
                <input type='submit' value='Log In' onClick={() => login()} className='bg-blue-600 text-white cursor-pointer font-[600] px-10 py-[5px] w-[100%] rounded-full mt-6' />
                <h1 className="text-[.9rem] text-gray-700 font-[600] text-left mt-4">You can also join with</h1>
                <div className="flex gap-2 mt-4">
                  <img src='./assets/google.png' alt="" className="w-10 h-10 cursor-pointer rounded-full border-2 border-gray-100" />
                  <img src='./assets/facebook.png' alt="" className="w-10 h-10 cursor-pointer rounded-full border-2 border-gray-100" />
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
