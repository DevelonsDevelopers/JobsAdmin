import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Modal, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCompany } from '../../store/actions/companyActions'
import { useNavigate } from 'react-router-dom'

const CompanyView = ({ open, setOpen, title, data, ID }) => {
  const dispatch  = useDispatch()
  const navigate = useNavigate()

  const handleClose = () => {
    setOpen(!open)
    // navigate(0)
  }

  const company = useSelector(state => state.company.company)
  useEffect(() => {
    console.log(company)
  }, [company])

  useEffect(() => {
    dispatch(getCompany(ID))
  }, [dispatch, ID])

  return (
    <Dialog className='!h-[full] rounded-lg' onClose={handleClose} aria-labelledby="customized-dialog-title" PaperProps={{ style: { borderRadius: 20, paddingTop: 15, paddingBottom: 15, width: 500, } }} open={open}>
      <DialogTitle id="customized-dialog-title" onClose={handleClose} className='!m-auto !mt-[-1rem] !font-[700] !text-[2.2rem] '>
        {company?.name}
      </DialogTitle>
   <div className=' border-[1px] my-[0.5rem] py-[0.5rem] px-[1.5rem] !bg-gray-100 border-gray-300' >
      <DialogContent className=' items-center w-[100%] '>
        <div className='flex justify-between '>
        <span className='!font-[800] text-[15px]'> Name:  </span>
        <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >{company?.name}</span>
        </div>
        <hr className='mt-2 mb-2' />
        <div className='flex justify-between '>
        <span className='!font-[800] text-[15px]'> Country Name:  </span>
        <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >{company?.country_name}</span>
        </div>
        <hr className='mt-2 mb-2' />
        <div className='flex justify-between '>
        <span className='!font-[800] text-[15px]'> City Name:  </span>
        <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >{company?.city_name}</span>
        </div>
        <hr className='mt-2 mb-2' />
        <div className='flex justify-between '>
        <span className='!font-[800] text-[15px]'> Email:  </span>
        <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >{company?.email}</span>
        </div>
        <hr className='mt-2 mb-2' />
        <div className='flex justify-between '>
        <span className='!font-[800] text-[15px]'> Phone:  </span>
        <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >{company?.phone}</span>
        </div>
        <hr className='mt-2 mb-2' />
        <div className='flex justify-between '>
        <span className='!font-[800] text-[15px]'> Type:  </span>
        <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >{company?.type}</span>
        </div>
        <hr className='mt-2 mb-2' />
        <div className='flex justify-between '>
        <span className='!font-[800] text-[15px]'> Headquater:  </span>
        <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >{company?.headquater}</span>
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

export default CompanyView