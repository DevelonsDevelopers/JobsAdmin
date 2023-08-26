import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Modal, Typography } from '@mui/material'
import React, { useState } from 'react'

const CompanyView = ({ open, setOpen, title, data }) => {

  const handleClose = () => {
    setOpen(!open)
  }

  return (
    <Dialog className='w-[100%] p-[5%] rounded-lg' onClose={handleClose} aria-labelledby="customized-dialog-title" PaperProps={{ style: { borderRadius: 20, padding: 15 } }} open={open}>
      <DialogTitle id="customized-dialog-title" onClose={handleClose} className='!m-auto !mt-[-1rem]'>
        {title}
      </DialogTitle>
   <div className='mt-[-.7rem] border-[2px] rounded-md border-gray-400' >
      <DialogContent className='my-[4%]  items-center w-[100%]'>
        <p className='font-[700]'>  City Name:  </p>
        <hr className='mt-2 mb-2' />
        <p className='font-[600] text-[14px]' >{data?.name}</p>
        <DialogContentText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nulla.</DialogContentText>
        <p className='pt-4 font-[600] text-[14px]'> Total Jobs Count: </p>
        <hr />
        <p >{data?.count}</p>
        <DialogContentText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nulla.</DialogContentText>
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

export default CompanyView