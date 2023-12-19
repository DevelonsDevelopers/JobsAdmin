import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Modal, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getCity } from '../../store/actions/cityActions'
import { useDispatch, useSelector } from 'react-redux'

const CityModal = ({ open, setOpen, title, data,ID }) => {

  const dispatch = useDispatch()

  const city = useSelector(state => state.city.city)
  useEffect(() => {
    console.log(city)
  }, [city])

  useEffect(() => {
    dispatch(getCity(ID))
  }, [dispatch, ID])

  const handleClose = () => {
    setOpen(!open)
  }

  return (
    <Dialog className='!h-[full] rounded-lg' onClose={handleClose} aria-labelledby="customized-dialog-title" PaperProps={{ style: { borderRadius: 20, paddingTop: 15, paddingBottom: 15, width: 500, } }} open={open}>
      <DialogTitle id="customized-dialog-title" onClose={handleClose} className='!m-auto !mt-[-1rem] !font-[700] !text-[2.2rem] '>
        {city?.name}
      </DialogTitle>
   <div className=' border-[1px] my-[0.5rem] py-[0.5rem] px-[1.5rem] !bg-gray-100 border-gray-600' >
      <DialogContent className=' items-center w-[100%] '>
        <div className='flex justify-between '>
        <span className='!font-[800] text-[15px]'> Name:  </span>
        <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >{city?.name}</span>
        </div>
        <hr className='mt-2 mb-2' />
        <div className='flex justify-between '>
        <span className='!font-[800] text-[15px]'> Country:  </span>
        <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >{city?.country_name}</span>
        </div>
        <hr className='mt-2 mb-2' />
        <div className='flex justify-between '>
        <span className='!font-[800] text-[15px] mr-4'> Description:  </span>
        <span className='font-[600] ml-auto text-gray-600 text-[13px] ' dangerouslySetInnerHTML={{__html: city?.description}} ></span>
        </div>
        <hr className='mt-2 mb-2' />
      </DialogContent>
      </div> 
      <div className="flex justify-center">
        <button
          onClick={handleClose}
          className="bg-black text-white hover:bg-yellow-400 hover:text-black border-2 transition-all ease-in-out duration-75 border-black font-[600] py-2 px-[2.4rem] mt-5 cursor-pointer rounded-[8px] text-[1rem]"
        >
          Close
        </button>
      </div>
    
    </Dialog>
  )
}

export default CityModal