import React, { useState } from "react";
import PortalLayout from "../../portalLayout/PortalLayout";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../store/actions/userActions";
import { ToastContainer, toast } from "react-toastify";

const UserForm = () => {
  const [userData, setUserData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const ClickInput = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  // console.log(userData)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      userData.name &&
      userData.username &&
      userData.email &&
      userData.password &&
      userData.phone &&
      userData.address
    ) {
      dispatch(createUser(userData));
      navigate("/users");
    } else {
      toast.error("Enter Required Data", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <PortalLayout>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <h1 className="text-center bg-black text-white font-[600] mb-5 py-4 rounded-[8px] shadow-lg text-[1.5rem]">
        ADD USERS
      </h1>
      <div className="bg-yellow-400 shadow-md rounded-xl px-[10rem] max-md:px-4 py-10 mb-4 flex flex-col my-2">
        <form action="">
          <div className="">
            <div className="w-[100%] mb-6 md:mb-0">
              <label
                className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4 uppercase"
                htmlFor="grid-first-name"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="floating_email"
                onChange={ClickInput}
                className="pl-4 block py-[9px] px-0 w-full text-sm  bg-gray-100 rounded-[8px] border-[0.7px] border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder="Enter User Name"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-5">
            <div className="">
              <div className="w-[100%] mb-6 md:mb-0">
                <label
                  className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4 uppercase"
                  htmlFor="grid-first-name"
                >
                  User Name
                </label>
                <input
                  type="text"
                  name="username"
                  id="floating_email"
                  onChange={ClickInput}
                  className="pl-4 block py-[9px] px-0 w-full text-sm  bg-gray-100 rounded-[8px] border-[0.7px] border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="Enter User Name"
                  required
                />
              </div>
            </div>
            <div className="">
              <div className="w-[100%] mb-6 md:mb-0">
                <label
                  className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4 uppercase"
                  htmlFor="grid-first-name"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="floating_email"
                  onChange={ClickInput}
                  className="pl-4 block py-[9px] px-0 w-full text-sm  bg-gray-100 rounded-[8px] border-[0.7px] border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="Enter  Email "
                  required
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-5">
            <div className="">
              <div className="w-[100%] mb-6 md:mb-0">
                <label
                  className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4 uppercase"
                  htmlFor="grid-first-name"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="floating_email"
                  onChange={ClickInput}
                  className="pl-4 block py-[9px] px-0 w-full text-sm  bg-gray-100 rounded-[8px] border-[0.7px] border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="Enter Password"
                  required
                />
              </div>
            </div>
            <div className="">
              <div className="w-[100%] mb-6 md:mb-0">
                <label
                  className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4 uppercase"
                  htmlFor="grid-first-name"
                >
                  Phone
                </label>
                <input
                  type="email"
                  name="phone"
                  id="floating_email"
                  onChange={ClickInput}
                  className="pl-4 block py-[9px] px-0 w-full text-sm  bg-gray-100 rounded-[8px] border-[0.7px] border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="Enter Contact Number "
                  required
                />
              </div>
            </div>
          </div>
          <div className="-mx-3 md:flex my-5">
            <div className="md:w-full px-3">
              <label
                className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4 uppercase"
                htmlFor="grid-first-name"
              >
                Address
              </label>
              <input
                onChange={ClickInput}
                type="text"
                name="address"
                id="floating_email"
                className="pl-4 block py-[9px] px-0 w-full text-sm  bg-gray-100 rounded-[8px] border-[0.7px] border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder="Enter Address"
                required
              />
            </div>
          </div>
          <div className="flex justify-center">
            <input
              type="submit"
              onClick={handleSubmit}
              className="bg-black text-white hover:bg-yellow-400 hover:text-black border-2 transition-all ease-in-out duration-75 border-black font-[600] py-2 px-[2.4rem] mt-5 cursor-pointer rounded-[9px] text-[1rem]"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </PortalLayout>
  );
};

export default UserForm;
