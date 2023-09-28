import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { LoginUser } from "../../store"

const Login = () => {
  const [loginData, setLoginData] = useState({email: '', password: ''})
  
  const navigate = useNavigate()

  const handleChange = (e) => {
    setLoginData(prev => ({ ...prev, [e.target.name]: e.target.value}))
  }

  useEffect(() => {
		const isLogin = sessionStorage.getItem("LOGIN")
		if (isLogin === "true"){
      navigate('/admin')
		} else {
		}
	}, [])

  const login = () => {
    LoginUser(loginData.email, loginData.password).then(res => {
      const { data: { data } } = res
      const { data: { status } } = res
      console.log(status)
      if (status === 'OK'){
        sessionStorage.setItem("LOGIN", "true")
        sessionStorage.setItem("ID", data.id)
        sessionStorage.setItem("TYPE", "USER")
        sessionStorage.setItem("USER", JSON.stringify(data))
      navigate('/admin')

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
        <div className='w-[100%] h-screen bg-gray-400'>
           <center>
           <div className='bg-white rounded-md p-[10px] w-[40%] text-[18px] relative top-[-250px]'><br />
            <h1 className='text-[22px]'>Log in to your account</h1><br />
            <input type="email" name="email" onChange={handleChange} placeholder='Enter Your Email' className='shadow-lg border-slate-100	 rounded-[12px] pr-[176px] pl-[10px] border-[1px] pt-[11px] pb-[11px]'/><br /><br />
            <input type="password" name="password" onChange={handleChange} placeholder='Password' className='shadow-lg border-slate-100	 rounded-[12px] pr-[176px] pl-[10px] border-[1px] pt-[11px] pb-[11px]'/><br />
            <span className='flex ml-[5.1rem]'>
            <input type="checkbox" name="Stay Logged In" id="" className='mt-[1.6rem]' /><p className='ml-[0.5rem] mt-[1.35rem] text-[15px]'>Stay Logged In</p>
            <a href="#" className='text-[15px] text-blue-500 mt-[1.35rem] ml-[7.5rem]'>Forgot Password?</a>
            </span><br />
            <button onClick={() => login()} className='pl-[140px] pr-[140px] rounded-[30px] text-[30px] bg-blue-600 text-white pt-[6px] pb-[6px]'>
              Log In
            </button>
            
            
            <div className="flex items-center py-4 w-[70%]">
        <div className="flex-grow h-px bg-gray-400"></div> 

        <span className="flex-shrink text-2xl px-4">OR</span>

        <div className="flex-grow h-px bg-gray-400"></div>
    </div>
    <button className='flex pl-[15px] pr-[95px] rounded-[30px] text-[16px] bg-white text-black pt-[12px] pb-[8px] border-[1px] border-black shadow-lg text-center'>
              <img src="../assets/googlelogo.png" alt="" className='mr-[3.8rem]' />
              Continue With Google
            </button><br />
            <button className='flex pl-[15px] pr-[83px] rounded-[30px] text-[16px] bg-white text-black pt-[12px] pb-[8px] border-[1px] border-black shadow-lg text-center'>
              <img src="../assets/facebooklogo.png" alt="" className='mr-[3.8rem]' />
              Continue With Facebook
            </button><br />

           </div>
           </center>
        </div>
      </div>
    </>
  )
}

export default Login
