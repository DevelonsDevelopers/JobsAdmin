import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Modal, Typography } from '@mui/material'
import React, { useState } from 'react'

const JobsView = ({ open, setOpen, title, data }) => {

  const handleClose = () => {
    setOpen(!open)
  }

  return (
    <Dialog className='!w-[100%] p-[5%] rounded-lg' onClose={handleClose} aria-labelledby="customized-dialog-title" PaperProps={{ style: { borderRadius: 20, padding: 15 } }} open={open}>
      <DialogTitle id="customized-dialog-title" onClose={handleClose} className='!m-auto'>
        {title}
      </DialogTitle>
   <hr />
      <DialogContent className='my-[4%] mx-[10%] items-center'>
   <div>
        <DialogContentText className='pt-5'>  Name:</DialogContentText>
        <hr />
        <p >{data?.title}</p>
   
 </div>
   <div>
   <DialogContentText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nulla.</DialogContentText>
      
        <p className='pt-5'>  Name:</p>
        <hr />
        <p >{data?.cat}</p>

 </div>
   <div>
        <p className='pt-5'>  Name:</p>
        <hr />
        <p >{data?.city }</p>
   
 </div>
   <div>
        <p className='pt-5'>  Name:</p>
        <hr />
        <p >{data?.role}</p>
       
 </div>
   <div>
        <p className='pt-5'>  Name:</p>
        <hr />
        <p >{data?.company}</p>
       
 </div>
   <div>
        <p className='pt-5'>  Name:</p>
        <hr />
        <p >{data?.status}</p>
     
 </div>
       

      </DialogContent>
      <hr />
        <div className='!m-auto pb-5 pt-5 '>
          <button variant="text" className='text-white bg-blue-500 p-2 rounded-xl ' onClick={handleClose}>
            Cancel
          </button>

        </div>
    
    </Dialog>
  )
}

export default JobsView