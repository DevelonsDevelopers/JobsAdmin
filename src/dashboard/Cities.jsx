import React, { useEffect, useState } from "react";
import PortalLayout from "../portalLayout/PortalLayout";
import DeleteModal from "../components/DeleteModal";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  AllCities,
  DeleteCity,
  cityStatus,
} from "../store/actions/cityActions";
import CityModal from "./view/CitiyView";
import { Pagination, Stack, ThemeProvider, createTheme } from "@mui/material";
import { IoIosSearch } from "react-icons/io";

const Cities = () => {
  const [open, setOpen] = useState(false);
  const [openView, setOpenView] = useState(false);
  const [viewId, setViewId] = useState(false);

  const [deleteId, setDeleteId] = useState();
  const router = useNavigate();
  const [data, setData] = useState();

  //search
  const [search, setSearch] = useState("");
  useEffect(() => {
    const result = cities?.filter((item) => {
      return item?.name.toLowerCase()?.match(search?.toLocaleLowerCase());
    });
    setPaginatedData(result);
  }, [search]);

  const dispatch = useDispatch();
  const handleClick = (id) => {
    setOpenView(!open);
    setViewId(id);
  };
  // console.log(viewId)

  //fetching cities
  const cities = useSelector((state) => state.city.cities);
  const loading = useSelector((state) => state.city.isLoading);

  useEffect(() => {
    console.log(cities);
  }, [cities]);

  useEffect(() => {
    dispatch(AllCities());
  }, [dispatch]);

  //delete
  const handleDelete = (id) => {
    setOpen(!open);
    setDeleteId(id);
  };

  const deleteCity = (id) => {
    setOpen(!open);
    dispatch(DeleteCity(id));
  };

  //edit
  const handleEdit = (id) => {
    router("/cities/edit", { state: { ID: id } });
  };

  //state update
  const UpdateStatus = (id, status) => {
    let st = 0;
    if (status === 1) {
      st = 0;
    } else {
      st = 1;
    }
    // console.log('click')
    dispatch(cityStatus(id, st));
  };

  // nodata===============
  const [nodata, setNodata] = useState(false);
  useEffect(() => {
    if (cities?.length === 0) {
      setNodata(true);
    } else {
      setNodata(false);
    }
  }, [cities]);

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
    if (cities) {
      setPaginatedData(cities?.slice(startIndex, endIndex));
    }
  }, [cities, startIndex]);

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
            <center>
              {" "}
              <div className=" pt-[10%]">
                <h1 className=" text-[2rem] text-gray-500 ">No Cities Added</h1>
                <div className="mt-[2rem]">
                  {" "}
                  <Link
                    to="/cities/add"
                    className=" py-[1.3%] px-[3%]  text-white text-sm bg-blue-600  rounded-[2rem] "
                  >
                    {" "}
                    Add New{" "}
                  </Link>
                </div>
              </div>{" "}
            </center>
          ) : (
            <>
              <h1 className="text-[3.125rem] font-[800] text-[#000] text-center max-md:text-[2rem] uppercase">
                City
              </h1>

              <div className="w-[100%] max-md:h-full  max-md:px-2 flex flex-col justify-center bg-white">
                <div className="flex justify-center mt-[3rem] w-[90%] m-auto">
                  <div className="border-2 flex bg-black border-gray-600pl-[1rem] rounded-[8px]  w-[27.8125rem] mr-auto max-md:py-[1px] max-md:w-[15rem] max-md:text-[0.7rem] focus:outline-none focus:ring-0 focus:border-gray-900 peer">
                    <IoIosSearch className="text-[2rem] my-auto ml-2 text-white" />
                    <input
                      onChange={(e) => setSearch(e.target.value)}
                      type="search"
                      name=""
                      id=""
                      placeholder="Search..."
                      className="ml-2 pl-5 w-full bg-white outline-none"
                    />
                  </div>
                  <Link to="/cities/add">
                    {" "}
                    <button className="bg-white border-2 border-black hover:bg-black hover:text-white transition-all ease-in-out duration-75 cursor-pointer max-md:text-[.6rem] py-2 px-[1rem] max-md:px-[1rem] max-md:py-[5px] font-[600] max-md:font-[400] rounded-[8px] ml-auto  ">
                      Add New
                    </button>
                  </Link>
                </div>
                <DeleteModal
                  open={open}
                  setOpen={setOpen}
                  ID={deleteId}
                  deleteFunction={deleteCity}
                />
                <CityModal
                  open={openView}
                  setOpen={setOpenView}
                  title={"VIEW"}
                  data={data}
                  ID={viewId}
                />
                <table className="rounded-xl shadow-lg p-5 bg-black text-gray-100 w-[90%] m-auto max-md:w-[100%]  mt-6 ">
                  <thead className="mt-10">
                    <tr className=" uppercase  text-sm leading-normal w-[100%]">
                      <th className="py-[2%] border-r-[1px] border-gray-300 border-b-[3px]  w-[3%] max-md:text-[.6rem] max-md:font-[400] text-center max-md:w-[2%]  text-[13px]">
                        ID{" "}
                      </th>
                      <th className="py-[2%] border-r-[1px] border-gray-300 border-b-[3px]  w-[10%] max-md:text-[.6rem] max-md:font-[400] text-center max-md:w-[2%] text-[13px]">
                        Name
                      </th>
                      <th className="py-[2%] border-r-[1px] border-gray-300 border-b-[3px]  w-[1%] max-md:text-[.6rem] max-md:font-[400] text-center max-md:w-[3%] text-[13px]">
                        Country Name
                      </th>
                      <th className="py-[2%] border-r-[1px] border-gray-300 border-b-[3px]  w-[1%] max-md:text-[.6rem] max-md:font-[400] text-center max-md:w-[3%] text-[13px]">
                        Jobs
                      </th>
                      <th className="py-[2%] border-r-[1px] border-gray-300 border-b-[3px]  w-[2%] max-md:text-[.6rem] max-md:font-[400] text-center text-[13px]">
                        Status
                      </th>
                      <th className="py-[2%] border-b-[3px]  w-[2%] max-md:text-[.6rem] max-md:font-[400] text-center text-[13px]">
                        Actions
                      </th>
                      <th className="py-[2%]   border-gray-300 border-b-[3px]  w-[1%] max-md:text-[.6rem] max-md:font-[400] text-center"></th>
                    </tr>
                  </thead>

                  {paginatedData?.map((value, index) => (
                    <tbody
                      className="text-[#000000] text-sm font-light w-[100%] bg-gray-50"
                      key={value.id}
                    >
                      <tr className="">
                        <td className="py-[2%] w-[3%]   border-r-[1px] border-t-[1px] border-gray-400 text-center">
                          <span className="font-bold max-md:text-[.7rem] text-[13px] text-blue-500">
                            {value.id}
                          </span>
                        </td>
                        <td className="py-[2%] w-[10%]   border-r-[1px] border-t-[1px] border-gray-400   text-center">
                          <span className=" max-md:text-[.7rem] text-[13px] font-[600]">
                            {value.name}
                          </span>
                        </td>
                        <td className="py-[2%] w-[10%]   border-r-[1px] border-t-[1px] border-gray-400   text-center">
                          <span className=" max-md:text-[.7rem] text-[13px] font-[600]">
                            {value.country_name}
                          </span>
                        </td>
                        <td className="py-[1%] w-[2%]  max-md:text-[.7rem]  border-r-[1px] border-t-[1px] border-gray-400   text-center">
                          <span className=" text-[13px] font-[600]">
                            {value.jobs}
                          </span>
                        </td>

                        <td className="py-[2%] max-md:text-[.7rem] w-[2%] border-r-[1px] border-t-[1px] border-gray-400   text-center">
                          <span
                            onClick={() => UpdateStatus(value.id, value.status)}
                            className={`bg-green-600 text-white font-[500] py-[3px] px-[10px] max-md:w-[8%] rounded-xl text-[0.6rem] max-md:py-1 max-md:px-2 max-md:text-[0.6rem] cursor-pointer ${
                              value.status === 1 ? "bg-green-500" : "bg-red-500"
                            }`}
                          >
                            {value.status === 1 ? "Enable" : "Disable"}
                          </span>
                        </td>
                        <td className="py-[2%] w-[2%] max-md:text-[.7rem]  border-r-[1px] border-t-[1px] border-gray-400   text-center">
                          <div className="flex item-center justify-center gap-3">
                            <div
                              className="w-4 mr-2 transform hover:text-blue-500  hover:scale-110 cursor-pointer"
                              onClick={() => handleEdit(value.id)}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="blue"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                />
                              </svg>
                            </div>
                            <div
                              className="w-4 mr-2 transform hover:text-blue-500  hover:scale-110 cursor-pointer"
                              onClick={() => handleDelete(value.id)}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="red"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                />
                              </svg>
                            </div>
                          </div>
                        </td>

                        <td className="py-[2%] w-[1%] max-md:text-[.7rem]  border-t-[1px] border-gray-400">
                          <div
                            className="w-4 m-auto transform hover:text-blue-500  hover:scale-110 cursor-pointer "
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
                      count={Math.ceil(cities?.length / itemsPerPage)}
                      page={currentPage}
                      onChange={handlePageChange}
                      color="primary"
                    />
                  </Stack>
                </ThemeProvider>
              </div>
            </>
          )}
        </>
      )}
    </PortalLayout>
  );
};

export default Cities;
