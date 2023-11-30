import React, { useState } from 'react'
import PortalLayout from '../portalLayout/PortalLayout'
import { Dialog, DialogActions, DialogContent } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { UpdateAds, getAds } from '../store/actions/ads';

const PaymentGateway = () => {
  const [open, setOpen] = useState(false);

  const [adsData, setAdsData] = useState({ banner_ad: '', interstitial_ad: '', count: '', app_open: '', publisher_id: '' })

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

  useEffect(() => {
    if (ads) {
      setAdsData({ banner_ad: ads?.banner_ad, interstitial_ad: ads?.interstitial_ad, count: ads?.count, app_open: ads?.app_open, publisher_id: ads?.publisher_id })
    }
  }, [ads])

  const onChangeAdsData = (e) => {
    setAdsData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }


  const handleUpdate = () => {
    if ( adsData.banner_ad && adsData.interstitial_ad && adsData.count && adsData.app_open && adsData.publisher_id) {
      dispatch(UpdateAds(adsData, ads.id))
      setOpen(!open)
    }
    else {
      alert('plz fill the data')
    }
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
                <input type="text" value={adsData?.banner_ad} name="banner_ad" onChange={onChangeAdsData} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-600 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Company Name" required />
              </div>
            </div>
            <div className="-mx-3 mt-[-1.2rem] mb-6">
              <div className="w-[100%] px-3 mb-6 md:mb-0 mt-5">
                <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                  Interstitial Ad
                </label>
                <input type="text" value={adsData?.interstitial_ad} name="interstitial_ad" onChange={onChangeAdsData} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-600 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Company Name" required />
              </div>
            </div>
            <div className="-mx-3 mt-[-1.2rem] mb-6">
              <div className="w-[100%] px-3 mb-6 md:mb-0 mt-5">
                <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                  Count
                </label>
                <input type="text" value={adsData?.count} name="count" onChange={onChangeAdsData} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-600 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Company Name" required />
              </div>
            </div>
            <div className="-mx-3 mt-[-1.2rem] mb-6">
              <div className="w-[100%] px-3 mb-6 md:mb-0 mt-5">
                <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                  App Open
                </label>
                <input type="text" value={adsData?.app_open} name="app_open" onChange={onChangeAdsData} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-600 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Company Name" required />
              </div>
            </div>
            <div className="-mx-3 mt-[-1.2rem] mb-6">
              <div className="w-[100%] px-3 mb-6 md:mb-0 mt-5">
                <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                  Publisher ID
                </label>
                <input type="text" value={adsData?.publisher_id} name="publisher_id" onChange={onChangeAdsData} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-600 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Company Name" required />
              </div>
            </div>
          </DialogContent>
          <DialogActions style={{ marginRight: 20 }} >
            <button onClick={handleClose} className=' mt-5 py-2 px-7 bg-red-600 text-white rounded-md font-[600] ' >Cancel</button>
            <button onClick={() => handleUpdate()} className=' mt-5 py-2 px-7 bg-blue-600 text-white rounded-md font-[600] ' >Update</button>
          </DialogActions>
        </Dialog>
      </div>

      <div className='flex max-sm:flex-col justify-center !w-full h-full gap-5 mt-10 px-[1rem] ' >

          <div className=' border-[1px] w-[70%] max-sm:w-full my-[0.5rem] py-[0.5rem] px-[2.5rem] !bg-gray-100 border-gray-600 rounded-md' >
            <center>
              <button onClick={handleClickOpen} className=' mt-5 py-2 px-7 bg-blue-600 text-white rounded-md font-[600] ' >ADs EDIT</button>
            </center>

            <div className=' items-center w-[100%] py-[2rem] '>
              <div className='flex justify-between '>
                <span className='!font-[800] text-[15px]'>Banner Ad:  </span>
                <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >{adsData?.banner_ad}</span>
              </div>
              <hr className='mt-2 mb-2' />
              <div className='flex justify-between '>
                <span className='!font-[800] text-[15px]'>Interstitial Ad:  </span>
                <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >{adsData?.interstitial_ad}</span>
              </div>
              <hr className='mt-2 mb-2' />
              <div className='flex justify-between '>
                <span className='!font-[800] text-[15px] mr-4'>Count:  </span>
                <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >{adsData?.count}</span>
              </div>
              <hr className='mt-2 mb-2' />
              <div className='flex justify-between '>
                <span className='!font-[800] text-[15px]'>App Open:  </span>
                <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >{adsData?.app_open}</span>
              </div>
              <hr className='mt-2 mb-2' />
              <div className='flex justify-between '>
                <span className='!font-[800] text-[15px] mr-4'>Publisher ID:  </span>
                <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >{adsData?.publisher_id}</span>
              </div>
              <hr className='mt-2 mb-2' />
            </div>
          </div>
      </div>
    </PortalLayout>
  )
}

export default PaymentGateway
