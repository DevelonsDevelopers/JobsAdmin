import React from 'react'
import PortalLayout from '../portalLayout/PortalLayout'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllJobsApi } from '../store/actions/jobsApiActions'
import DeleteModal from '../components/DeleteModal'
import { DeleteJob } from '../store/actions/jobActions'

const Data = [
  {
    "locations": "East Melbourne, VIC",
    "site": "",
    "date": "Fri, 06 Oct 2023 07:27:56 GMT",
    "url": "https://jobviewtrack.com/en-gb/job-1c12416948080618420659432c1307110052763b1d12585f1d785d663c07401a003618632a150c56111a6b374f47545b4816166f1440105a5d/1394c8cf2a8b150ef6b90441a93dc5a5.html",
    "title": "Delivery Driver - Sign Up and Start Earning",
    "description": "Your time. Your Goals.   What is DoorDash   Available in 63 cities in Australia and over 4,000 cities across the world , DoorDash connects local businesses and local drivers (called Dashers) with opportunities to earn, work, and live.   As ...",
    "company": "DoorDash",
    "salary": ""
  },
  {
    "locations": "East Melbourne, VIC",
    "site": "",
    "date": "Fri, 06 Oct 2023 07:27:56 GMT",
    "url": "https://jobviewtrack.com/en-gb/job-1c12416948080618420659432c1307110052763b1d12585f1d785d663c07401a003618632a150c56111a6b374f47545b4816166f1440105a5d/1394c8cf2a8b150ef6b90441a93dc5a5.html",
    "title": "Delivery Driver - Sign Up and Start Earning",
    "description": "Your time. Your Goals.   What is DoorDash   Available in 63 cities in Australia and over 4,000 cities across the world , DoorDash connects local businesses and local drivers (called Dashers) with opportunities to earn, work, and live.   As ...",
    "company": "DoorDash",
    "salary": ""
  },
]

const ApiJobs = () => {
  const [search, setSearch] = useState('')
  const [open, setOpen] = useState(false);
  const [deleteId, setDeleteId] = useState();

  const dispatch = useDispatch()


  const JobsApi = useSelector(state => state.apiJob.apiJobs)
  const loading = useSelector(state => state.city.isLoading)

  useEffect(() => {
    console.log(JobsApi)
  }, [JobsApi])

  useEffect(() => {
    dispatch(getAllJobsApi())
  }, [dispatch])


  // nodata===============
  const [nodata, setNodata] = useState(false)
  useEffect(() => {
    if (JobsApi?.length === 0) {
      setNodata(true)
    } else {
      setNodata(false)

    }
  }, [JobsApi])

  const handleDelete = (id) => {
    setDeleteId(id)
    setOpen(!open)
  }

  const deleteJob = (id) => {
    dispatch(DeleteJob(id))
    setOpen(!open)
  }


  //pagination=============================
  const [currentPage, setCurrentPage] = useState(1)
  const numbersPerPage = 10;
  const [records, setRecords] = useState()
  const [nPage, setPage] = useState()
  const [Numbers, setNumbers] = useState()
  const [lastIndex, setLastIndex] = useState()
  const [firstIndex, setFirstIndex] = useState()

  useEffect(() => {
    setLastIndex(currentPage * numbersPerPage);
  }, [currentPage])

  useEffect(() => {
    setFirstIndex(lastIndex - numbersPerPage);
  }, [lastIndex])

  useEffect(() => {
    if (JobsApi) {
      setRecords(JobsApi.slice(firstIndex, lastIndex));
      setPage(Math.ceil(JobsApi.length / numbersPerPage));
    }
  }, [JobsApi, firstIndex])

  useEffect(() => {
    if (nPage) {
      setNumbers([...Array(nPage + 1).keys()].slice(1))
    }
  }, [nPage])


  let pagination = [], i = 1;

  while (i <= nPage) {

    if (i <= 1 ||
      i >= nPage - 2 ||
      i >= currentPage - 1 && i <= currentPage + 1) {
      pagination.push(i);
      i++;
    } else {
      pagination.push('...');

      //jump to the next page to be linked in the navigation
      i = i < currentPage ? currentPage - 1 : nPage - 2;
    }
  }
  const [select, setSelect] = useState(0)


  return (
    <PortalLayout>
      {loading ?
        <center> <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
        </div>
        </center> :
        <>
          {nodata ? <center> <div className=" pt-[10%]" > <img src="./assets/nodata3.png" alt="no image" className="opacity-75 w-[60%] h-[50%] mt-[-10%]" />
            <h1 className=" text-[2rem] text-gray-500 mt-[-4rem] pt-10" >No Data Found</h1>
            <div className='mt-[2rem]'>   <Link to='/cities/add' className=" py-[1.3%] px-[3%]  text-white text-sm bg-blue-600  rounded-[2rem] "  >   Add New  </Link>
            </div>

          </div> </center>
            :
            <>
              <h1 className='text-[3.125rem] font-[800] text-[#000] text-center max-md:text-[2rem] uppercase'>Api Jobs</h1>

              <div className="w-[100%] max-md:h-full  max-md:px-2 flex flex-col justify-center bg-gray-100">

                <div className='flex justify-center mt-[3rem] w-[90%] m-auto'>
                  <input type="search" name="" id="" placeholder='Search...' onChange={(e) => setSearch(e.target.value)} className='border-2 border-gray-600 pl-[4rem]  pr-[1rem] rounded-[1.0625rem] py-2  w-[27.8125rem] mr-auto max-md:py-[1px] max-md:w-[15rem] max-md:text-[0.7rem]' />
                </div>
                <table className="rounded-xl p-5 bg-white w-[90%] m-auto max-md:w-[100%]  mt-6 ">

                <DeleteModal open={open} setOpen={setOpen} ID={deleteId} deleteFunction={deleteJob} />

                  <thead className='mt-10'>

                    <tr className=" uppercase  text-sm leading-normal w-[100%]">
                      <th className="py-[2%] border-r-[1px] border-b-[2px] border-b-black  w-[3%] max-md:text-[.6rem] max-md:font-[400] text-center max-md:w-[2%]  text-[13px]">ID </th>
                      <th className="py-[2%] border-r-[1px] border-b-[2px] border-b-black  w-[10%] max-md:text-[.6rem] max-md:font-[400] text-center max-md:w-[2%] text-[13px]">Title</th>
                      <th className="py-[2%] border-r-[1px] border-b-[2px] border-b-black w-[1%] max-md:text-[.6rem] max-md:font-[400] text-center max-md:w-[3%] text-[13px]">Salary</th>
                      <th className="py-[2%] border-r-[1px] border-b-[2px] border-b-black w-[1%] max-md:text-[.6rem] max-md:font-[400] text-center max-md:w-[3%] text-[13px]">Location</th>
                      <th className="py-[2%] border-r-[1px] border-b-[2px] border-b-black  w-[2%] max-md:text-[.6rem] max-md:font-[400] text-center text-[13px]">Actions</th>
                    </tr>

                  </thead>

                  {records?.filter((value) => {
                    return search.toLowerCase() === '' ?
                      value : value.name.toLowerCase().includes(search)
                  }).map((value, index) => (
                    <tbody className="text-[#000000] text-sm font-light w-[100%] bg-white" key={value.id} >
                      <tr className='' >
                        <td className="py-[2%] w-[3%]   border-r-[1px] border-t-[1px] text-center">
                          <span className="font-bold max-md:text-[.7rem] text-[13px] text-blue-500">{value.id}</span>
                        </td>
                        <td className="py-[2%] w-[10%]   border-r-[1px] border-t-[1px] text-center">
                          <span className=" max-md:text-[.7rem] text-[13px] font-[350]">{value.title}</span>
                        </td>
                        <td className="py-[1%] px-[1%] w-[2%]  max-md:text-[.7rem]  border-r-[1px] border-t-[1px]   text-center">
                          <span className=" max-md:text-[.7rem] text-[13px] font-[350]">{value.salary}</span>
                        </td>
                        <td className="py-[1%] w-[2%]  max-md:text-[.7rem]  border-r-[1px] border-t-[1px]   text-center">
                          <span className=' text-[13px] font-[350]'>{value.locations}</span>
                        </td>
                        <div className="w-4 mr-2 transform hover:text-blue-500  hover:scale-110 ml-auto mr-auto mt-6 " onClick={() => handleDelete(value.id)}>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="red">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </div>

                        {/* <td className="py-[2%] max-md:text-[.7rem] w-[2%] border-r-[1px] border-t-[1px] text-center">
                          <span onClick={() => UpdateStatus(value.id, value.status)} className={`bg-green-600 text-white font-[500] py-[3px] px-[10px] max-md:w-[8%] rounded-xl text-[0.6rem] max-md:py-1 max-md:px-2 max-md:text-[0.6rem] cursor-pointer ${value.status === 1 ? 'bg-green-500' : 'bg-red-500'} `}>{value.status === 1 ? 'Enable' : 'Disable'}</span>
                        </td> */}
                        {/* <td className="py-[2%] w-[2%] max-md:text-[.7rem]  border-r-[1px] border-t-[1px]   text-center">
                          <div className="flex item-center justify-center gap-3">

                            <div className="w-4 mr-2 transform hover:text-blue-500  hover:scale-110" onClick={() => handleEdit(value.id)}>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="blue">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                              </svg>
                            </div>
                            </div>
                            </td>

                            <td className="py-[2%] w-[1%] max-md:text-[.7rem]  border-t-[1px]   ">
                            <div className="w-4 m-auto transform hover:text-blue-500  hover:scale-110 " onClick={() => handleClick(value.id)}>   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            </div>
                          </td> */}

                      </tr>

                    </tbody>
                  ))}
                </table>
                <nav className='m-auto mt-5' >
                  <ul className="flex items-center -space-x-px h-10 text-base">
                  <li>
                      <Link to="#" onClick={prevPage} className="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-600 rounded-l-lg hover:bg-gray-100 hover:text-gray-700  " >
                        <span className="sr-only">Previous</span>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                        </svg>
                      </Link>
                    </li>
                    {pagination?.map((n, index) => (<li><Link to="#" onClick={() => { setSelect(index); changeCurrentPage(n) }}
                      className={` ${select === index ? 'bg-cyan-400 text-white hover:text-white' : 'bg-gray-100'} flex items-center justify-center px-4 h-10 leading-tight text-gray-500 border border-gray-600  hover:text-gray-700 `} >{n}</Link>
                    </li>))}
                    <li>
                      <Link to="#" onClick={nextPage} className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-600 rounded-r-lg hover:bg-gray-100 hover:text-gray-700  "> <span className="sr-only">Next</span><svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"> <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" /> </svg></Link>
                    </li>
                  </ul>
                </nav>



                <center>
                </center>
              </div>
            </>}
        </>}

    </PortalLayout>
  )
  //pagination====================
  function prevPage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      setSelect(state => state - 1 )

    }
  }
  function changeCurrentPage(id) {
    setCurrentPage(id)
  }
  function nextPage() {
    if (currentPage !== nPage) {
      setCurrentPage(currentPage + 1)
      setSelect(state => state + 1 )

    }
  }
}

export default ApiJobs
