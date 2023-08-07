import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Modal, Typography } from '@mui/material'
import React, { useState } from 'react'

const DeleteModal = ({open, setOpen,}) => {
    // const [open, setOpen] = useState(false)
    // const [openSnackbar, closeSnackbar] = useSnackbar('Customer Deleted Successfully');
    
    const handleClose = () => {
        setOpen(!open)
    }

  return (
    <Dialog className='w-[100%] p-[5%] rounded-lg' onClose={handleClose} aria-labelledby="customized-dialog-title" PaperProps={{ style: { borderRadius: 20, padding: 15 } }} open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose} className='w-[30rem] flex px-[10%]'>
            <div classsName='font-900 '>Delete Confirmation</div>
        </DialogTitle>
        <DialogContent className='my-[4%] mx-[10%] bg-blue-700 text-white rounded-md flex items-center'>
            <Typography className='pt-[4%] '>Are you Sure you want to Delete This?</Typography>
        </DialogContent>
        <center>
            <div className='flex items-center  px-[10%] pb-[5%]  flex-row-reverse'>
            <button className='rounded-xl border-2 bg-blue-700 text-white py-2 px-6 ml-2 ' color='error'>
              Delete
            </button>
            <button variant="text" className='text-black ' onClick={handleClose}>
              Cancel
            </button>
            
          </div>
          </center>
    </Dialog>
  )
}

export default DeleteModal