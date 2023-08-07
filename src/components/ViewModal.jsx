import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Modal, Typography } from '@mui/material'
import React, { useState } from 'react'

const ViewModal = ({open, setOpen,title,data}) => {
    // const [open, setOpen] = useState(false)
    // const [openSnackbar, closeSnackbar] = useSnackbar('Customer Deleted Successfully');
    
    const handleClose = () => {
        setOpen(!open)
    }

  return (
    <Dialog className='w-[100%] p-[5%] rounded-lg' onClose={handleClose} aria-labelledby="customized-dialog-title" PaperProps={{ style: { borderRadius: 20, padding: 15 } }} open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose} className='w-[30rem] flex px-[10%]'>
            <div classsName='font-900 '>{title}</div>
        </DialogTitle>
        <DialogContent className='my-[4%] mx-[10%] flex gap-5 items-center'>
            <h1 className='pt-[4%] '>{data?.name}</h1>
            <p className='pt-[4%] '>{data?.count}</p>
        </DialogContent>
        <center>
            <div className='flex items-center  px-[10%] pb-[5%]  flex-row-reverse'>
            <button variant="text" className='text-black ' onClick={handleClose}>
              Cancel
            </button>
            
          </div>
          </center>
    </Dialog>
  )
}

export default ViewModal