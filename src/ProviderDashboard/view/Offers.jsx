import { Dialog, DialogContent, DialogTitle } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOffers } from '../../store/actions/offersActions'

const OfferView = ({ open, setOpen, title, data, ID }) => {

  const dispatch = useDispatch()

  const offer = useSelector(state => state.offer.offer)
  useEffect(() => {
    console.log(offer)
  }, [offer])

  useEffect(() => {
    dispatch(getOffers(ID))
  }, [dispatch, ID])

  const handleClose = () => {
    setOpen(!open)
  }
  return (
    <Dialog className='!h-[full] rounded-lg' onClose={handleClose} aria-labelledby="customized-dialog-title" PaperProps={{ style: { borderRadius: 20, paddingTop: 15, paddingBottom: 15, width: 500, } }} open={open}>
      <DialogTitle id="customized-dialog-title" onClose={handleClose} className='!m-auto !mt-[-1rem] !font-[700] !text-[2.2rem] '>
        View
      </DialogTitle>
   <div className=' border-[1px] my-[0.5rem] py-[0.5rem] px-[1.5rem] !bg-gray-100 border-gray-300' >
      <DialogContent className=' items-center w-[100%] '>
        <div className='flex justify-between '>
        <span className='!font-[800] text-[15px]'> Title:  </span>
        <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >{offer?.title}</span>
        </div>
        <hr className='mt-2 mb-2' />
        <div className='flex justify-between '>
        <span className='!font-[800] text-[15px]'> SeekerName:  </span>
        <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >{offer?.seeker_name}</span>
        </div>
        <hr className='mt-2 mb-2' />
        <div className='flex justify-between '>
        <span className='!font-[800] text-[15px]'> UserName:  </span>
        <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >{offer?.username}</span>
        </div>
        <hr className='mt-2 mb-2' />
        <div className='flex justify-between '>
        <span className='!font-[800] text-[15px]'> Email:  </span>
        <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >{offer?.email}</span>
        </div>
        <hr className='mt-2 mb-2' />
        <div className='flex justify-between '>
        <span className='!font-[800] text-[15px]'> Phone:  </span>
        <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >{offer?.phone}</span>
        </div>
        <hr className='mt-2 mb-2' />
        <div className='flex justify-between '>
        <span className='!font-[800] text-[15px]'> Experience:  </span>
        <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >{offer?.experience}</span>
        </div>
        <hr className='mt-2 mb-2' />
        <div className='flex justify-between '>
        <span className='!font-[800] text-[15px]'> Qualification:  </span>
        <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >{offer?.qualification}</span>
        </div>
        <hr className='mt-2 mb-2' />
        <div className='flex justify-between '>
        <span className='!font-[800] text-[15px]'> Role:  </span>
        <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >{offer?.role}</span>
        </div>
        <hr className='mt-2 mb-2' />
        <div className='flex justify-between '>
        <span className='!font-[800] text-[15px]'> Salary:  </span>
        <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >{offer?.salary}</span>
        </div>
        <hr className='mt-2 mb-2' />
        <div className='flex justify-between '>
        <span className='!font-[800] text-[15px]'> offer:  </span>
        <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >{offer?.offer}</span>
        </div>
        <hr className='mt-2 mb-2' />
        <div className='flex justify-between '>
        <span className='!font-[800] text-[15px]'> offerType:  </span>
        <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >{offer?.offerType}</span>
        </div>
        <hr className='mt-2 mb-2' />
        <div className='flex justify-between '>
        <span className='!font-[800] text-[15px]'> Skills:  </span>
        <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >{offer?.skills}</span>
        </div>
        <hr className='mt-2 mb-2' />
        <div className='flex justify-between '>
        <span className='!font-[800] text-[15px]'> Date:  </span>
        <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >{offer?.date}</span>
        </div>
        <hr className='mt-2 mb-2' />
        <div className='flex justify-between '>
        <span className='!font-[800] text-[15px]'> Response:  </span>
        <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >{offer?.response}</span>
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

export default OfferView