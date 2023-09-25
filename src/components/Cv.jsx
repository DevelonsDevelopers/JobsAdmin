import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PortalLayout from '../portalLayout/PortalLayout'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Modal, TextField, Typography } from '@mui/material'
import { useLocation } from 'react-router-dom'
import { CvByUser } from '../store/actions/cvActions'

const data = [
  { skill: 'React', job: 'developer', timeperiod: '2002-2023', company: 'dev', address: 'lahore', qualification: 'Matric', institute: 'Lahore,College', course: 'React' },
]
const data2 = [
  { skill: 'react' },
  { skill: 'react' },
  { skill: 'react' },
  { skill: 'react' },
  { skill: 'react' },
]


const Cv = () => {

  const [open, setOpen] = useState(false);
  const dispatch = useDispatch()

  const params = useLocation();

  const id = params.state.Id;

  console.log(id)

  const cv = useSelector(state => state.cv.cv);

  useEffect(() => {
      console.log(cv)
  }, [cv])
  useEffect(() => {
      dispatch(CvByUser(id));
  }, [dispatch, id]);


  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  return (
    <PortalLayout >

      <h1 className='text-[3.125rem] font-[800] text-[#000] text-center max-md:text-[2rem] uppercase'>Cv View</h1>
      <div style={{ backgroundColor: 'white', }} className='border-4 w-[80%] m-auto p-4 mt-5'>

        <div style={{ backgroundColor: '#D3D3D3', marginTop: 40, paddingVertical: 10 }} className='w-[50%] m-auto'>
          <h1 style={{ fontSize: 36, color: 'black', textAlign: 'center' }}>{cv?.name}</h1>
          <h1 style={{ fontSize: 20, color: 'black', textAlign: 'center' }}>{cv?.address}</h1>
          <div style={{ flexDirection: "row", justifyContent: 'center', gap: 20, marginTop: 5, display: 'flex' }}>
            <h1 style={{ fontSize: 16, color: 'black' }}>{cv?.phone}</h1>
            <h1 style={{ fontSize: 16, color: 'black' }}>{cv?.email}</h1>
          </div>
        </div>
        <div className='w-[90%] m-auto'>
          <h1 style={{ backgroundColor: 'gray', height: 1, marginTop: 20 }} ></h1>
          <h1 style={{ textAlign: 'center', fontSize: 16, marginTop: 20 }} className='font-[600]'>{cv?.role}</h1>
          <h1 style={{ backgroundColor: 'gray', height: 1, marginTop: 20 }} ></h1>

          <h1 className='my-5' >{cv?.statement}</h1>
          <h1 style={{ backgroundColor: 'gray', height: 1, marginTop: 20 }} ></h1>
          <h1 style={{ textAlign: 'center', fontSize: 16, marginTop: 20 }} className='font-[600]'>Key Skills</h1>
          <h1 style={{ backgroundColor: 'gray', height: 1, marginTop: 20 }} ></h1>


          <div className="grid grid-cols-3 ml-[22%] ">
            {cv?.skills?.map((value) => (
              <p className='mt-2'>{value.skill}</p>
            ))}
          </div>
          <h1 style={{ backgroundColor: 'gray', height: 1, marginTop: 20 }} ></h1>
          <h1 style={{ textAlign: 'center', fontSize: 16, marginTop: 20 }} className='font-[600]'>EMPLOYMENT HISTORY</h1>
          <h1 style={{ backgroundColor: 'gray', height: 1, marginTop: 20 }} ></h1>

          {cv.careers?.map((item) => (
            <div>
              <div style={{ display: 'flex', gap: 4, marginTop: 6 }}>
                <h1 className='font-[600]'>
                  {item.job}
                </h1>
                <h1>|</h1>
                <h1 >
                  {item.timeperiod}
                </h1>
              </div>
              <h1 className='my-[2px]'>
                <span className='font-[600]'> Company </span> : {item.company}
              </h1>
              <div style={{ flexDirection: 'row', display: 'flex' }} >
                <h1>
                  <span className='font-[600]'> Address  </span> : {item.address}
                </h1>
              </div>
              <h1 style={{ marginTop: 6, marginBottom: 6 }} className='text-right mr-10'>
                Phone :{item.phone}
              </h1>
              <h1 style={{ backgroundColor: 'black', height: 1, paddingHorizontal: 20 }}></h1>
            </div>
          ))}


          <h1 style={{ textAlign: 'center', fontSize: 16, marginTop: 20 }} className='font-[600]'>QUALIFICATIONS</h1>
          <h1 style={{ backgroundColor: 'gray', height: 1, marginTop: 20 }} ></h1>

          {cv.educations.map((item) => (
            <div >
              <div style={{ flexDirection: 'row', display: 'flex', gap: 5 }}>
                <h1 className='font-[600]'>
                  {item.qualification}
                </h1>
                <h1>|</h1>
                <h1 >
                  {item.institute}
                </h1>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', }}>
                <h1 style={{ marginLeft: 'auto' }}>
                  {item.timeperiod}
                </h1>
              </div>

            </div>
          ))}

          <h1 style={{ textAlign: 'center', fontSize: 16, marginTop: 20 }} className='font-[600]'>TRAINING COURSES</h1>
          <h1 style={{ backgroundColor: 'gray', height: 1, marginTop: 20 }} ></h1>

          {cv.courses?.map((item) => (
            <div >
              <div style={{ flexDirection: 'row', display: 'flex', gap: 5 }}>
                <h1 className='font-[600]'>
                  {item.course}
                </h1>
                <h1>|</h1>
                <h1 >
                  {item.timeperiod}
                </h1>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', }}>
                <h1 style={{ marginLeft: 'auto' }}>
                  {item.institute}
                </h1>
              </div>

            </div>
          ))}
          <center>
            <button onClick={handleClickOpen} className=' mt-5 py-2 px-7 bg-blue-600 text-white rounded-md font-[600] ' >Job Hire Proposal</button>
          </center>

          <Dialog open={open} onClose={handleClose} style={{ maxWidth: '100%'  }}>
            <center>
            <h1 className='font-[700] mt-5 text-[2rem] px-[5rem]'>Job Hire Proposal</h1>
            </center>
            <DialogContent>
              <div className="-mx-3  mt-5 mb-6">
                <div className="w-[100%] px-3 mb-6 md:mb-0 mt-0">
                  <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                    Proposal offer
                  </label>
                  {/* <input type="text" name="type" id="floating_email" onChange={ClickInput} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Type" required /> */}
                  <select name='type' class="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" id="grid-state">
                    <option>Select Options</option>
                    <option>Invitation for Interview</option>
                    <option>Request for inquiry</option>
                    <option>Hiring offer</option>
                  </select>
                </div>
              </div>

              <div className="-mx-3 mt-5 ">
                  <div className="w-[100%]  px-3">
                    <label className="block text-left uppercase tracking-wide text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-Name">
                      Proposal
                    </label>
                    <textarea name='proposal' rows='7'  minLength='30' maxLength='500'  className="appearance-none block w-full bg-gray-50  border-gray-lighter rounded py-3 px-4 rounded-[9px] mb-3 border-[0.7px] border-gray-300 appearance-none   border-gray-600  focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer text-[14px]" id="grid-Name" type="text" placeholder="Enter Description" />
                  </div>
                </div>
            </DialogContent>
            <DialogActions style={{marginRight: 20}} >
              <button  onClick={handleClose} className=' mt-5 py-2 px-7 bg-red-600 text-white rounded-md font-[600] ' >Cancel</button>
              <button  onClick={handleClose} className=' mt-5 py-2 px-7 bg-blue-600 text-white rounded-md font-[600] ' >Submit</button>
            </DialogActions>
          </Dialog>




        </div>
      </div>
    </PortalLayout>
  )
}

export default Cv
