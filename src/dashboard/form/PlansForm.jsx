import React, { useState } from 'react'
import PortalLayout from '../../portalLayout/PortalLayout'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createPlan } from '../../store/actions/planActions';

const PlansForm = () => {
  const [planData, setPlanData] = useState({name: '', amount: '', type: '', accounttype: '', timeperiod: '', purpose: ''});
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const ClickInput = (e) => {
    setPlanData(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit =()=> {
    dispatch(createPlan(planData))
    navigate('/plans')
  }
  return (
    <PortalLayout>
    <h1 className='text-center bg-gradient-to-r from-sky-600 to-cyan-400  text-white font-[600] mb-5 py-4 rounded-xl shadow-md shadow-blue-300 text-[1.5rem]'>ADD PLAN</h1>
 <form class="bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4 flex flex-col  my-2 px-20">

<div class="-mx-3 md:flex mb-6 justify-center">
 <div class="md:w-full px-3">
   <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-Name">
     Name
   </label>
   <input onChange={ClickInput} type="text" name="name" id="floating_email" className="pl-4 block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent rounded-xl p-2 border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Plan Name" required />
 </div>
   
</div>
<div class="-mx-3 md:flex mb-6 justify-center">
 <div class="md:w-[60%] px-3">
   <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-Name">
     Purpose
   </label>
   <select onChange={ClickInput} name='purpose' class="pl-4 block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent rounded-xl p-2 border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" id="grid-state">
                             <option>Purpose 1</option>
                             <option>Purpose 3</option>
                             <option>Purpose 2</option>
                         </select>
       </div>
   <div class="md:w-[60%] px-3">
   <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-Name">
   Account Type
   </label>
   <select onChange={ClickInput}  name='account-type' class="pl-4 block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent rounded-xl p-2 border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" id="grid-state">
                             <option>Type 1</option>
                             <option>Type 2</option>
                             <option>Type 3</option>
                         </select> </div>
</div>
<div class="-mx-3 md:flex mb-6 justify-center">
 <div class="md:w-[60%] px-3">
   <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-Name">
     Amount
   </label>
   <input onChange={ClickInput} type="number" name="amount" id="floating_email" className="pl-4 block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent rounded-xl p-2 border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Amount " required />
 </div>
   <div class="md:w-[60%] px-3">
   <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-Name">
     Type
   </label>
   <input onChange={ClickInput} type="text" name="type" id="floating_email" className="pl-4 block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent rounded-xl p-2 border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Plan Type " required />
 </div>
</div>




<div class="-mx-3 md:flex mb-6 justify-center">
 <div class="md:w-full px-3">
   <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-Name">
     TimePeriod
   </label>
   <input onChange={ClickInput}  type="text" name="timeperiod" id="floating_email" className="pl-4 block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent rounded-xl p-2 border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter TimePeriod" required />
 </div> 
</div>

<div className='flex justify-center'>
<button onClick={handleSubmit} className='bg-gradient-to-r from-sky-600 to-cyan-400 text-white font-[600] py-2 px-[3rem] mt-4 rounded-lg'>Submit</button>
</div>

</form>

</PortalLayout>
  )
}

export default PlansForm
