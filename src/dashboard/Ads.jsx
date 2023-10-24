import React, { useState } from 'react'
import PortalLayout from '../portalLayout/PortalLayout'
import { Dialog, DialogActions, DialogContent } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { AllPayment, UpdatePaypal, UpdateStripe } from '../store/actions/paymentActions';
import { getAds } from '../store/actions/ads';

const PaymentGateway = () => {
  const [open, setOpen] = useState(false);

  const [adsData, setAdsData] = useState({ paypal_client_id: '', paypal_secret_id: '', paypal_sandbox_url: '', paypal_return_url: '', paypal_cancel_url: '' })

  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  const ads = useSelector(state => state.ad.ads)

  useEffect(() => {
    console.log(ads)
  }, [ads])

  useEffect(() => {
    dispatch(getAds())
  }, [dispatch])

  // useEffect(() => {
  //   if (ads) {
  //     setAdsData({ paypal_client_id: payments?.paypal_client_id, paypal_secret_id: payments?.paypal_secret_id, paypal_sandbox_url: payments?.paypal_sandbox_url, paypal_return_url: payments?.paypal_return_url, paypal_cancel_url: payments?.paypal_cancel_url })
  //     setStripeData({ stripe_publisher_key: payments?.stripe_publisher_key, stripe_secret_key: payments?.stripe_secret_key, stripe_api_version: payments?.stripe_api_version })
  //   }
  // }, [payments])

  const onChangePaypalData = (e) => {
    setAdsData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }



  return (

    <PortalLayout>

      <div className=''>
        {/* <center>
          </center> */}

        <Dialog open={open} onClose={handleClose} style={{ maxWidth: '100%' }}>
          <center>
            <h1 className='font-[700] mt-5 text-[2rem] px-[5rem]'>Aiming Down Sights</h1>
          </center>
          <DialogContent>
            <div className="-mx-3 mt-[-1.2rem] mb-6">
              <div className="w-[100%] px-3 mb-6 md:mb-0 mt-5">
                <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                  Banner Ad
                </label>
                <input type="text" name="paypal_client_id" onChange={onChangePaypalData} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Company Name" required />
              </div>
            </div>
            <div className="-mx-3 mt-[-1.2rem] mb-6">
              <div className="w-[100%] px-3 mb-6 md:mb-0 mt-5">
                <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                  Interstitial Ad
                </label>
                <input type="text" name="paypal_secret_id" onChange={onChangePaypalData} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Company Name" required />
              </div>
            </div>
            <div className="-mx-3 mt-[-1.2rem] mb-6">
              <div className="w-[100%] px-3 mb-6 md:mb-0 mt-5">
                <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                  Count
                </label>
                <input type="text" name="paypal_sandbox_url" onChange={onChangePaypalData} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Company Name" required />
              </div>
            </div>
            <div className="-mx-3 mt-[-1.2rem] mb-6">
              <div className="w-[100%] px-3 mb-6 md:mb-0 mt-5">
                <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                  App Open
                </label>
                <input type="text" name="paypal_return_url" onChange={onChangePaypalData} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Company Name" required />
              </div>
            </div>
            <div className="-mx-3 mt-[-1.2rem] mb-6">
              <div className="w-[100%] px-3 mb-6 md:mb-0 mt-5">
                <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                  Publisher ID
                </label>
                <input type="text" name="paypal_cancel_url" onChange={onChangePaypalData} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Company Name" required />
              </div>
            </div>
          </DialogContent>
          <DialogActions style={{ marginRight: 20 }} >
            <button onClick={handleClose} className=' mt-5 py-2 px-7 bg-red-600 text-white rounded-md font-[600] ' >Cancel</button>
            <button  className=' mt-5 py-2 px-7 bg-blue-600 text-white rounded-md font-[600] ' >Update</button>
          </DialogActions>
        </Dialog>
      </div>

      <div className='flex max-sm:flex-col justify-center !w-full h-full gap-5 mt-10 px-[1rem] ' >

          <div className=' border-[1px] w-[70%] max-sm:w-full my-[0.5rem] py-[0.5rem] px-[2.5rem] !bg-white border-gray-300 rounded-md' >
            <center>
              <button onClick={handleClickOpen} className=' mt-5 py-2 px-7 bg-blue-600 text-white rounded-md font-[600] ' >ADs EDIT</button>
            </center>

            <div className=' items-center w-[100%] py-[2rem] '>
              <div className='flex justify-between '>
                <span className='!font-[800] text-[15px]'>Banner Ad:  </span>
                <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >hello</span>
              </div>
              <hr className='mt-2 mb-2' />
              <div className='flex justify-between '>
                <span className='!font-[800] text-[15px]'>Interstitial Ad:  </span>
                <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >hello</span>
              </div>
              <hr className='mt-2 mb-2' />
              <div className='flex justify-between '>
                <span className='!font-[800] text-[15px] mr-4'>Count:  </span>
                <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >hello</span>
              </div>
              <hr className='mt-2 mb-2' />
              <div className='flex justify-between '>
                <span className='!font-[800] text-[15px]'>App Open:  </span>
                <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >hello</span>
              </div>
              <hr className='mt-2 mb-2' />
              <div className='flex justify-between '>
                <span className='!font-[800] text-[15px] mr-4'>Publisher ID:  </span>
                <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >hello</span>
              </div>
              <hr className='mt-2 mb-2' />
            </div>
          </div>
      </div>
    </PortalLayout>
  )
}

export default PaymentGateway
