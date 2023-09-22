import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Modal, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getJob } from '../../store/actions/jobActions'
import moment from 'moment'

const JobsView = ({ open, setOpen, title, data, ID }) => {

  const handleClose = () => {
    setOpen(!open)
  }

  const dispatch = useDispatch()

  const job = useSelector(state => state.job.job)
  useEffect(() => {
    console.log(job)
  }, [job])

  useEffect(() => {
    dispatch(getJob(ID))
  }, [dispatch, ID])

  return (
    <Dialog className='!h-[full] rounded-lg' onClose={handleClose} aria-labelledby="customized-dialog-title" PaperProps={{ style: { borderRadius: 20, paddingTop: 15, paddingBottom: 15, width: 600, } }} open={open}>
      <DialogTitle id="customized-dialog-title" onClose={handleClose} className='!m-auto !mt-[-1rem] !font-[700] !text-[2.2rem] '>
        {job?.title}
      </DialogTitle>
   <div className=' border-[1px] my-[0.5rem] py-[0.5rem] px-[1.5rem] !bg-gray-100 border-gray-300' >
      <DialogContent className=' items-center w-[100%] '>
        <div className='flex justify-between '>
        <span className='!font-[800] text-[15px]'> Title:  </span>
        <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >{job?.title}</span>
        </div>
        <hr className='mt-2 mb-2' />
        <div className='flex justify-between '>
        <span className='!font-[800] text-[15px]'> Category Name:  </span>
        <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >{job?.category_name}</span>
        </div>
        <hr className='mt-2 mb-2' />
        <div className='flex justify-between '>
        <span className='!font-[800] text-[15px]'> Country Name:  </span>
        <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >{job?.country_name}</span>
        </div>
        <hr className='mt-2 mb-2' />
        <div className='flex justify-between '>
        <span className='!font-[800] text-[15px]'> City Name:  </span>
        <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >{job?.city_name}</span>
        </div>
        <hr className='mt-2 mb-2' />
        <div className='flex justify-between '>
        <span className='!font-[800] text-[15px]'> Company Name:  </span>
        <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >{job?.company_name}</span>
        </div>
        <hr className='mt-2 mb-2' />
        <div className='flex justify-between '>
        <span className='!font-[800] text-[15px]'> Designation:  </span>
        <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >{job?.designation}</span>
        </div>
        <hr className='mt-2 mb-2' />
        <div className='flex justify-between '>
        <span className='!font-[800] text-[15px]'> Role:  </span>
        <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >{job?.role}</span>
        </div>
        <hr className='mt-2 mb-2' />
        <div className='flex justify-between '>
        <span className='!font-[800] text-[15px]'> Experience:  </span>
        <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >{job?.experience}</span>
        </div>
        <hr className='mt-2 mb-2' />
        <div className='flex justify-between '>
        <span className='!font-[800] text-[15px]'> Salary:  </span>
        <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >{job?.salary}</span>
        </div>
        <hr className='mt-2 mb-2' />
        <div className='flex justify-between '>
        <span className='!font-[800] text-[15px]'> Skills:  </span>
        <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >{job?.skills}</span>
        </div>
        <hr className='mt-2 mb-2' />
        <div className='flex justify-between '>
        <span className='!font-[800] text-[15px]'> Qualification:  </span>
        <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >{job?.qualification}</span>
        </div>
        <hr className='mt-2 mb-2' />
        <div className='flex justify-between '>
        <span className='!font-[800] text-[15px]'> Type:  </span>
        <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >{job?.type}</span>
        </div>
        <hr className='mt-2 mb-2' />
        <div className='flex justify-between '>
        <span className='!font-[800] text-[15px]'> Tags:  </span>
        <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >{job?.tags}</span>
        </div>
        <hr className='mt-2 mb-2' />
        <div className='flex justify-between '>
        <span className='!font-[800] text-[15px]'> Workdays:  </span>
        <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >{job?.workdays}</span>
        </div>
        <hr className='mt-2 mb-2' />
        <div className='flex justify-between '>
        <span className='!font-[800] text-[15px]'> Worktime:  </span>
        <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >{job?.worktime}</span>
        </div>
        <hr className='mt-2 mb-2' />
        <div className='flex justify-between '>
        <span className='!font-[800] text-[15px]'> Date:  </span>
        <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >{moment(job?.date).format('YYYY-MM-DD')}</span>
        </div>
        <hr className='mt-2 mb-2' />
        <div className='flex justify-between '>
        <span className='!font-[800] text-[15px]'> Description:  </span>
        <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >{job?.description}</span>
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

export default JobsView