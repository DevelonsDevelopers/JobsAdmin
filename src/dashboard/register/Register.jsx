import React from "react"

const Register = () => {
  return (
    <>
      <div>
        <div className='w-[100%] h-[28rem] bg-blue-600'>
          <center>
            <h1 className='text-white text-[40px] mt-[2.9rem]'>Welcome</h1>
            <h1 className='text-white text-[32px] mt-[0.2rem] w-[30%]'>We Make our AI Automated Platform work for you!</h1></center>
        </div>
        <div className='w-[100%] h-screen bg-gray-400'>
          <center>
            <div className='bg-white rounded-md p-[10px] w-[40%] text-[18px] relative top-[-210px]'><br />
              <input type="text" placeholder='Enter your full name' className='shadow-lg border-slate-100	 rounded-[12px] pr-[176px] pl-[10px] border-[1px] pt-[11px] pb-[11px]' /><br /><br />
              <input type="email" placeholder='Enter Your Email or phone number' className='shadow-lg border-slate-100 rounded-[12px] pr-[176px] pl-[10px] border-[1px] pt-[11px] pb-[11px]' /><br /><br />
              <input type="password" placeholder='Enter Password' className='shadow-lg border-slate-100	 rounded-[12px] pr-[176px] pl-[10px] border-[1px] pt-[11px] pb-[11px]' /><br /><br />
              <input type="password" placeholder='Confirm Password' className='shadow-lg border-slate-100	 rounded-[12px] pr-[176px] pl-[10px] border-[1px] pt-[11px] pb-[11px]' /><br />
              <span className='flex ml-[5.1rem]'>
                <a href="#" className='text-[16px] text-blue-500 mt-[1.35rem] ml-[15.1rem]'>Forgot Password?</a>
              </span><br />
              <button className='pl-[140px] pr-[140px] rounded-[30px] text-[30px] bg-blue-600 text-white pt-[6px] pb-[6px]'>
                Register
              </button><br /><br />
              <span>
                <a href="#" className='text-[17px]'>Already have an account? </a>
                <a href="" className='text-blue-500'>Sign In</a><br />

              </span><br />
            </div>
          </center>
        </div>
      </div>
    </>
  )
}

export default Register
