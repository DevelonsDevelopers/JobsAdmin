import React, { useEffect, useState } from 'react'
import PortalLayout from '../portalLayout/PortalLayout'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import moment from 'moment';
import AppliedViews from '../dashboard/view/AppliedViews';
import { getInteractionByCompany } from '../store/actions/interactionActions';
import InteractionView from './view/InteractionView';
import { SESSION_PROVIDER_ID } from '../Utils/Constant';
import { ThemeProvider } from '@emotion/react';
import { Pagination, Stack, createTheme } from '@mui/material';
import { IoIosSearch } from 'react-icons/io';





const ProviderInteraction = () => {
  // ============

  const [open, setOpen] = useState(false);
  const [openView, setOpenView] = useState(false);
  const [viewId, setViewId] = useState()
  const [data, setData] = useState()

  const navigate = useNavigate();

  const dispatch = useDispatch()

  const handleClick = (id) => {
    setOpenView(!open)
    setViewId(id)
  }
  const providerId = sessionStorage.getItem(SESSION_PROVIDER_ID);
  const interactionByCompany = useSelector(state => state.interaction?.interactions)
  const loading = useSelector(state => state.appliedUser.isLoading)


  // useEffect(() => {
  //   console.log('interaction',interactionByCompany)
  // }, [interactionByCompany])

  useEffect(() => {
    if (interactionByCompany !== null || interactionByCompany !== undefined || interactionByCompany.length !== 0) {
      dispatch(getInteractionByCompany(providerId))
    }
  }, [dispatch])

  //pagination=============================
  const theme = createTheme({
    palette: { primary: { main: "#000", contrastText: "#EEE" } },
  });

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const [paginatedData, setPaginatedData] = useState();
  useEffect(() => {
    if (interactionByCompany) {
      setPaginatedData(interactionByCompany?.slice(startIndex, endIndex));
    }
  }, [interactionByCompany, startIndex]);

  // search===============
  const [search, setSearch] = useState("");
  useEffect(() => {
    const result = interactionByCompany?.filter((item) => {
      return item?.name?.toLowerCase()?.match(search?.toLocaleLowerCase());
    });
    setPaginatedData(result);
  }, [search]);


  // nodata===========
  const [nodata, setNodata] = useState(false)
  useEffect(() => {
    if (interactionByCompany?.length === 0) {
      setNodata(true)
    } else {
      setNodata(false)

    }
  }, [interactionByCompany])

  return (
    <PortalLayout>
      {loading ? <center> <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
      </center> :
        <>
          {nodata ? 
         <>
         <h1 className=" text-[2rem] text-gray-500 " >No Interactions Yet</h1>
       </>
            :
            <>

              <h1 className='text-[3.125rem] font-[800] text-[#000] text-center max-md:text-[2rem] uppercase'>applied users</h1>

              <div className="w-[100%] max-md:h-full  max-md:px-2 flex flex-col justify-center bg-white">

                <div className='flex justify-center mt-[3rem] w-[90%] m-auto'>

                <div className="border-2 flex bg-black border-gray-600pl-[1rem] rounded-[8px]  w-[27.8125rem] mr-auto max-md:py-[1px] max-md:w-[15rem] max-md:text-[0.7rem] focus:outline-none focus:ring-0 focus:border-gray-900 peer">
                    <IoIosSearch className="text-[2rem] my-auto ml-2 text-white" />
                    <input
                      onChange={(e) => setSearch(e.target.value)}
                      type="search"
                      name=""
                      id=""
                      placeholder="Search..."
                      className="ml-2 pl-5 py-2 w-full bg-white outline-none"
                    />
                  </div>{" "}


                </div>
                <InteractionView open={openView} setOpen={setOpenView} title={" VIEW"} data={data} ID={viewId} />
                <table className="rounded-xl shadow-lg p-5 bg-black text-gray-100 w-[90%] m-auto max-md:w-[100%]  mt-6 max-md:overflow-auto">
                  <thead className='mt-10'>
                    <tr className=" uppercase  text-sm leading-normal w-[100%]">
                      <th className="py-[2%] border-r-[1px] border-gray-300 border-b-[3px] border-gray-400-[3px]  w-[1%] max-md:text-[.6rem] max-md:font-[400] text-center max-md:w-[2%]  text-[13px]">ID </th>
                      <th className="py-[2%] border-r-[1px] border-gray-300 border-b-[3px] border-gray-400-[3px]  w-[1%] max-md:text-[.6rem] max-md:font-[400] text-center max-md:w-[2%]  text-[13px]">User</th>
                      <th className="py-[2%] border-r-[1px] border-gray-300 border-b-[3px] border-gray-400-[3px]  w-[1%] max-md:text-[.6rem] max-md:font-[400] text-center max-md:w-[2%]  text-[13px]">InteractionType</th>
                      <th className="py-[2%] border-r-[1px] border-gray-300 border-b-[3px] border-gray-400-[3px]  w-[1%] max-md:text-[.6rem] max-md:font-[400] text-center max-md:w-[2%]  text-[13px]">Date</th>
                      <th className="py-[2%] border-r-[1px] border-gray-300 border-b-[3px] border-gray-400-[3px]  w-[1%] max-md:text-[.6rem] max-md:font-[400] text-center max-md:w-[2%]  text-[13px]"></th>

                    </tr>

                  </thead>

                  {paginatedData?.map((value, index) => (
                      <tbody className="text-[#000000] text-sm font-light w-[100%] bg-gray-50" key={value?.id}>
                        <tr className='' >
                          <td className="py-[2%] w-[1%] border-r-[1px] border-t-[1px] border-gray-400   text-center">
                            <span className="font-bold max-md:text-[.7rem] text-[13px] text-blue-500">{value.id}</span>
                          </td>

                          <td className="py-[2%] w-[1%] border-r-[1px] border-t-[1px] border-gray-400   text-center">
                            <span className=' text-[13px] font-[350]'>{value.name}</span>
                          </td>
                          <td className="py-[2%] w-[1%] border-r-[1px] border-t-[1px] border-gray-400   text-center">
                            <span className=' text-[13px] font-[350]'>{value.interactiontype}</span>
                          </td>
                          <td className="py-[2%] w-[1%] border-r-[1px] border-t-[1px] border-gray-400   text-center">
                            <span className=' text-[13px] font-[350]'>{moment(value.date).format('YYYY-MM-DD')}</span>
                          </td>

                          <td className="py-[2%] w-[1%] border-r-[1px] border-t-[1px] border-gray-400   text-center ">
                            <div className="w-4 m-auto transform hover:text-blue-500  hover:scale-110 cursor-pointer" onClick={() => handleClick(value.id)}>   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            </div>
                          </td>
                        </tr>

                      </tbody>
                    ))}
                </table>
                <ThemeProvider theme={theme}>
                  <Stack direction="row" justifyContent="center" marginTop={2}>
                    <Pagination
                      count={Math.ceil(interactionByCompany?.length / itemsPerPage)}
                      page={currentPage}
                      onChange={handlePageChange}
                      color="primary"
                    />
                  </Stack>
                </ThemeProvider>
              </div>
            </>}
        </>}
    </PortalLayout>
  )
}

export default ProviderInteraction
