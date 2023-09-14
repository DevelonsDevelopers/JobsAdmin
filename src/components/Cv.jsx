import React from 'react'
import { useSelector } from 'react-redux'
import PortalLayout from '../portalLayout/PortalLayout'

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




  return (
    <PortalLayout >

      <h1 className='text-[3.125rem] font-[800] text-[#000] text-center max-md:text-[2rem] uppercase'>Cv View</h1>
      <div style={{ backgroundColor: 'white', }} className='border-4 w-[80%] m-auto p-4 mt-5'>

        <div style={{ backgroundColor: '#D3D3D3', marginTop: 40, paddingVertical: 10 }} className='w-[40%] m-auto'>
          <h1 style={{ fontSize: 36, color: 'black', textAlign: 'center' }}>Ahmed Hassan</h1>
          <h1 style={{ fontSize: 20, color: 'black', textAlign: 'center' }}>Lahore,Pakistan</h1>
          <div style={{ flexDirection: "row", justifyContent: 'center', gap: 20, marginTop: 5, display: 'flex' }}>
            <h1 style={{ fontSize: 16, color: 'black' }}>111-222-333-444</h1>
            <h1 style={{ fontSize: 16, color: 'black' }}>ahmed@gmail.com</h1>
          </div>
        </div>
        <div className='w-[90%] m-auto'>
          <h1 style={{ backgroundColor: 'gray', height: 1, marginTop: 20 }} ></h1>
          <h1 style={{ textAlign: 'center', fontSize: 16, marginTop: 20 }} className='font-[600]'>SALES AND MARKETING COORDINATOR / ACCOUNT MANAGER</h1>
          <h1 style={{ backgroundColor: 'gray', height: 1, marginTop: 20 }} ></h1>

          <h1 className='my-5' >More than ten years’ experience in sales, marketing, strategy development and customer care | Recent roles include
            business development executive, customer and key accounts manager, and head of sales | Experience in
            telecommunication, FMCG, banking and finance, IT and aviation | Strong team player with good personal skills | Enthusiastic
            and positive attitude | Exceptional attitude for customer care, and ability to deliver sales strategies and marketing training
            including sales planning & implementations | Seeking sales, marketing, or customer service roles in growth-oriented
            organisations</h1>
          <h1 style={{ backgroundColor: 'gray', height: 1, marginTop: 20 }} ></h1>
          <h1 style={{ textAlign: 'center', fontSize: 16, marginTop: 20 }} className='font-[600]'>Key Skills</h1>
          <h1 style={{ backgroundColor: 'gray', height: 1, marginTop: 20 }} ></h1>


          <div className="grid grid-cols-3 ml-[22%] ">
            {data2.map((value) => (
              <p className='mt-2'>{value.skill}</p>
            ))}
          </div>
          <h1 style={{ backgroundColor: 'gray', height: 1, marginTop: 20 }} ></h1>
          <h1 style={{ textAlign: 'center', fontSize: 16, marginTop: 20 }} className='font-[600]'>EMPLOYMENT HISTORY</h1>
          <h1 style={{ backgroundColor: 'gray', height: 1, marginTop: 20 }} ></h1>

          {data.map((item) => (
            <div>
              <div style={{ display: 'flex', gap: 4,marginTop:6 }}>
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

          {data.map((item) => (
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

          {data.map((item) => (
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


        </div>
      </div>
    </PortalLayout>
  )
}

export default Cv
