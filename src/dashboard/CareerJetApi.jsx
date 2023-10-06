import React from 'react'
import PortalLayout from '../portalLayout/PortalLayout'
import { PiBriefcaseLight } from 'react-icons/pi'
import {fetchAustraliaJobs} from "../store";

const CareerJetApi = () => {
    return (
        <PortalLayout>
            <h1 className='text-[3.125rem] font-[800] text-[#000] text-center max-md:text-[2rem]'>CareerJet Api</h1>

            <div className="w-[100%] py-[3rem]  max-md:h-full  max-md:px-2  w-[90%] bg-white  mt-6 m-auto max-md:w-[100%] flex flex-col  bg-gray-100">
                <div className="rounded-xl p-5 flex flex-col items-center gap-8 ">
                    <button onClick={() => fetchAustraliaJobs()} className='w-[30%] h-[8rem] flex flex-col items-center gap-5 bg-[#0047FF] cursor-pointer  max-md:text-[.6rem] py-2 px-[1rem] max-md:px-[1rem] max-md:py-[5px] text-white font-[700] max-md:font-[500] rounded-[1rem]'>
                        <div className="mr-2 mt-4">
                            <PiBriefcaseLight className="w-[2rem] h-[2rem] " />
                        </div>
                        Fetch Australia Jobs
                    </button>
                    <button className='w-[30%] h-[8rem] bg-yellow-500 flex flex-col items-center gap-5 cursor-pointer  max-md:text-[.6rem] py-2 px-[1rem] max-md:px-[1rem] max-md:py-[5px] text-white font-[700] max-md:font-[500] rounded-[1rem]'>
                    <div className="mr-2 mt-4">
                            <PiBriefcaseLight className="w-[2rem] h-[2rem] " />
                        </div>
                        Fetch NewZealand Jobs
                    </button>
                </div>
            </div>
        </PortalLayout>
    )
}

export default CareerJetApi
