import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Modal, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSeeker } from '../../store/actions/seekerActions'

const SeekersView = ({ open, setOpen, title, data, ID }) => {

  const dispatch = useDispatch()

  const seeker = useSelector(state => state.seeker.seeker)
  useEffect(() => {
    console.log(seeker)
  }, [seeker])

  useEffect(() => {
    dispatch(getSeeker(ID))
  }, [dispatch, ID])

  const handleClose = () => {
    setOpen(!open)
  }

  return (
    <Dialog className='!h-[full] rounded-lg' onClose={handleClose} aria-labelledby="customized-dialog-title" PaperProps={{ style: { borderRadius: 20, paddingTop: 15, paddingBottom: 15, width: 500, } }} open={open}>
      <DialogTitle id="customized-dialog-title" onClose={handleClose} className='!m-auto !mt-[-1rem] !font-[700] !text-[2.2rem] '>
        {seeker?.name}
      </DialogTitle>
   <div className=' border-[1px] my-[0.5rem] py-[0.5rem] px-[1.5rem] !bg-gray-100 border-gray-300' >
      <DialogContent className=' items-center w-[100%] '>
        <div className='flex justify-between '>
        <span className='!font-[800] text-[15px]'> Name:  </span>
        <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >{seeker?.name}</span>
        </div>
        <hr className='mt-2 mb-2' />
        <div className='flex justify-between '>
        <span className='!font-[800] text-[15px]'> UserName:  </span>
        <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >{seeker?.username}</span>
        </div>
        <hr className='mt-2 mb-2' />
        <div className='flex justify-between '>
        <span className='!font-[800] text-[15px]'> Email:  </span>
        <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >{seeker?.email}</span>
        </div>
        <hr className='mt-2 mb-2' />
        <div className='flex justify-between '>
        <span className='!font-[800] text-[15px]'> Country:  </span>
        <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >{seeker?.country_name}</span>
        </div>
        <hr className='mt-2 mb-2' />
        <div className='flex justify-between '>
        <span className='!font-[800] text-[15px]'> City:  </span>
        <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >{seeker?.city_name}</span>
        </div>
        <hr className='mt-2 mb-2' />
        <div className='flex justify-between '>
        <span className='!font-[800] text-[15px]'> Gender:  </span>
        <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >{seeker?.gender}</span>
        </div>
        <hr className='mt-2 mb-2' />
        <div className='flex justify-between '>
        <span className='!font-[800] text-[15px]'> Date Of Birth:  </span>
        <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >{seeker?.dob}</span>
        </div>
        <hr className='mt-2 mb-2' />
        <div className='flex justify-between '>
        <span className='!font-[800] text-[15px]'> Phone:  </span>
        <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >{seeker?.phone}</span>
        </div>
        <hr className='mt-2 mb-2' />
        <div className='flex justify-between '>
        <span className='!font-[800] text-[15px]'> Address:  </span>
        <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >{seeker?.address}</span>
        </div>
        <hr className='mt-2 mb-2' />

      </DialogContent>
      </div> 
        <div className='!m-auto py-2 '>
          <button variant="text" className='text-white bg-blue-500 px-8 py-2 rounded-xl !mb-[-3rem] font' onClick={handleClose}>
            Cancel
          </button>

        </div>
    
    </Dialog>
  )
}

export default SeekersView