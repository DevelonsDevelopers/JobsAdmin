import React, { useEffect, useState } from "react";
import PortalLayout from "../portalLayout/PortalLayout";
import DeleteModal from "../components/DeleteModal";
import { Link, useNavigate } from "react-router-dom";
import UsersView from "./view/UsersView";
import { useDispatch, useSelector } from "react-redux";
import { AllUsers, DeleteUser, userStatus } from "../store/actions/userActions";
import UserView from "./view/UsersView";
import { Pagination, Stack, ThemeProvider, createTheme } from "@mui/material";

const Users = () => {
  // search===============
  const [search, setSearch] = useState("");
  useEffect(() => {
    const result = users?.filter((item) => {
      return item?.name.toLowerCase()?.match(search?.toLocaleLowerCase());
    });
    setPaginatedData(result);
  }, [search]);
  // =============

  const [open, setOpen] = useState(false);
  const [openView, setOpenView] = useState(false);
  const [viewId, setViewId] = useState(false);
  const [deleteId, setDeleteId] = useState();
  const router = useNavigate();
  const [data, setData] = useState();

  const dispatch = useDispatch();

  const handleClick = (id) => {
    setOpenView(!open);
    setViewId(id);
  };

  const users = useSelector((state) => state.user.users);
  const loading = useSelector((state) => state.user.isLoading);

  useEffect(() => {
    if (users !== null || users !== undefined || users.length !== 0) {
      dispatch(AllUsers());
    }
  }, [dispatch]);

  const handleDelete = (id) => {
    setOpen(!open);
    setDeleteId(id);
  };

  const deleteUser = (id) => {
    dispatch(DeleteUser(id));
    setOpen(!open);
  };

  // nodata===========
  const [nodata, setNodata] = useState(false);
  useEffect(() => {
    if (users?.length === 0) {
      setNodata(true);
    } else {
      setNodata(false);
    }
  }, [users]);

  const handleEdit = (id) => {
    router("/users/edit", { state: { ID: id } });
  };

  const UpdateStatus = (id, status) => {
    let st = 0;
    if (status === 1) {
      st = 0;
    } else {
      st = 1;
    }
    dispatch(userStatus(id, st));
  };

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
    if (users) {
      setPaginatedData(users?.slice(startIndex, endIndex));
    }
  }, [users, startIndex]);

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
                <h1 className=" text-[2rem] text-gray-500 mt-[-4rem] pt-10">
                  No Users Found
                </h1>
              </div>{" "}
            </center>
          ) : (
            <>
              <h1 className="text-[3.125rem] font-[800] text-[#000] text-center max-md:text-[2rem] uppercase">
                users
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
                  <Link to="/users/add">
                    {" "}
                    <button className="bg-white border-2 border-black hover:bg-black hover:text-white transition-all ease-in-out duration-75 cursor-pointer max-md:text-[.6rem] py-2 px-[1rem] max-md:px-[1rem] max-md:py-[5px] font-[600] max-md:font-[400] rounded-[8px] ml-auto ">
                      Add New
                    </button>
                  </Link>
                </div>
                <DeleteModal
                  open={open}
                  setOpen={setOpen}
                  ID={deleteId}
                  deleteFunction={deleteUser}
                />
                <UserView
                  open={openView}
                  setOpen={setOpenView}
                  title={" VIEW"}
                  data={data}
                  ID={viewId}
                />
                <table className="rounded-xl p-5 bg-black text-gray-100 w-[90%] m-auto max-md:w-[100%]  mt-6 ">
                  <thead className="mt-10">
                    <tr className=" uppercase  text-sm leading-normal w-[100%]">
                      <th className="py-[2%] border-r-[1px] border-gray-300 border-b-[3px] border-b-yellow-300  w-[3%] max-md:text-[.6rem] max-md:font-[400] text-center max-md:w-[2%]  text-[13px]">
                        ID{" "}
                      </th>
                      <th className="py-[2%] border-r-[1px] border-gray-300 border-b-[3px] border-b-yellow-300  w-[6%] max-md:text-[.6rem] max-md:font-[400] text-center max-md:w-[2%] text-[13px]">
                        Name
                      </th>
                      <th className="py-[2%] border-r-[1px] border-gray-300 border-b-[3px] border-b-yellow-300 w-[1%] max-md:text-[.6rem] max-md:font-[400] text-center max-md:w-[3%] text-[13px]">
                        Phone
                      </th>
                      <th className="py-[2%] border-r-[1px] border-gray-300 border-b-[3px] border-b-yellow-300 w-[1%] max-md:text-[.6rem] max-md:font-[400] text-center max-md:w-[3%] text-[13px]">
                        Email
                      </th>
                      <th className="py-[2%] border-r-[1px] border-gray-300 border-b-[3px] border-b-yellow-300 w-[2%] max-md:text-[.6rem] max-md:font-[400] text-center text-[13px]">
                        Status
                      </th>
                      <th className="py-[2%] border-b-[3px] border-b-yellow-300  w-[2%] max-md:text-[.6rem] max-md:font-[400] text-center text-[13px]">
                        Actions
                      </th>
                      <th className="py-[2%] border-gray-300 border-b-[3px] border-b-yellow-300  w-[1%] max-md:text-[.6rem] max-md:font-[400] text-center"></th>
                    </tr>
                  </thead>
                  {paginatedData?.map((value, index) => (
                    <tbody
                      className="text-[#000000] text-sm font-light w-[100%] bg-gray-100"
                      key={value.id}
                    >
                      <tr className="">
                        <td className="py-[2%] w-[3%]   border-r-[1px] border-t-[1px]   text-center">
                          <span className="font-bold max-md:text-[.7rem] text-[13px] text-blue-500">
                            {value.id}
                          </span>
                        </td>
                        <td className="py-[2%] w-[6%]   border-r-[1px] border-t-[1px]   text-center">
                          <span className=" max-md:text-[.7rem] text-[13px] font-[350]">
                            {value.name}
                          </span>
                        </td>
                        <td className="py-[1%] w-[2%]  max-md:text-[.7rem]  border-r-[1px] border-t-[1px]   text-center">
                          <span className=" text-[13px] font-[350]">
                            {value.phone}
                          </span>
                        </td>
                        <td className="py-[1%] w-[2%]  max-md:text-[.7rem]  border-r-[1px] border-t-[1px]   text-center">
                          <span className=" text-[13px] font-[350]">
                            {value.email}
                          </span>
                        </td>

                        <td className="py-[2%] max-md:text-[.7rem] w-[2%] border-r-[1px] border-t-[1px]   text-center">
                          <span
                            onClick={() => UpdateStatus(value.id, value.status)}
                            className={`bg-green-600 text-white font-[500] py-[3px] px-[10px] max-md:w-[8%] rounded-xl text-[0.6rem] max-md:py-1 max-md:px-2 max-md:text-[0.6rem] cursor-pointer ${
                              value.status === 1 ? "bg-green-500" : "bg-red-500"
                            } `}
                          >
                            {value.status === 1 ? "Enable" : "Disable"}
                          </span>
                        </td>
                        <td className="py-[2%] w-[2%] max-md:text-[.7rem]  border-r-[1px] border-t-[1px]   text-center">
                          <div className="flex item-center justify-center gap-3">
                            <div
                              className="w-4 mr-2 transform hover:text-blue-500  hover:scale-110"
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
                              className="w-4 mr-2 transform hover:text-blue-500  hover:scale-110"
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

                        <td className="py-[2%] w-[1%] max-md:text-[.7rem]  border-t-[1px]   ">
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
                      count={Math.ceil(users?.length / itemsPerPage)}
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

export default Users;
