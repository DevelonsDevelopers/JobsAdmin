import React, { useState } from 'react'
import { Button, Dialog, DialogContent, DialogContentText, DialogTitle,DialogActions } from '@mui/material'
const CategoriesDialogue = ({ open, handleClose, submitData, title, children }) => {
   
  
  return (
    <div>
     <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button onClick={submitData} color="primary">
          Ok
        </Button>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
    </div>
  )
}

export default CategoriesDialogue
