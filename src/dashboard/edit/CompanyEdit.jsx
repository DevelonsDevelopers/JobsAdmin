import React, { useEffect, useState } from "react";
import PortalLayout from "../../portalLayout/PortalLayout";
import { useLocation, useNavigate } from "react-router-dom";
import { getCompany, updateCompany } from "../../store/actions/companyActions";
import { useDispatch, useSelector } from "react-redux";
import { AllCountries } from "../../store/actions/countryActions";
import { AllCities, getCitybyCountry } from "../../store/actions/cityActions";
import Select from "react-select";

const CompanyEdit = () => {
  const [companyData, setCompanyData] = useState({
    name: "",
    size: "",
    city: "",
    country: "",
    email: "",
    password: "",
    headquater: "",
    phone: "",
    type: "",
  });
  const [country, setCountry] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [inputValue, setValue] = useState("");
  const [selectedValue, setSelectedValue] = useState(null);

  const [inputCityValue, setCityValue] = useState("");
  const [selectedCityValue, setSelectedCityValue] = useState(null);

  useEffect(() => {
    setCompanyData({ ...companyData, country: selectedValue?.id });
  }, [selectedValue]);

  useEffect(() => {
    setCompanyData({ ...companyData, city: selectedCityValue?.id });
  }, [selectedCityValue]);

  // console.log(selectedCityValue)

  const handleInputChange = (value) => {
    setValue(value);
  };

  const handleChange = (value) => {
    setSelectedValue(value);
    // if (e.target.name === 'country') {
    //   setCountry(e.target.value)
    // }
  };
  const cityInputChange = (value) => {
    setCityValue(value);
  };

  const cityChange = (value) => {
    setSelectedCityValue(value);
  };

  const params = useLocation();
  const id = params.state.ID;
  // console.log(id)

  const company = useSelector((state) => state.company.company);
  // useEffect(() => {
  //   console.log(company)
  // }, [company])

  useEffect(() => {
    dispatch(getCompany(id));
  }, [dispatch]);

  useEffect(() => {
    if (company) {
      setCompanyData({
        city: company?.city,
        country: company?.country,
        email: company?.email,
        headquater: company?.headquater,
        name: company?.name,
        phone: company?.phone,
        size: company?.size,
        type: company?.type,
      });
      // console.log(companyData)
    }
  }, [company]);

  const ClickInput = (e) => {
    setCompanyData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (e.target.name === "country") {
      setCountry(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      companyData.city &&
      companyData.country &&
      companyData.email &&
      companyData.headquater &&
      companyData.name &&
      companyData.phone &&
      companyData.size &&
      companyData.type
    ) {
      dispatch(updateCompany(id, companyData));
      navigate("/companies");
    } else {
      alert("plz fill the data");
    }
  };
  // console.log(companyData)

  const countries = useSelector((state) => state.country.countries);

  useEffect(() => {
    dispatch(AllCountries());
  }, [dispatch]);

  const cityByCountry = useSelector((state) => state.city.citybycountry);

  // useEffect(() => {
  //   console.log(cityByCountry)
  // }, [cityByCountry])
  useEffect(() => {
    // console.log(selectedValue?.id)
    if (selectedValue?.id) {
      dispatch(getCitybyCountry(selectedValue?.id));
    }
  }, [dispatch, selectedValue?.id]);

  // const cities = useSelector(state => state.city.cities)

  // useEffect(() => {
  //   dispatch(AllCities())
  // }, [dispatch])

  return (
    <PortalLayout>
      <h1 className="text-center bg-black text-white font-[600] mb-5 py-4 rounded-[8px] shadow-lg text-[1.5rem]">
        EDIT COMPANY
      </h1>
      <form className="bg-yellow-400 shadow-md rounded-xl px-[10rem] max-md:px-4 py-10 mb-4 flex flex-col my-2">
        <div className="mt-5">
          <div className="w-[100%] md:mb-0">
            <label
              className="uppercase block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4"
              htmlFor="grid-first-name"
            >
              Name
            </label>
            <input
              value={companyData.name}
              onChange={ClickInput}
              type="text"
              name="name"
              id="floating_email"
              className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-100 rounded-[8px] border-[0.7px] border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Enter Company Name"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div className="mt-5">
            <div className="w-[100%] md:mb-0">
              <label
                className="uppercase block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4"
                htmlFor="grid-first-name"
              >
                Email
              </label>
              <input
                value={companyData.email}
                onChange={ClickInput}
                type="email"
                name="email"
                id="floating_email"
                className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-100 rounded-[8px] border-[0.7px] border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder="Enter Email"
                required
              />
            </div>
          </div>
          <div className="mt-5">
            <div className="w-[100%] md:mb-0">
              <label
                className="uppercase block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4"
                htmlFor="grid-first-name"
              >
                Phone
              </label>
              <input
                value={companyData.phone}
                onChange={ClickInput}
                type="number"
                name="phone"
                id="floating_email"
                className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-100 rounded-[8px] border-[0.7px] border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder="Enter Contact Number "
                required
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5 mt-5">
          <div className="md:w-[100%] ">
            <label
              className="block text-left tracking-wide uppercase text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4"
              htmlFor="grid-first-name"
            >
              Country
            </label>
            <Select
              cacheOptions
              defaultOptions
              options={countries?.map((val) => {
                return {
                  id: val.id,
                  name: val.name,
                };
              })}
              value={countries?.filter((val) =>
                val.id === companyData?.country
                  ? { id: val.id, name: val.name }
                  : ""
              )}
              getOptionLabel={(e) => e.name}
              getOptionValue={(e) => e.id}
              onInputChange={handleInputChange}
              onChange={handleChange}
              //  name='country'
              id="grid-state"
            ></Select>
          </div>

          <div className="md:w-[100%] ">
            <label
              className="uppercase block text-left tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4"
              htmlFor="grid-first-name"
            >
              City
            </label>
            <Select
              cacheOptions
              defaultOptions
              options={cityByCountry?.map((val) => {
                return {
                  id: val.id,
                  name: val.name,
                };
              })}
              value={cityByCountry?.filter((val) =>
                val.id === companyData?.city
                  ? { id: val.id, name: val.name }
                  : ""
              )}
              getOptionLabel={(e) => e.name}
              getOptionValue={(e) => e.id}
              onInputChange={cityInputChange}
              onChange={cityChange}
              //  name='country'
              id="grid-state"
            ></Select>
            {/* <select value={companyData.city}  onChange={ClickInput}  name='city' className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-100 rounded-[8px] border-[0.7px] border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" id="grid-state">
                {cityByCountry?.map((value) => {
                  return <option value={value.id}>{value.name}</option>
                })}
              </select> */}
          </div>
        </div>
        <div className="flex-col">
          <div className="grid grid-cols-2 gap-5">
            <div className="mt-5">
              <div className="w-[100%] md:mb-0">
                <label
                  className="uppercase block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4"
                  htmlFor="grid-first-name"
                >
                  Type
                </label>
                {/* <input type="text" name="type" id="floating_email"  className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-100 rounded-[8px] border-[0.7px] border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Company Type" required /> */}
                <select
                  value={companyData.type}
                  onChange={ClickInput}
                  name="type"
                  className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-100 rounded-[8px] border-[0.7px] border-gray-600 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  id="grid-state"
                >
                  <option>Select Type</option>
                  <option>Individual</option>
                  <option>Organization</option>
                </select>
              </div>
            </div>
            <div className="mt-5">
              <div className="w-[100%] md:mb-0">
                <label
                  className="uppercase block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4"
                  htmlFor="grid-first-name"
                >
                  Size
                </label>
                <input
                  value={companyData.size}
                  onChange={ClickInput}
                  type="text"
                  name="size"
                  id="floating_email"
                  className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-100 rounded-[8px] border-[0.7px] border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="Enter Company Size"
                  required
                />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div className="w-[100%]">
              <label
                className="uppercase block tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4"
                htmlFor="grid-Name"
              >
                HeadQuarter
              </label>
              <input
                value={companyData.headquater}
                onChange={ClickInput}
                type="text"
                name="headquater"
                id="floating_email"
                className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-100 rounded-[8px] border-[0.7px] border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder="Enter Company Name"
                required
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <input
            type="submit"
            onClick={handleSubmit}
            className="bg-black text-white hover:bg-yellow-400 hover:text-black border-2 transition-all ease-in-out duration-75 border-black font-[600] py-2 px-[2.4rem] cursor-pointer rounded-[9px] text-[1rem]"
            value="Submit"
          />
        </div>
      </form>
    </PortalLayout>
  );
};

export default CompanyEdit;
