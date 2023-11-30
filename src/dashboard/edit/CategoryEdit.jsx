import React, { useEffect, useState } from "react";
import PortalLayout from "../../portalLayout/PortalLayout";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategory,
  updateCategory,
} from "../../store/actions/categoryActions";
import { useLocation, useNavigate } from "react-router-dom";

const CategoryEdit = () => {
  const params = useLocation();
  const id = params.state.ID;

  const [categoryData, setCategoryData] = useState({
    name: "",
    image: "",
    description: "",
  });
  const [Base64IMG, setBase64IMG] = useState("");
  const category = useSelector((state) => state.category.category);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //fetch Category by Id
  useEffect(() => {
    dispatch(getCategory(id));
  }, [dispatch]);

  //passing fetched data to categoryData
  useEffect(() => {
    if (category) {
      setCategoryData({
        name: category?.name,
        image: category?.image,
        description: category?.description,
      });
    }
  }, [category]);

  //Update Button
  const handleSubmit = (e) => {
    e.preventDefault();
    if (categoryData.name && categoryData.image && categoryData.description) {
      dispatch(updateCategory(id, categoryData));
      navigate("/categories");
    } else {
      alert("plz fill the data");
    }
  };

  //onChange
  const ClickInput = (e) => {
    setCategoryData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  // console.log(categoryData)

  useEffect(() => {
    setCategoryData({ ...categoryData, image: Base64IMG });
  }, [Base64IMG]);

  //base64 Function
  const convertToBase64 = (e) => {
    const reader = new FileReader();

    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      // console.log('called: ', reader)
      setBase64IMG(reader.result);
    };
  };

  return (
    <PortalLayout>
      <h1 className="text-center bg-black text-white font-[600] mb-5 py-4 rounded-[8px] shadow-lg text-[1.5rem]">
        EDIT CATEGORY
      </h1>
      <div className="bg-yellow-400 shadow-md rounded-xl px-[10rem] max-md:px-4 py-10 mb-4 flex flex-col my-2">
        <form action="">
          <div className="grid grid-cols-2 gap-10 max-md:grid-cols-1 ">
            <div className="flex-col">
              <div className="">
                <div className="w-[100%] mb-6 md:mb-0">
                  <label
                    className="block tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4 uppercase"
                    htmlFor="grid-first-name"
                  >
                    Name
                  </label>
                  <input
                    value={categoryData.name}
                    type="text"
                    name="name"
                    id="floating_email"
                    onChange={ClickInput}
                    className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-100 rounded-[9px] border-[0.7px] border-gray-600 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder="Enter Job"
                    required
                  />
                </div>
              </div>
              <div className="-mx-3 mt-5">
                <div className="w-[100%]  px-3">
                  <label
                    className="block uppercase tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4"
                    htmlFor="grid-Name"
                  >
                    Description
                  </label>
                  <textarea
                    value={categoryData.description}
                    name="description"
                    minLength="30"
                    maxLength="500"
                    rows="7"
                    onChange={ClickInput}
                    className=" block w-full bg-gray-100  border-gray-lighter py-3 px-4 rounded-[8px] mb-3 border-[0.7px] border-gray-600 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer text-[14px]"
                    id="grid-Name"
                    type="text"
                    placeholder="Enter Description"
                  />
                </div>
              </div>
            </div>

            <div className=" w-full max-md:mt-[-25px]">
              <label
                className="block uppercase tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4"
                htmlFor="grid-Name"
              >
                Image
              </label>
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-600 border-dashed rounded-lg cursor-pointer bg-gray-100 "
              >
                {categoryData?.image.length !== 0 ? (
                  <>
                    <img
                      src={categoryData.image}
                      alt=""
                      className="h-full w-full object-cover rounded-md"
                    />
                    <input
                      id="dropzone-file"
                      type="file"
                      className="hidden"
                      onChange={convertToBase64}
                    />
                  </>
                ) : (
                  <>
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        className="w-8 h-8 mb-4 text-gray-500 "
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="mb-2 text-sm text-gray-500 ">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 ">
                        SVG, PNG, JPG or GIF
                      </p>
                    </div>
                    <input
                      id="dropzone-file"
                      type="file"
                      className="hidden"
                      onChange={convertToBase64}
                    />
                  </>
                )}
              </label>
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

export default CategoryEdit;
