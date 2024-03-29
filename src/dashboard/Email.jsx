import React, { useEffect, useState } from 'react'
import PortalLayout from '../portalLayout/PortalLayout'
import DeleteModal from '../components/DeleteModal'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AllCities, DeleteCity, cityStatus } from '../store/actions/cityActions'
import CityModal from './view/CitiyView'
import { AllJobBanks, DeleteJobBank } from '../store/actions/jobBankAction'


const Cities = () => {

  const [search, setSearch] = useState('')

  const [open, setOpen] = useState(false);
  const [openView, setOpenView] = useState(false);
  const [viewId, setViewId] = useState(false);

  const [deleteId, setDeleteId] = useState();
  const router = useNavigate();
  const [data, setData] = useState();

  const dispatch = useDispatch()

  const jobBanks = useSelector(state => state.jobBank.jobBanks)
  useEffect(() => {
    console.log(jobBanks);
  }, [jobBanks])
  useEffect(() => {
    dispatch(AllJobBanks())
  }, [dispatch])

  const handleClick = (id) => {
    setOpenView(!open)
    setViewId(id)
  }
  // console.log(viewId)

  //fetching cities
  const loading = useSelector(state => state.city.isLoading)

  //delete
  const handleDelete = (id) => {
    setOpen(!open)
    setDeleteId(id)
  }

  const deleteCity = (id) => {
    setOpen(!open)
    dispatch(DeleteJobBank(id))
  }

  //edit
  const handleEdit = (id, email) => {
    router("/jobBanks/edit", { state: { ID: id , Email: email } })
  }

  //state update
  const UpdateStatus = (id, status) => {
    let st = 0;
    if (status === 1) {
      st = 0;
    } else {
      st = 1;
    }
    // console.log('click')
    dispatch(cityStatus(id, st))
  }

  // nodata===============
  const [nodata, setNodata] = useState(false)
  useEffect(() => {
    if (jobBanks?.length === 0) {
      setNodata(true)
    } else {
      setNodata(false)

    }
  }, [jobBanks])


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
    if (jobBanks) {
      setRecords(jobBanks.slice(firstIndex, lastIndex));
      setPage(Math.ceil(jobBanks.length / numbersPerPage));
    }
  }, [jobBanks, firstIndex])

  useEffect(() => {
    if (nPage) {
      setNumbers([...Array(nPage + 1).keys()].slice(1))
    }
  }, [nPage])
  //================================
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
            <div className='mt-[2rem]'>   <Link to='/jobBanks/add' className=" py-[1.3%] px-[3%]  text-white text-sm bg-blue-600  rounded-[2rem] "  >   Add New  </Link>
            </div>

          </div> </center>
            :
            <>
              <h1 className='text-[3.125rem] font-[800] text-[#000] text-center max-md:text-[2rem] uppercase'>Job Banks</h1>

              <div className="w-[100%] max-md:h-full  max-md:px-2 flex flex-col justify-center bg-yellow-300">

                <div className='flex justify-center mt-[3rem] w-[90%] m-auto'>

                  <input type="search" name="" id="" placeholder='Search...' onChange={(e) => setSearch(e.target.value)} className='border-2 border-gray-600 pl-[4rem]  pr-[1rem] rounded-[1.0625rem] py-2  w-[27.8125rem] mr-auto max-md:py-[1px] max-md:w-[15rem] max-md:text-[0.7rem]' />
                  <Link to="/jobBanks/add"> <button className="bg-[#0047FF] cursor-pointer  max-md:text-[.6rem] py-2 px-[1rem] max-md:px-[1rem] max-md:py-[5px] text-white font-[600] max-md:font-[400] rounded-[1.375rem] ml-auto "  >
                    Add New
                  </button>
                  </Link>

                </div>
                <DeleteModal open={open} setOpen={setOpen} ID={deleteId} deleteFunction={deleteCity} />
                <CityModal open={openView} setOpen={setOpenView} title={"VIEW"} data={data} ID={viewId} />
                <table className="rounded-xl p-5 bg-white w-[90%] m-auto max-md:w-[100%]  mt-6 ">
                  <thead className='mt-10'>

                    <tr className=" uppercase  text-sm leading-normal w-[100%]">
                      <th className="py-[2%] border-r-[1px] border-b-[2px] border-b-black  w-[3%] max-md:text-[.6rem] max-md:font-[400] text-center max-md:w-[2%]  text-[13px]">ID </th>
                      <th className="py-[2%] border-r-[1px] border-b-[2px] border-b-black  w-[10%] max-md:text-[.6rem] max-md:font-[400] text-center max-md:w-[2%] text-[13px]">Email</th>
                      <th className="py-[2%] border-r-[1px] border-b-[2px] border-b-black  w-[2%] max-md:text-[.6rem] max-md:font-[400] text-center text-[13px]">Actions</th>
                    </tr>

                  </thead>

                  {records?.filter((value) => {
                    return search.toLowerCase() === '' ?
                      value : value.name.toLowerCase().includes(search)
                  }).map((value, index) => (
                    <tbody className="text-[#000000] text-sm font-light w-[100%] bg-white" key={value.id} >
                      <tr className='' >
                        <td className="py-[2%] w-[3%]   border-r-[1px] border-t-[1px] border-black text-center">
                          <span className="font-bold max-md:text-[.7rem] text-[13px] text-blue-500">{value.id}</span>
                        </td>
                        <td className="py-[2%] w-[10%]   border-r-[1px] border-t-[1px] border-black   text-center">
                          <span className=" max-md:text-[.7rem] text-[13px] font-[350]">{value.email}</span>
                        </td>
                        <td className="py-[2%] w-[2%] max-md:text-[.7rem]  border-r-[1px] border-t-[1px] border-black   text-center">
                          <div className="flex item-center justify-center gap-3">

                            <div className="w-4 mr-2 transform hover:text-blue-500  hover:scale-110" onClick={() => handleEdit(value.id, value.email)}>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="blue">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                              </svg>
                            </div>
                            <div className="w-4 mr-2 transform hover:text-blue-500  hover:scale-110" onClick={() => handleDelete(value.id)}>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="red">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </div>
                          </div>
                        </td>
                      </tr>

                    </tbody>
                  ))}
                </table>
                <nav className='m-auto mt-5' >
                  <ul className="flex items-center -space-x-px h-10 text-base">
                  <li>
                      <Link to="#" onClick={prevPage} className="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-600 rounded-l-lg hover:bg-yellow-300 hover:text-gray-700  " >
                        <span className="sr-only">Previous</span>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                        </svg>
                      </Link>
                    </li>
                    {pagination?.map((n, index) => (<li><Link to="#" onClick={() => { setSelect(index); changeCurrentPage(n) }}
                      className={` ${select === index ? 'bg-cyan-400 text-white hover:text-white' : 'bg-yellow-300'} flex items-center justify-center px-4 h-10 leading-tight text-gray-500 border border-gray-600  hover:text-gray-700 `} >{n}</Link>
                    </li>))}
                    <li>
                      <Link to="#" onClick={nextPage} className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-600 rounded-r-lg hover:bg-yellow-300 hover:text-gray-700  "> <span className="sr-only">Next</span><svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"> <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" /> </svg></Link>
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

export default Cities
