import React, { Fragment } from 'react'
import { HiMenuAlt2, HiBell, HiOutlineUserCircle, HiLocationMarker } from 'react-icons/hi'
import { BsFillTelephoneFill, BsTelephone } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { Popover, Transition } from '@headlessui/react'
import { AiOutlineMail } from 'react-icons/ai'
import { SlLocationPin } from 'react-icons/sl'
const Topbar = ({ showNav, setShowNav }) => {

  const router = useNavigate();

  const logout = () => {
    sessionStorage.setItem("LOGIN", "false")
    sessionStorage.setItem("ID", null)
    sessionStorage.setItem("TYPE", null)
    sessionStorage.setItem("USER", null)
    router('/login')
  }

  

  //   const handleSignOut = () => {
  //     signOut()
  //     router.push('/')
  //   }

  return (
    <div className={` w-full h-16 flex justify-between items-center transition-all duration-[400ms] ${showNav ? 'pl-[10.5rem]' : ""}`}>
      <div className='pl-4 md:pl-16'>
        <HiMenuAlt2 className='h-8 w-10 max-md:h-[20px] max-md:w-[20px]  text-gray-700 cursor-pointer ' onClick={() => setShowNav(!showNav)} />
      </div>
      <div className='flex items-center pr-4 md:pr-16'>
        <Popover className="relative">
          <Popover.Button className="outline-none mr-5 md:mr-8 cursor-pointer text-gray-700">
            <HiOutlineUserCircle className='h-6 w-6' />
          </Popover.Button>
          <Transition as={Fragment} enter='transition ease-out duration-100' enterFrom='transform scale-95' enterTo='transform scale-100' leave='transition ease-in duration-75' leaveFrom='transform scale-100' leaveTo='transform scale-95'>
            <Popover.Panel className="absolute -right-16 sm:right-4 z-50 mt-2 bg-white shadow-sm rounded max-w-xs sm:max-w-sm w-[250px]">
              <center>
              <h1 className='text-center text-black font-[700] mb-5 py-2 text-[1.5rem] w-[50%]'>Profile</h1>
              </center>

              <div>
                <div className='flex items-center'>
                  {/* <img src="/assets/profile_thumb.png" alt="" className='w-20 rounded-full h-auto m-auto' /> */}
                  {/* <span className='ml-[1rem]'><button className='text-blue-700 font-[600]'>Upload</button></span> */}
                  
                </div>
                <h1 className='font-[600] text-[1.5rem] text-center'>jane doe</h1>

                <div className='pl-[2rem] py-2 ml-2  rounded-xl'>
                    <i className='items-center flex'><AiOutlineMail/><span className='font-[500] text-[1rem] text-gray-600 ml-[1rem]'>jane@gmail.com</span></i>
                    <i className='items-center flex'><BsTelephone/><span className='font-[500] text-[1rem] text-gray-600 ml-[1rem] mt-2'>0323*********</span></i>
                    <i className='items-center flex'><SlLocationPin/><span className='font-[500] text-[1rem] text-gray-600 ml-[1rem] mt-2'>Lahore</span></i>

                  </div>
              </div>
              <center>
              <button onClick={() => logout()} className='text-center w-[50%] rounded-xl bg-blue-400 text-white font-[700] py-1 mb-5 mt-3 shadow-md text-[1rem]'>Logout</button>
              </center>

            </Popover.Panel>
          </Transition>
        </Popover>
        {/* <Link
                        href={"/"}
                        className="bg-black text-white border-solid border-2 border-black font-bold py-[2%] px-[3%] max-sm:px-2 max-sm:text-[0.4rem] mt-[10px]  ml-3 rounded-md"
                      >
                        WEBSITE
                      </Link> */}
      </div>
    </div>
  )
}

export default Topbar