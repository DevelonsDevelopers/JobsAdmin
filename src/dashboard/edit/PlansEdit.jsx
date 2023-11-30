import React, { useEffect, useState } from 'react'
import PortalLayout from '../../portalLayout/PortalLayout'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getPlan, updatePlan } from '../../store/actions/planActions';

const PlansEdit = () => {

  const [planData, setPlanData] = useState({ accounttype: '', amount: '', name: '', purpose: '', timeperiod: '', type: '' });
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const params = useLocation();
  const id = params.state.ID;


  const plan = useSelector(state => state.plan.plan)

  useEffect(() => {
    console.log(plan)
  }, [plan])

  useEffect(() => {
    dispatch(getPlan(id))
  }, [dispatch])

  useEffect(() => {
    if (plan) {
      setPlanData({ accounttype: plan?.accounttype, amount: plan?.amount, name: plan?.name, purpose: plan?.purpose, timeperiod: plan?.timeperiod, type: plan?.type })
    }
  }, [plan])

  const handleSubmit = (e) => {
    e.preventDefault()
    if(planData.name && planData.amount && planData.type && planData.accounttype && planData.timeperiod && planData.purpose){
      dispatch(updatePlan(id,planData))
      navigate('/plans')
    }
  }

  const ClickInput = (e) => {
    setPlanData(prev => ({...prev,[e.target.name]: e.target.value}))
  }
  return (
    <PortalLayout>
      <h1 className='text-center bg-black text-white font-[600] mb-5 py-4 rounded-[8px] shadow-lg text-[1.5rem]'>EDIT PLAN</h1>
      <div className="bg-yellow-400 shadow-md rounded-xl px-[10rem] max-md:px-4 py-10 mb-4 flex flex-col my-2">
        <form action="">
          <div className="mt-5">
            <div className="w-[100%] md:mb-0">
              <label className="uppercase block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" htmlFor="grid-first-name">
                Name
              </label>
              <input value={planData.name} onChange={ClickInput} type="text" name="name" id="floating_email" className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-600 appearance-none  border-gray-600  focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Plan Name" required />
            </div>
          </div>
          <div className='grid grid-cols-2 gap-5'>
            <div className="mt-5">
              <div className="w-[100%] md:mb-0">
                <label className="uppercase block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" htmlFor="grid-first-name">
                  Purpose
                </label>
                <input value={planData.purpose} onChange={ClickInput} type="text" name="purpose" id="floating_email" className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-600 appearance-none  border-gray-600  focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Purpose" required />
              </div>
            </div>
            <div className="mt-5">
              <div className="w-[100%] md:mb-0">
                <label className="uppercase block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" htmlFor="grid-first-name">
                  Account Type
                </label>
                <input value={planData.type} onChange={ClickInput} type="text" name="type" id="floating_email" className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-600 appearance-none  border-gray-600  focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter  Account Type " required />
              </div>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-5'>
            <div className="mt-5">
              <div className="w-[100%] md:mb-0">
                <label className="uppercase block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" htmlFor="grid-first-name">
                  Amount
                </label>
                <input value={planData.amount} onChange={ClickInput} type="text" name="amount" id="floating_email" className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-600 appearance-none  border-gray-600  focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Amount" required />
              </div>
            </div>
            <div className="mt-5">
              <div className="w-[100%] md:mb-0">
                <label className="uppercase block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" htmlFor="grid-first-name">
                  Type
                </label>
                <input value={planData.type} onChange={ClickInput} type="text" name="type" id="floating_email" className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-600 appearance-none  border-gray-600  focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Type " required />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div className="md:w-full">
              <label className="uppercase block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" htmlFor="grid-first-name">
                Timeperiod
              </label>
              <input value={planData.timeperiod} onChange={ClickInput} type="text" name="timeperiod" id="floating_email" className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-600 appearance-none  border-gray-600  focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Timeperiod" required />
            </div>
          </div>
          <div className="flex justify-center">
            <input
              type="submit"
              onClick={handleSubmit}
              className="bg-black text-white hover:bg-yellow-400 hover:text-black border-2 transition-all ease-in-out duration-75 border-black font-[600] py-2 px-[2.4rem] mt-5 cursor-pointer rounded-[9px] text-[1rem]"
              value="Submit"
            />
          </div>
        </form>

      </div>

    </PortalLayout>
  )
}

export default PlansEdit
