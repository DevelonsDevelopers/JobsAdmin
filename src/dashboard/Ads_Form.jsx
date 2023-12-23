import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PortalLayout from '../portalLayout/PortalLayout';
import { UpdateAds, getAds } from '../store/actions/ads';

const AdsForm = () => {
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
    const selectOptions = [
        { value: 'on', label: 'ON' },
        { value: 'off', label: 'OFF' },
    ];

    return (
        <PortalLayout>
            <h1 className='text-center text-gray-800 font-[500] text-[2rem] uppercase'>Manage Ads</h1>
            <hr />
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

            <form action="" onSubmit={handleUpdate} className='flex flex-col px-10 my-[5%] py-[5%] border-2 rounded-xl bg-white'>
                <label className="block mb-2 text-gray-600 mt-6 text-[.9rem]" >Banner Ad Status</label>
                <select name="banner_ad_status" 
                // value={adsData?.app_open}
                 onChange={onChangeAdsData} className='border-b-2 focus:outline-none'>
                    {selectOptions.map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                </select>

                <label className="block mb-2 text-gray-600 mt-6 text-[.9rem]" >Interstital Ad Status</label>
                <select name="interstitial_ad_status" 
                // value={adsData?.interstitial_ad}
                 onChange={onChangeAdsData} className='border-b-2 focus:outline-none'>
                    {selectOptions.map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                </select>

                <label className="block mb-2 text-gray-600 mt-6 text-[.9rem]" >AdMob Status</label>
                <select name="admob_status"
                // value={adsData?.banner_ad}
                 onChange={onChangeAdsData} className='border-b-2 focus:outline-none'>
                    {selectOptions.map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                </select>

                <label className="block mb-2 text-gray-600 mt-6 text-[.9rem]" >App Open Status</label>
                <select name="app_open_status" 
                // value={adsData?.banner_ad}
                 onChange={onChangeAdsData} className='border-b-2 focus:outline-none'>
                    {selectOptions.map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                </select>

                <label className="block mb-2 text-gray-600 mt-6 text-[.9rem]" >Rewarded Ad Status</label>
                <select name="rewarded_ad_status" 
                // value={adsData?.banner_ad}
                 onChange={onChangeAdsData} className='border-b-2 focus:outline-none'>
                    {selectOptions.map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                </select>

                {/* <label className="block mb-2 text-gray-600 mt-6 text-[.9rem]" >Rewarded Ad Status</label>
                <select name="rewarded_ad_status" value={adsData?.rewarded_ad_status} onChange={onChangeAdsData} className='border-b-2 focus:outline-none'>
                    {selectOptions.map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                </select> */}

                <h1 className='text-[1.6rem] text-gray-700 mt-6'>Primary Ads</h1>

                <label className="block mb-2 text-[.9rem] text-gray-600 mt-6" >AdMob Banner Ad Unit ID</label>
                <input
                    type="text"
                    value={adsData.banner_ad}
                    name='banner_ad'
                    onChange={onChangeAdsData}
                    placeholder='Enter AdMob Banner Ad Unit ID'
                    className='border-b-2 focus:outline-none focus:border-blue-600 '
                />

                <label className="block mb-2 text-[.9rem] text-gray-600 mt-6" >AdMob Interstital Ad Unit ID</label>
                <input
                    type="text"
                    value={adsData.interstitial_ad}
                    name='interstitial_ad'
                    onChange={onChangeAdsData}
                    placeholder='Enter AdMob Interstital Ad Unit ID'
                    className='border-b-2 focus:outline-none focus:border-blue-600 '
                />

                <label className="block mb-2 text-[.9rem] text-gray-600 mt-6" >AdMob App Count</label>
                <input
                    type="text"
                    value={adsData.count}
                    name='count'
                    onChange={onChangeAdsData}
                    placeholder='Enter AdMob App Open Ad Unit ID'
                    className='border-b-2 focus:outline-none focus:border-blue-600 '
                />

                <label className="block mb-2 text-[.9rem] text-gray-600 mt-6" >AdMob App Open Ad Unit ID</label>
                <input
                    type="text"
                    value={adsData.app_open}
                    name='app_open'
                    onChange={onChangeAdsData}
                    placeholder='Enter AdMob Rewarded Ad Unit ID'
                    className='border-b-2 focus:outline-none focus:border-blue-600 '
                />
                <label className="block mb-2 text-[.9rem] text-gray-600 mt-6" >AdMob Rewarded Ad Unit ID</label>
                <input
                    type="text"
                    value={adsData.publisher_id}
                    name='publisher_id'
                    onChange={onChangeAdsData}
                    placeholder='Enter AdMob Rewarded Ad Unit ID'
                    className='border-b-2 focus:outline-none focus:border-blue-600 '
                />
                {adsData?.editLoading ?
                    <p className='uppercase border-2 rounded-xl px-6 py-1 bg-blue-600 hover:bg-blue-800 text-gray-100 font-[500] mt-5 ml-auto mr-auto cursor-none'> Wait... </p>
                    :
                    < input type="submit" value="Update" className='uppercase border-2 w-[20%] px-6 py-1 rounded-[10px] bg-black hover:opacity-70 text-white font-[600] shadow-md text-[1rem] mt-5 ml-auto mr-auto cursor-pointer' />
                }
            </form>
        </PortalLayout>
    );
}

export default AdsForm;