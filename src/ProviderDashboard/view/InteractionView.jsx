import { Dialog, DialogContent, DialogTitle} from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getInteractionById } from '../../store/actions/interactionActions'

const InteractionView = ({ open, setOpen, ID }) => {
  const dispatch = useDispatch()

  const interactionbyId = useSelector(state => state.interaction.interaction)
//   useEffect(() => {
//     console.log('interaction',interactionbyId)
//   }, [interactionbyId])

  useEffect(() => {
    dispatch(getInteractionById(ID))
  }, [dispatch, ID])

  const handleClose = () => {
    setOpen(!open)
  }
  return (
    <Dialog className='!h-[full] rounded-lg' onClose={handleClose} aria-labelledby="customized-dialog-title" PaperProps={{ style: { borderRadius: 20, paddingTop: 15, paddingBottom: 15, width: 500, } }} open={open}>
      <DialogTitle id="customized-dialog-title" onClose={handleClose} className='!m-auto !mt-[-1rem] !font-[700] !text-[2.2rem] '>
        {interactionbyId?.name}
      </DialogTitle>
   <div className=' border-[1px] my-[0.5rem] py-[0.5rem] px-[1.5rem] !bg-gray-100 border-gray-600' >
      <DialogContent className=' items-center w-[100%] '>
        <div className='flex justify-between '>
        <span className='!font-[800] text-[15px]'> Title:  </span>
        <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >{interactionbyId?.title}</span>
        </div>
        <hr className='mt-2 mb-2' />
        <div className='flex justify-between '>
        <span className='!font-[800] text-[15px]'> UserName:  </span>
        <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >{interactionbyId?.username}</span>
        </div>
        <hr className='mt-2 mb-2' />
        <div className='flex justify-between '>
        <span className='!font-[800] text-[15px]'> Email:  </span>
        <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >{interactionbyId?.email}</span>
        </div>
        <hr className='mt-2 mb-2' />
        <div className='flex justify-between '>
        <span className='!font-[800] text-[15px]'> Phone:  </span>
        <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >{interactionbyId?.phone}</span>
        </div>
        <hr className='mt-2 mb-2' />
        <div className='flex justify-between '>
        <span className='!font-[800] text-[15px]'> Role:  </span>
        <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >{interactionbyId?.role}</span>
        </div>
        <hr className='mt-2 mb-2' />
        <div className='flex justify-between '>
        <span className='!font-[800] text-[15px]'> Salary:  </span>
        <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >{interactionbyId?.salary}</span>
        </div>
        <hr className='mt-2 mb-2' />
        <div className='flex justify-between '>
        <span className='!font-[800] text-[15px]'> Type:  </span>
        <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >{interactionbyId?.type}</span>
        </div>
        <hr className='mt-2 mb-2' />
        <div className='flex justify-between '>
        <span className='!font-[800] text-[15px]'> Experience:  </span>
        <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >{interactionbyId?.experience}</span>
        </div>
        <hr className='mt-2 mb-2' />
        <div className='flex justify-between '>
        <span className='!font-[800] text-[15px]'> Skill:  </span>
        <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >{interactionbyId?.experience}</span>
        </div>
        <hr className='mt-2 mb-2' />
        <div className='flex justify-between '>
        <span className='!font-[800] text-[15px]'> Qualification:  </span>
        <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >{interactionbyId?.qualification}</span>
        </div>
        <hr className='mt-2 mb-2' />
        <div className='flex justify-between '>
        <span className='!font-[800] text-[15px]'> WorkDays:  </span>
        <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >{interactionbyId?.workdays}</span>
        </div>
        <hr className='mt-2 mb-2' />
        <div className='flex justify-between '>
        <span className='!font-[800] text-[15px]'> WorkTime:  </span>
        <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >{interactionbyId?.worktime}</span>
        </div>
        <hr className='mt-2 mb-2' />
        <div className='flex justify-between '>
        <span className='!font-[800] text-[15px]'> Address:  </span>
        <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >{interactionbyId?.address}</span>
        </div>
        <hr className='mt-2 mb-2' />
        <div className='flex justify-between '>
        <span className='!font-[800] text-[15px]'> CreatedDate:  </span>
        <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >{interactionbyId?.createddate}</span>
        </div>
        <hr className='mt-2 mb-2' />
        <div className='flex justify-between '>
        <span className='!font-[800] text-[15px]'> Date:  </span>
        <span className='font-[600] ml-auto text-gray-600 text-[13px] ' >{interactionbyId?.date}</span>
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

export default InteractionView