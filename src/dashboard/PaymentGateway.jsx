import React, { useState } from 'react'
import PortalLayout from '../portalLayout/PortalLayout'
import { Dialog, DialogActions, DialogContent } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { AllPayment, UpdatePaypal, UpdateStripe } from '../store/actions/paymentActions';

const PaymentGateway = () => {
  const [open, setOpen] = useState(false);
  const [openStripe, setOpenStripe] = useState(false)

  const [paypalData, setPaypalData] = useState({paypal_client_id: '', paypal_secret_id: '', paypal_sandbox_url: '', paypal_return_url: '', paypal_cancel_url: ''})
  const [stripeData, setStripeData] = useState({stripe_publisher_key: '', stripe_secret_key: '', stripe_api_version: ''})

  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleStripeOpen = () => {
    setOpenStripe(true);
  };
  const handleStripeClose = () => {
    setOpenStripe(false);
  };

  const payments = useSelector(state => state.payment.payments)

  // useEffect(() => {
  //   console.log(payments)
  // }, [payments])

  useEffect(() => {
    dispatch(AllPayment())
  }, [dispatch])

  useEffect(() => {
    if(payments){
      setPaypalData({paypal_client_id: payments?.paypal_client_id, paypal_secret_id: payments?.paypal_secret_id, paypal_sandbox_url: payments?.paypal_sandbox_url, paypal_return_url: payments?.paypal_return_url, paypal_cancel_url: payments?.paypal_cancel_url})
      setStripeData({stripe_publisher_key: payments?.stripe_publisher_key, stripe_secret_key: payments?.stripe_secret_key, stripe_api_version: payments?.stripe_api_version})
    }
  }, [payments])

  const onChangePaypalData = (e) => {
    setPaypalData(prev => ({...prev, [e.target.name]: e.target.value}))
    // setStripeData(prev => ({...prev, [e.target.name]: e.target.value}))
  }
  // useEffect(() => {
  //   console.log(paypalData)
  // }, [paypalData])
  
  const onChangeStripeData = (e) => {
    setStripeData(prev => ({...prev, [e.target.name]: e.target.value}))
    // setStripeData(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  // console.log(stripeData)

  const SubmitPaypal = () => {
    if(paypalData.paypal_client_id && paypalData.paypal_secret_id && paypalData.paypal_sandbox_url && paypalData.paypal_return_url && paypalData.paypal_cancel_url){
      dispatch(UpdatePaypal(paypalData))
      setOpen(!open)
    }
    else{
      alert('plz fill the data')
    }
  } 

  const SubmitStripe = () => {
    if(stripeData.stripe_publisher_key && stripeData.stripe_secret_key && stripeData.stripe_api_version){
      dispatch(UpdateStripe(stripeData))
      setOpenStripe(!openStripe)
    }else{
      alert('plz fill the data')
    }
  } 
  return (

    <PortalLayout>
      <div className=''>
        <button onClick={handleClickOpen} className=' mt-5 py-2 px-7 bg-blue-600 text-white rounded-md font-[600] ' >Paypal Payment</button>
        <button onClick={handleStripeOpen} className=' mt-5 py-2 px-7 bg-violet-600 text-white rounded-md font-[600] ml-5 ' >Stripe Payment</button>
      </div>
      {/* <center>
          </center> */}

      <Dialog open={open} onClose={handleClose} style={{ maxWidth: '100%' }}>
        <center>
          <h1 className='font-[700] mt-5 text-[2rem] px-[5rem]'>Paypal Payment</h1>
        </center>
        <DialogContent>
          <div className="-mx-3 mt-[-1.2rem] mb-6">
            <div className="w-[100%] px-3 mb-6 md:mb-0 mt-5">
              <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                Client ID
              </label>
              <input  type="text" value={paypalData?.paypal_client_id} name="paypal_client_id" onChange={onChangePaypalData} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Company Name" required />
            </div>
          </div>
          <div className="-mx-3 mt-[-1.2rem] mb-6">
            <div className="w-[100%] px-3 mb-6 md:mb-0 mt-5">
              <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                Secret ID
              </label>
              <input  type="text" value={paypalData?.paypal_secret_id} name="paypal_secret_id" onChange={onChangePaypalData} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Company Name" required />
            </div>
          </div>
          <div className="-mx-3 mt-[-1.2rem] mb-6">
            <div className="w-[100%] px-3 mb-6 md:mb-0 mt-5">
              <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                Sandbox URL
              </label>
              <input  type="text" value={paypalData?.paypal_sandbox_url} name="paypal_sandbox_url" onChange={onChangePaypalData} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Company Name" required />
            </div>
          </div>
          <div className="-mx-3 mt-[-1.2rem] mb-6">
            <div className="w-[100%] px-3 mb-6 md:mb-0 mt-5">
              <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                Return URL
              </label>
              <input  type="text" value={paypalData?.paypal_return_url} name="paypal_return_url" onChange={onChangePaypalData} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Company Name" required />
            </div>
          </div>
          <div className="-mx-3 mt-[-1.2rem] mb-6">
            <div className="w-[100%] px-3 mb-6 md:mb-0 mt-5">
              <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                Cancel URL
              </label>
              <input  type="text" value={paypalData?.paypal_cancel_url} name="paypal_cancel_url" onChange={onChangePaypalData} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Company Name" required />
            </div>
          </div>
        </DialogContent>
        <DialogActions style={{ marginRight: 20 }} >
          <button onClick={handleClose} className=' mt-5 py-2 px-7 bg-red-600 text-white rounded-md font-[600] ' >Cancel</button>
          <button onClick={() => SubmitPaypal()} className=' mt-5 py-2 px-7 bg-blue-600 text-white rounded-md font-[600] ' >Update</button>
        </DialogActions>
      </Dialog>
      <Dialog open={openStripe} onClose={handleStripeClose} style={{ maxWidth: '100%' }}>
        <center>
          <h1 className='font-[700] mt-5 text-[2rem] px-[5rem]'>Stripe Payment</h1>
        </center>
        <DialogContent>
        <div className="-mx-3 mt-[-1.2rem] mb-6">
            <div className="w-[100%] px-3 mb-6 md:mb-0 mt-5">
              <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                Publishable Key
              </label>
              <input  type="text" value={stripeData?.stripe_publisher_key} name="stripe_publisher_key" onChange={onChangeStripeData} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Company Name" required />
            </div>
          </div>
          <div className="-mx-3 mt-[-1.2rem] mb-6">
            <div className="w-[100%] px-3 mb-6 md:mb-0 mt-5">
              <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                Secret Key
              </label>
              <input  type="text" value={stripeData?.stripe_secret_key} name="stripe_secret_key" onChange={onChangeStripeData} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Company Name" required />
            </div>
          </div>
          <div className="-mx-3 mt-[-1.2rem] mb-6">
            <div className="w-[100%] px-3 mb-6 md:mb-0 mt-5">
              <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                Api Version
              </label>
              <input  type="text" value={stripeData?.stripe_api_version} name="stripe_api_version" onChange={onChangeStripeData} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Company Name" required />
            </div>
          </div>
        </DialogContent>
        <DialogActions style={{ marginRight: 20 }} >
          <button onClick={handleStripeClose} className=' mt-5 py-2 px-7 bg-red-600 text-white rounded-md font-[600] ' >Cancel</button>
          <button onClick={() => SubmitStripe()} className=' mt-5 py-2 px-7 bg-blue-600 text-white rounded-md font-[600] ' >Update</button>
        </DialogActions>
      </Dialog>
    </PortalLayout>
  )
}

export default PaymentGateway
