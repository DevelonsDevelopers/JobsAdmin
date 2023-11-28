import React, { Fragment, useEffect, useState } from 'react'
import { HiMenuAlt2, HiBell, HiOutlineUserCircle, HiLocationMarker } from 'react-icons/hi'
import { BsFillTelephoneFill, BsTelephone } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { Popover, Transition } from '@headlessui/react'
import { AiOutlineMail } from 'react-icons/ai'
import { SlLocationPin } from 'react-icons/sl'
import { BiSolidEditAlt } from 'react-icons/bi'
import { SESSION_ADMIN_ID, SESSION_ADMIN_LOGIN, SESSION_ADMIN_TYPE, SESSION_ADMIN_USER, SESSION_PROVIDER, SESSION_PROVIDER_ID, SESSION_PROVIDER_LOGIN, SESSION_PROVIDER_TYPE, SESSION_USER } from "../../Utils/Constant";
import { IoIosArrowDropup } from "react-icons/io";
import { IoIosArrowDropdown } from "react-icons/io";
import { CiUser } from "react-icons/ci";




const Topbar = ({ showNav, setShowNav }) => {

  const router = useNavigate();

  const [data, setData] = useState();
  const [provider, setProvider] = useState(false);
  const [providerData, setProviderData] = useState();


  const logout = () => {
    sessionStorage.setItem(SESSION_ADMIN_LOGIN, "false")
    sessionStorage.setItem(SESSION_ADMIN_ID, null)
    sessionStorage.setItem(SESSION_ADMIN_TYPE, null)
    sessionStorage.setItem(SESSION_ADMIN_USER, null)
    router('/login')
  }

  useEffect(() => {
    console.log(data)
  }, [data])

  useEffect(() => {
    const isProviderLogin = sessionStorage.getItem(SESSION_PROVIDER_LOGIN)

    if (isProviderLogin === "false" || null) {
      setProvider(false)
      const user = sessionStorage.getItem(SESSION_ADMIN_USER)
      setData(JSON.parse(user))
    } else {
      setProvider(true)
      setProviderData(JSON.parse(sessionStorage.getItem(SESSION_PROVIDER)));
    }
    // setProvider(isProviderLogin);
  }, [ provider, providerData])

  const logoutProvider = () => {
    sessionStorage.setItem(SESSION_PROVIDER_LOGIN, "false")
    sessionStorage.setItem(SESSION_PROVIDER_ID, null)
    sessionStorage.setItem(SESSION_PROVIDER_TYPE, null)
    sessionStorage.setItem(SESSION_PROVIDER, null)
    router('/providerLogin')
  }

  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }


  //   const handleSignOut = () => {
  //     signOut()
  //     router.push('/')
  //   }

  return (
    <div className={` w-full h-16 flex bg-gray-100 justify-between items-center transition-all duration-[400ms] ${showNav ? 'pl-[10.5rem] max-sm:pl-[14rem]' : ""}`}>
      <div className='pl-4 md:pl-16'>
        <HiMenuAlt2 className='h-8 w-10 max-md:h-[20px] max-md:w-[20px]  text-gray-700 cursor-pointer '
          onClick={() => {
            setShowNav(!showNav)
            console.log(data)
          }
          } />
      </div>
      <div className=' items-center  pr-4 md:pr-16'>
        <Popover className="relative">
          <Popover.Button onClick={toggleMenu} className="flex gap-2 outline-none mr-5 md:mr-8 cursor-pointer text-gray-700">
            <CiUser className='h-10  w-10 border-2 rounded-full  border-gray-800 p-2 mt-[6px]' />
            <div>
              {!provider ?
                <div>
                  <p className='text-left text-[.9rem text-gray-700 ]'>{data?.name}</p>
                  <p className=' text-[.9rem text-gray-700 ]'>{data?.email}</p>
                </div>
                :
                <div>
                  <p className=' text-[.9rem text-gray-700 ]'>{providerData?.name}</p>
                  <p className=' text-[.9rem text-gray-700 ]'>{providerData?.email}</p>
                </div>
              }
            </div>
            {isOpen ?
              <IoIosArrowDropup className='mt-[14px] cursor-pointer text-[1.7rem] text-gray-700' />
              :
              <IoIosArrowDropdown className='mt-[14px] cursor-pointer text-[1.7rem] text-gray-700' />
            }

          </Popover.Button>
          <Transition as={Fragment} enter='transition ease-out duration-100' enterFrom='transform scale-95' enterTo='transform scale-100' leave='transition ease-in duration-75' leaveFrom='transform scale-100' leaveTo='transform scale-95'>
            <Popover.Panel className="absolute -right-16 max-sm:right-0 z-50 mt-2 bg-white shadow-sm rounded-md max-w-xs max-sm:w-[230px] w-[250px]">


              <div>
                {/* <div className='flex items-center'>
                  <img src="/assets/profile_thumb.png" alt="" className='w-20 max-sm:w-15 rounded-full h-auto m-auto' />
                  <span className='ml-[1rem] absolute right-[30%] top-[32%] bg-white cursor-pointer rounded-full p-1'><BiSolidEditAlt className='text-[1.5rem] z-[999]' /></span>
                </div> */}
                <h1 className='font-[600] text-[1.5rem] text-center'>{providerData?.name}</h1>
                {provider ?
                  <>
                    <div className='pl-[2rem] py-2 ml-2  rounded-xl'>
                      <i className='items-center flex'><AiOutlineMail /><span className='font-[500] text-[1rem] text-gray-700 ml-[1rem]'>{providerData?.email}</span></i>
                      <i className='items-center flex'><BsTelephone /><span className='font-[500] text-[1rem] text-gray-700 ml-[1rem] mt-2'>{providerData?.phone}</span></i>
                      <i className='items-center flex'><SlLocationPin /><span className='font-[500] text-[1rem] text-gray-700 ml-[1rem] mt-2'>{providerData?.headquater}</span></i>
                    </div>
                    <center>
                      <button onClick={() => logoutProvider()} className='text-center w-[50%] rounded-xl bg-blue-400 hover:bg-blue-500 text-white font-[700] py-1 mb-5 mt-3 shadow-md text-[1rem]'>Logout Provider</button>
                    </center>
                  </>
                  :
                  <>
                    <center>
                      <h1 className='text-center text-black font-[700] mb-3 py-2 text-[1.5rem] w-[50%]'>Profile</h1>
                    </center>
                    <div className='pl-[2rem] py-2 ml-2  rounded-xl'>
                      <i className='items-center flex'><AiOutlineMail /><span className='font-[600] text-[1rem] text-gray-600 ml-[1rem]'>{data?.email}</span></i>
                      <i className='items-center flex'><BsTelephone /><span className='font-[600] text-[1rem] text-gray-600 ml-[1rem] mt-2'>{data?.phone}</span></i>
                      <i className='items-center flex'><SlLocationPin /><span className='font-[600] text-[1rem] text-gray-600 ml-[1rem] mt-2'>{data?.address}</span></i>

                    </div>
                    <center>
                      <button onClick={() => logout()} className='text-center w-[50%] rounded-xl bg-blue-400 hover:bg-blue-500 text-white font-[600] py-1 mb-5 mt-3 shadow-md text-[1rem]'>Logout</button>
                    </center>
                  </>
                }
              </div>


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
