import React, { useEffect, useState } from "react";
import PortalLayout from "../portalLayout/PortalLayout";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
import { getInteractionByCompany } from "../store/actions/interactionActions";
import { GetRecommendedSeeker } from "../store/actions/seekerActions";
import RecommendedUser from "./view/RecommendedUser";
import { Pagination, Stack, ThemeProvider, createTheme } from "@mui/material";

const Recommended = () => {
  // =============
  const params = useLocation();
  const id = params.state.ID;

  console.log(id);

  const [open, setOpen] = useState(false);
  const [openView, setOpenView] = useState(false);
  const [viewId, setViewId] = useState();
  const [data, setData] = useState();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleClick = (id) => {
    setOpenView(!open);
    setViewId(id);
  };
  const loading = useSelector((state) => state.appliedUser.isLoading);

  const recommendedSeeker = useSelector((state) => state.seeker?.seekers);

  useEffect(() => {
    if (
      recommendedSeeker !== null ||
      recommendedSeeker !== undefined ||
      recommendedSeeker.length !== 0
    ) {
      dispatch(GetRecommendedSeeker(id));
    }
  }, [dispatch]);

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
    if (recommendedSeeker) {
      setPaginatedData(recommendedSeeker?.slice(startIndex, endIndex));
    }
  }, [recommendedSeeker, startIndex]);

  // search===============
  const [search, setSearch] = useState("");
  useEffect(() => {
    const result = recommendedSeeker?.filter((item) => {
      return item?.name?.toLowerCase()?.match(search?.toLocaleLowerCase());
    });
    setPaginatedData(result);
  }, [search]);
  // nodata===========
  const [nodata, setNodata] = useState(false);
  useEffect(() => {
    if (recommendedSeeker?.length === 0) {
      setNodata(true);
    } else {
      setNodata(false);
    }
  }, [recommendedSeeker]);

  return (
    <PortalLayout>
      {loading ? (
        <center>
          {" "}
          <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
          </div>
        </center>
      ) : (
        <>
          {nodata ? (
                <h1 className=" text-[2rem] text-gray-500">
                  No User Found
                </h1>
          ) : (
            <>
              <h1 className="text-[3.125rem] font-[800] text-[#000] text-center max-md:text-[2rem] uppercase">
                Recommended Users
              </h1>

              <div className="w-[100%] max-md:h-full  max-md:px-2 flex flex-col justify-center bg-white">
                <div className="flex justify-center mt-[3rem] w-[90%] m-auto">
                  <input
                    type="search"
                    onChange={(e) => setSearch(e.target.value)}
                    name=""
                    id=""
                    placeholder="Search..."
                    className="border-2 border-gray-600 pl-[4rem]  pr-[1rem] rounded-[1.0625rem] py-2  w-[27.8125rem] mr-auto max-md:py-[1px] max-md:w-[15rem] max-md:text-[0.7rem] focus:outline-none focus:ring-0 focus:border-gray-900 peer"
                  />
                </div>
                <RecommendedUser
                  open={openView}
                  setOpen={setOpenView}
                  ID={viewId}
                />
                <table className="rounded-xl shadow-lg p-5 bg-black text-gray-100 w-[90%] m-auto max-md:w-[100%]  mt-6 max-md:overflow-auto ">
                  <thead className="mt-10">
                    <tr className=" uppercase  text-sm leading-normal w-[100%]">
                      <th className="py-[2%] border-r-[1px] border-gray-300 border-b-[3px] border-gray-400-[3px]  w-[1%] max-md:text-[.6rem] max-md:font-[400] text-center max-md:w-[2%]  text-[13px]">
                        ID{" "}
                      </th>
                      <th className="py-[2%] border-r-[1px] border-gray-300 border-b-[3px] border-gray-400-[3px]  w-[1%] max-md:text-[.6rem] max-md:font-[400] text-center max-md:w-[2%]  text-[13px]">
                        Name
                      </th>
                      <th className="py-[2%] border-r-[1px] border-gray-300 border-b-[3px] border-gray-400-[3px]  w-[1%] max-md:text-[.6rem] max-md:font-[400] text-center max-md:w-[2%]  text-[13px]">
                        Role
                      </th>
                      <th className="py-[2%] border-r-[1px] border-gray-300 border-b-[3px] border-gray-400-[3px]  w-[1%] max-md:text-[.6rem] max-md:font-[400] text-center max-md:w-[2%]  text-[13px]">
                        offer
                      </th>
                      <th className="py-[2%] border-r-[1px] border-gray-300 border-b-[3px] border-gray-400-[3px]  w-[1%] max-md:text-[.6rem] max-md:font-[400] text-center max-md:w-[2%]  text-[13px]">
                        Address
                      </th>
                      <th className="py-[2%] border-r-[1px] border-gray-300 border-b-[3px] border-gray-400-[3px]  w-[1%] max-md:text-[.6rem] max-md:font-[400] text-center max-md:w-[2%]  text-[13px]"></th>
                    </tr>
                  </thead>

                  {paginatedData?.map((value, index) => (
                    <tbody
                      className="text-[#000000] text-sm font-light w-[100%] bg-gray-50"
                      key={value?.id}
                    >
                      <tr className="">
                        <td className="py-[2%] w-[1%]   border-r-[1px] border-t-[1px] border-gray-400   text-center">
                          <span className="font-bold max-md:text-[.7rem] text-[13px] text-blue-500">
                            {value.id}
                          </span>
                        </td>

                        <td className="py-[2%] w-[2%]   border-r-[1px] border-t-[1px] border-gray-400   text-center">
                          <span className=" text-[13px] font-[350]">
                            {value.name}
                          </span>
                        </td>
                        <td className="py-[2%] w-[2%]   border-r-[1px] border-t-[1px] border-gray-400   text-center">
                          <span className=" text-[13px] font-[350]">
                            {value.role}
                          </span>
                        </td>
                        <td className="py-[2%] w-[2%]   border-r-[1px] border-t-[1px] border-gray-400   text-center">
                          <span className=" text-[13px] font-[350]">
                            {value.offer}
                          </span>
                        </td>
                        <td className="py-[2%] w-[2%]   border-r-[1px] border-t-[1px] border-gray-400   text-center">
                          <span className=" text-[11px] font-[350]">
                            {value.address}
                          </span>
                        </td>

                        <td className="py-[2%] w-[2%]   border-r-[1px] border-t-[1px] border-gray-400   text-center">
                          <div
                            className="w-4 m-auto transform hover:text-blue-500  hover:scale-110 "
                            onClick={() => handleClick(value.id)}
                          >
                            {" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              />
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
                      count={Math.ceil(
                        recommendedSeeker?.length / itemsPerPage
                      )}
                      page={currentPage}
                      onChange={handlePageChange}
                      color="primary"
                    />
                  </Stack>
                </ThemeProvider>

                <center></center>
              </div>
            </>
          )}
        </>
      )}
    </PortalLayout>
  );
};

export default Recommended;
