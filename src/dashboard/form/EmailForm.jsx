import React, { useEffect, useState } from 'react'
import PortalLayout from '../../portalLayout/PortalLayout'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { CreateJobBank } from '../../store/actions/jobBankAction'
import { ToastContainer, toast } from 'react-toastify'

const EmailForm = () => {
  const [email, setEmail] = useState()
  const [val, setVal] = useState([])


  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleAdd = () => {
    const add = [...val, []]
    setVal(add)
  }

  const handleChange = (e, i) => {
    const inputData = [...val]
    inputData[i] = e.target.value
    setVal(inputData)
  }
  // const handleInput = (e, i) => {
  //   const inputData = [...val]
  //   inputData[i]= e.target.value
  //   setVal(inputData)
  // }
  console.log('data', val)

  const handleDelete = (e, i) => {
    e.preventDefault()
    const deleteVal = [...val]
    deleteVal.splice(i, 1)
    setVal(deleteVal)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      dispatch(CreateJobBank(email));
      navigate('/jobbank')
    } else {
      toast.error('Enter Required Data', {
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
  }

  // useEffect(() => {
  //   setVal(...val, val.push(email))
  // }, [email])


  return (
    <PortalLayout>
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
      <h1 className='text-center bg-gradient-to-r from-sky-600 to-cyan-400  text-white font-[600] mb-5 py-4 rounded-xl shadow-md shadow-blue-300 text-[1.5rem]'>ADD Email</h1>
      <div className="bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4 flex flex-col  my-2">
        <form action="">
          <div className="-mx-3 mt-[-1.2rem]  px-[20rem]">
            <div className="w-[100%] px-3 mb-6 md:mb-0 mt-5">
              {/* <button className='cursor-pointer bg-gradient-to-r w-[50%] ml-auto from-sky-600 to-cyan-400 text-white font-[600] py-2 px-[3rem] mt-4 rounded-lg' onClick={() => handleAdd()}>Add</button> */}
              <label className="block mt-3 tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" htmlFor="grid-first-name">
                Email
              </label>
              <input type="text" name="name" onChange={(e) => setEmail(e.target.value)} id="floating_email" className="pl-4 mb-3 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-2xl border-[0.7px] border-gray-600 appearance-none  border-gray-600  focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Tag " required />
              {/* {val?.map((data, i) => {
                return(
                <div className='flex mb-3'>
                <input type="text" value={data} name="name" id="floating_email"  onChange={(e) => handleChange(e,i)} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-s-2xl border-[0.7px] border-gray-600 appearance-none  border-gray-600  focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Tag " required />
                <button className='border-2 border-gray-600 px-2' onClick={(e) => handleDelete(e, i)}>X</button>
                </div>
                )
              })} */}
            </div>
          </div>
          <div className='flex justify-center'>
            <input onClick={handleSubmit} type='submit' className='cursor-pointer bg-gradient-to-r from-sky-600 to-cyan-400 text-white font-[600] py-2 px-[3rem] mt-4 rounded-lg' value="Submit" />
          </div>
        </form>
      </div>



    </PortalLayout>
  )
}

export default EmailForm