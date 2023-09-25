import React from 'react'
import PortalLayout from '../portalLayout/PortalLayout'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { CoverLetterByUser } from '../store/actions/coverLetterActions'
import { useLocation } from 'react-router-dom'
import moment from 'moment'
import { CvByUser } from '../store/actions/cvActions'

const data = [
    { role: 'Developer', company: 'Technomentors', timeperiod: '2022-3002' },
    { role: 'Android', company: 'Develons', timeperiod: '2022-3002' },
]

const CoverLetter = () => {


    const params = useLocation();

    const user = params.state.User;
    console.log('user', user);
    const job = params.state.Job;
    console.log('job', job);

    const dispatch = useDispatch()

    const coverLetter = useSelector(state => state.coverLetter.coverLetter)
    useEffect(() => {
        console.log(coverLetter)
    }, [coverLetter])
    useEffect(() => {
        dispatch(CoverLetterByUser(user, job))
    }, [dispatch])

    const cv = useSelector(state => state.cv.cv);

    useEffect(() => {
        console.log(cv)
    }, [cv])
    useEffect(() => {
        dispatch(CvByUser(user));
    }, [dispatch, user]);

    return (
        <PortalLayout>
            <h1 className='text-[3.125rem] font-[800] text-[#000] text-center max-md:text-[2rem] uppercase'>Cv View</h1>
            <div style={{ backgroundColor: 'white', }} className='border-4 w-[80%] m-auto p-4 mt-5'>

                <div className='w-[70%] mt-10  m-auto'>
                    <h1 style={{ fontSize: 36, color: 'black', textAlign: 'center' }}>{cv?.name}</h1>
                    <h1 style={{ fontSize: 20, color: 'black', textAlign: 'center' }}> {cv?.address}</h1>
                    <div style={{ flexDirection: "row", justifyContent: 'center', gap: 20, marginTop: 5, display: 'flex' }}>
                        <h1 style={{ fontSize: 16, color: 'black', width: '10rem' }}>{cv?.phone}</h1>
                        <h1 style={{ fontSize: 16, color: 'black' }}>{cv?.email}</h1>
                    </div>
                </div>
                <hr style={{ backgroundColor: 'black', height: 1, marginTop: 20 }} ></hr>
                <div className='p-[1rem] '>
                    <p className='text-red-500 text-[1rem] font-[700] '>{moment(coverLetter?.date).format("DD MMM YYYY")}</p>
                    <h2 className='text-[1rem] font-[800] mt-5 '>Expression of interest: {coverLetter?.role}</h2>
                    <p className='text-[1rem] ml-5 font-[500] mt-3 '>{coverLetter?.intro}</p>
                    <p className='text-[1rem] ml-5 font-[500] mt-3 '>{coverLetter?.body}</p>

                    <div className='m-5 p-[3rem] bg-gray-300 ' >
                        {cv.careers?.map((value) => {
                            return (
                                <li className='text-black font-[600]' >I was working as a {value.job} in {value.company} from {value.timeperiod}</li>
                            )
                        })}
                    </div>

                    <div className='mt-[2rem]' >
                        {cv.educations?.map((value) => {
                            return(
                                <p className='text-gray-700 font-[600]'>I hold a {value.qualification}  degree completed in {value.timeperiod} at {value.institute}</p>
                            )
                        })}
                    </div>

                    <p className='text-gray-700 font-[600] mt-5'>{cv?.statement}</p>

                    <h2 className='text-gray-900 text-[1.2rem] font-[500] mt-5'>Your's Sincrely</h2>
                    <h2 className='text-gray-900 text-[1.2rem] font-[600] text-right mt-5'>{cv?.name}</h2>

                    <center>
                        <button className='py-2 px-10 bg-blue-500 text-white font-[500] rounded-lg ' >Confirm</button>
                    </center>
                </div>

            </div>
        </PortalLayout>
    )
}

export default CoverLetter
