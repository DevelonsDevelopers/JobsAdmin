import React, { useEffect, useState } from "react";
import PortalLayout from "../../portalLayout/PortalLayout";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AllCountries } from "../../store/actions/countryActions";
import { AllCategories } from "../../store/actions/categoryActions";
import { AllCompanies } from "../../store/actions/companyActions";
import { getCitybyCountry } from "../../store/actions/cityActions";
import { getJob, updateJob } from "../../store/actions/jobActions";
import moment from "moment";
import JoditEditor from "jodit-react";
import Select from "react-select";
import { SESSION_PROVIDER_LOGIN } from "../../Utils/Constant";

const JobsEdit = () => {
  const [jobData, setJobData] = useState({
    category: "",
    country: "",
    city: "",
    city_name: "",
    title: "",
    company: "",
    company_name: "",
    designation: "",
    salary: "",
    role: "",
    description: "",
    link: "",
    type: "",
    workdays: "",
    worktime: "",
    address: "",
    experience: "",
    qualification: "",
    skills: "",
    date: "2023-02-12",
    tags: "",
  });
  const [country, setCountry] = useState();

  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [date, setDate] = useState();
  const [providerLogin, setProviderLogin] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const isprovider = sessionStorage.getItem(SESSION_PROVIDER_LOGIN);
    if (isprovider === "true") {
      setProviderLogin(true);
    }
  }, [providerLogin]);

  const [tagValue, setTagValue] = useState("");
  const [tags, setTags] = useState([]);
  const [skillValue, setSkillValue] = useState("");
  const [skills, setSkills] = useState([]);

  const [content, setContent] = useState("");

  const [inputValue, setValue] = useState("");
  const [selectedValue, setSelectedValue] = useState(null);

  const handleInputChange = (value) => {
    setValue(value);
  };

  const handleChange = (value) => {
    setSelectedValue(value);
  };

  const deleteTag = (val) => {
    let remainTags = tags.filter((t) => t !== val);
    setTags(remainTags);
  };

  // const deleteSkill = (val) => {
  //   let remainSkills = skills.filter((t) => t !== val)
  //   setSkills(remainSkills)
  // }

  const addTags = (e) => {
    console.log(tagValue);
    if (e.keyCode === 13 && tagValue) {
      setTags([...tags, tagValue]);
      setTagValue("");
    }
  };

  //Skills Add
  const addSkills = (e) => {
    if (e.keyCode === 13 && skillValue) {
      setSkills([...skills, skillValue]);
      setSkillValue("");
    }
  };
  const deleteSkill = (val) => {
    let remainskills = skills.filter((t) => t !== val);
    setSkills(remainskills);
  };

  useEffect(() => {
    console.log(tags);
    setJobData({ ...jobData, tags: tags.toString() });
  }, [tags]);

  useEffect(() => {
    console.log(skills);
    setJobData({ ...jobData, skills: skills.toString() });
  }, [skills]);

  useEffect(() => {
    setJobData({ ...jobData, worktime: startTime + " - " + endTime });
  }, [startTime, endTime]);

  useEffect(() => {
    setJobData({ ...jobData, date: moment(date).format("YYYY-MM-DD") });
  }, [date]);

  useEffect(() => {
    setJobData({ ...jobData, description: content });
  }, [content]);

  const params = useLocation();
  const id = params.state.ID;
  // console.log(id)

  const job = useSelector((state) => state.job.job);
  useEffect(() => {
    console.log("job", job);
  }, [job]);
  useEffect(() => {
    dispatch(getJob(id));
  }, [dispatch]);

  useEffect(() => {
    if (job) {
      setTags((job?.tags).split(","));
      setSkills((job?.skills).split(","));
      setJobData({
        category: job?.category,
        country: job?.country,
        city: job?.city,
        city_name: job?.city_name,
        title: job?.title,
        company: job?.company,
        company_name: job?.company_n,
        designation: job?.designation,
        salary: job?.salary,
        role: job?.role,
        description: job?.description,
        link: job?.link,
        type: job?.type,
        workdays: job?.workdays,
        worktime: job?.worktime,
        address: job?.address,
        experience: job?.experience,
        qualification: job?.qualification,
        skills: job?.skills,
        date: moment(job?.date).format("YYYY-MM-DD"),
        tags: job?.tags,
      });
    }
  }, [job]);
  // useEffect(() => {
  //   console.log('jobdata', jobData)
  // }, [jobData])

  const ClickInput = (e) => {
    if (e.target.name !== "skills" || e.target.name !== "tags") {
      setJobData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
    if (e.target.name === "country") {
      setCountry(e.target.value);
    }

    if (e.target.name === "skills") {
      setSkillValue(e.target.value);
    }
    if (e.target.name === "tags") {
      setTagValue(e.target.value);
    }
  };
  // console.log(jobData)

  // const handleSubmit = (e) => {
  //     e.preventDefault()
  //     dispatch(createJob(jobData))
  //     navigate('/jobs')
  // }

  const countries = useSelector((state) => state.country.countries);

  useEffect(() => {
    dispatch(AllCountries());
  }, [dispatch]);

  const categories = useSelector((state) => state.category.categories);

  useEffect(() => {
    dispatch(AllCategories());
  }, [dispatch]);

  const companies = useSelector((state) => state.company.companies);
  useEffect(() => {
    dispatch(AllCompanies());
  }, [dispatch]);

  const citybyCountry = useSelector((state) => state.city.citybycountry);
  useEffect(() => {
    // console.log(country)
    if (country) {
      dispatch(getCitybyCountry(country));
    }
  }, [dispatch, country]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      jobData.category &&
      jobData.country &&
      jobData.city &&
      jobData.title &&
      jobData.company_name &&
      jobData.designation &&
      jobData.salary &&
      jobData.role &&
      jobData.description &&
      jobData.type &&
      jobData.workdays &&
      // jobData.worktime &&
      jobData.address &&
      jobData.experience &&
      jobData.qualification &&
      jobData.skills &&
      // jobData.date &&
      jobData.tags
    ) {
      dispatch(updateJob(id, jobData));
      navigate(providerLogin ? "/jobProvider" : "/jobs");
    } else {
      alert("plz fill the data");
    }
  };

  return (
    <PortalLayout>
      <h1 className="text-center bg-black text-white font-[600] mb-5 py-4 rounded-[8px] shadow-lg text-[1.5rem]">
        EDIT JOBS
      </h1>
      <div className="bg-yellow-400 shadow-md rounded-xl px-[10rem] max-md:px-4 py-10 mb-4 flex flex-col my-2">
        <div className=" mt-5">
          <div className="w-[100%] md:mb-0">
            <label
              className="uppercase block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4"
              for="grid-first-name"
            >
              Title
            </label>
            <input
              value={jobData.title}
              type="text"
              name="title"
              id="floating_email"
              onChange={ClickInput}
              className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[8px] border-[0.7px] border-gray-600 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Enter Company Name"
              required
            />
          </div>
        </div>
        <div className="mt-5">
          <div className="md:w-[100%] ">
            <label
              className="uppercase block text-left tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4"
              for="grid-first-name"
            >
              Company
            </label>
            {providerLogin ? (
              <input
                type="text"
                value={jobData?.company_name}
                id="floating_email"
                disabled
                className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[8px] border-[0.7px] border-gray-600 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder="Enter Company"
                required
              />
            ) : (
              <input
                type="text"
                value={jobData?.company_name}
                name="company_name"
                id="floating_email"
                onChange={ClickInput}
                className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[8px] border-[0.7px] border-gray-600 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder="Enter Company"
                required
              />
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div className=" mt-5">
            <div className="w-[100%] md:mb-0">
              <label
                className="uppercase block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4"
                for="grid-first-name"
              >
                Experience
              </label>
              <input
                value={jobData.experience}
                type="text"
                name="experience"
                id="floating_email"
                onChange={ClickInput}
                className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[8px] border-[0.7px] border-gray-600 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder="Enter Email"
                required
              />
            </div>
          </div>
          <div className=" mt-5">
            <div className="w-[100%] md:mb-0">
              <label
                className="uppercase block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4"
                for="grid-first-name"
              >
                Qualification
              </label>
              <input
                value={jobData.qualification}
                type="text"
                name="qualification"
                id="floating_email"
                onChange={ClickInput}
                className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[8px] border-[0.7px] border-gray-600 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder="Enter Contact Number "
                required
              />
            </div>
          </div>
        </div>

        <div className=" mt-5">
          <div className="w-[100%] md:mb-0 mt-0">
            <label
              className="uppercase block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4"
              for="grid-first-name"
            >
              Type
            </label>
            {/* <input value={jobData.type} type="text" name="type" id="floating_email" onChange={ClickInput} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[8px] border-[0.7px] border-gray-600 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Company Name" required /> */}
            <select
              value={jobData.type}
              onChange={ClickInput}
              name="type"
              className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[8px] border-[0.7px] border-gray-600 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              id="grid-state"
            >
              <option>Select Type</option>
              <option>Full-Time</option>
              <option>Part-Time</option>
              <option>Remote</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5 mt-5">
          <div className="md:w-[100%] ">
            <label
              className="uppercase block text-left tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4"
              for="grid-first-name"
            >
              Country
            </label>
            {/* <Select
              cacheOptions
              defaultOptions
              options={countries?.map((val) => {
                return {
                  id: val.id,
                  name: val.name
                }
              })}
              value={selectedValue}
              getOptionLabel={(e) => e.name}
              getOptionValue={(e) => e.id}
              onInputChange={handleInputChange}
              onChange={handleChange}
              id="grid-state"
            >
            </Select> */}
            <select
              value={jobData.country}
              onChange={ClickInput}
              name="country"
              className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[8px] border-[0.7px] border-gray-600 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              id="grid-state"
            >
              <option>Select Country</option>
              {countries?.map((value) => {
                return (
                  <option value={value.id} key={value.id}>
                    {value.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="md:w-[100%] ">
            <label
              className="uppercase block text-left tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4"
              for="grid-first-name"
            >
              City
            </label>
            <select
              value={jobData.city}
              onChange={ClickInput}
              name="city"
              className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[8px] border-[0.7px] border-gray-600 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              id="grid-state"
            >
              <option>Select City</option>
              {citybyCountry?.map((value) => {
                return (
                  <option value={value.id} key={value.id}>
                    {value.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="flex-col">
          <div className="grid grid-cols-2 gap-5  mt-5">
            <div className="md:w-[100%] ">
              <label
                className="uppercase block text-left tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4"
                for="grid-first-name"
              >
                Category
              </label>
              <select
                value={jobData.category}
                onChange={ClickInput}
                name="category"
                className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[8px] border-[0.7px] border-gray-600 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                id="grid-state"
              >
                <option>Select Category</option>
                {categories?.map((value) => {
                  return (
                    <option value={value.id} key={value.id}>
                      {value.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="">
              <div className="w-[100%] md:mb-0">
                <label
                  className="uppercase block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4"
                  for="grid-first-name"
                >
                  Tags
                </label>
                {/* <input value={jobData.tags} type="text" name="tags" id="floating_email" onChange={ClickInput} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[8px] border-[0.7px] border-gray-600 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Company Size" required /> */}
                <div
                  name="tags"
                  className="  w-full flex text-sm text-gray-900 bg-gray-50 rounded-[8px] flex-wrap appearance-none  border-2 border-black border-[0.7px] border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                >
                  {tags.map((item, index) => (
                    <button
                      onClick={() => deleteTag(item)}
                      className=" m-2 text-white bg-black outline-none border-none px-4 py-1 rounded-lg"
                      key={index}
                    >
                      {item}
                      <span className="ml-5">X</span>
                    </button>
                  ))}
                  <input
                    type="text"
                    name="tags"
                    value={tagValue}
                    onKeyDown={addTags}
                    onChange={ClickInput}
                    id="floating_email"
                    className="pl-4 py-[9px] px-0 bg-gray-50 border-none  focus:outline-none w-full "
                    placeholder="Enter Skills"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-5">
            <div className="w-[100%] md:mb-0 mt-0">
              <label
                className="uppercase block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4"
                for="grid-first-name"
              >
                Address
              </label>
              <input
                value={jobData.address}
                type="text"
                name="address"
                id="floating_email"
                onChange={ClickInput}
                className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[8px] border-[0.7px] border-gray-600 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder="Enter Company Name"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className=" mt-5">
              <div className="w-[100%] md:mb-0">
                <label
                  className="uppercase block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4"
                  for="grid-first-name"
                >
                  Skills
                </label>
                {/* <input value={jobData.skills} type="text" name="skills" id="floating_email" onChange={ClickInput} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[8px] border-[0.7px] border-gray-600 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Email" required /> */}
                {/* <div name="skills" className='  w-full flex text-sm text-gray-900 bg-gray-50 rounded-[8px] flex-wrap appearance-none  border-2 border-black border-[0.7px] border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer'>
                  {skills.map((item, index) => (
                    <button onClick={() => deleteSkill(item)} className=' m-2 text-white bg-black outline-none border-none px-4 py-1 rounded-lg' key={index}>
                      {item}
                      <span className='ml-5'>X</span>
                    </button>
                  ))}
                  <input type="text" name="skills" value={skillValue} onKeyDown={addSkills} onChange={ClickInput} id="floating_email" className="pl-4 py-[9px] px-0 bg-gray-50 border-none  focus:outline-none w-full " placeholder="Enter Skills" required />
                </div> */}
                <div
                  name="skills"
                  className="  w-full flex text-sm text-gray-900 bg-gray-50 rounded-[8px] flex-wrap appearance-none  border-2 border-black border-[0.7px] border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                >
                  {skills.map((item, index) => (
                    <button
                      onClick={() => deleteSkill(item)}
                      className=" m-2 text-white bg-black outline-none border-none px-4 py-1 rounded-lg"
                      key={index}
                    >
                      {item}
                      <span className="ml-5">X</span>
                    </button>
                  ))}
                  <input
                    type="text"
                    name="skills"
                    value={skillValue}
                    onChange={ClickInput}
                    id="floating_email"
                    onKeyDown={addSkills}
                    className="pl-4 py-[9px] px-0 bg-gray-50 border-none  focus:outline-none w-full "
                    placeholder="Enter Skills"
                    required
                  />
                </div>
              </div>
            </div>
            <div className=" mt-5">
              <div className="w-[100%] :mb-0">
                <label
                  className="uppercase block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4"
                  for="grid-first-name"
                >
                  Work Day
                </label>
                <input
                  value={jobData?.workdays}
                  type="text"
                  name="workdays"
                  id="floating_email"
                  onChange={ClickInput}
                  className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[8px] border-[0.7px] border-gray-600 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="Enter Contact Number "
                  required
                />
              </div>
            </div>
          </div>
          {/* <div className="grid grid-cols-3 gap-5">
            <div className=" mt-5">
              <div className="w-[100%] md:mb-0">
                <label
                  className="uppercase block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4"
                  for="grid-first-name"
                >
                  Start Time
                </label>
                <input
                  value={jobData?.worktime.slice(0, 5)}
                  type="time"
                  name="worktime"
                  id="floating_email"
                  onChange={(e) => setStartTime(e.target.value)}
                  className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[8px] border-[0.7px] border-gray-600 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="Enter Start Time"
                  required
                />
              </div>
            </div>
            <div className=" mt-5">
              <div className="w-[100%] md:mb-0">
                <label
                  className="uppercase block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4"
                  for="grid-first-name"
                >
                  End Time
                </label>
                <input
                  value={jobData.worktime.slice(8, 13)}
                  type="time"
                  name="worktime"
                  id="floating_email"
                  onChange={(e) => setEndTime(e.target.value)}
                  className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[8px] border-[0.7px] border-gray-600 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="Enter End Time"
                  required
                />
              </div>
            </div>
            <div className=" mt-5">
              <div className="w-[100%] md:mb-0">
                <label
                  className="uppercase block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4"
                  for="grid-first-name"
                >
                  Date
                </label>
                <input
                  value={moment(jobData.date).format("YYYY-MM-DD")}
                  type="date"
                  name="date"
                  id="floating_email"
                  onChange={(e) => setDate(e.target.value)}
                  className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[8px] border-[0.7px] border-gray-600 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="Enter Contact Number "
                  required
                />
              </div>
            </div>
          </div> */}

          <div className="grid grid-cols-2 gap-5">
            <div className=" mt-5">
              <div className="w-[100%] md:mb-0">
                <label
                  className="uppercase block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4"
                  for="grid-first-name"
                >
                  Salary
                </label>
                <input
                  value={jobData.salary}
                  type="text"
                  name="salary"
                  id="floating_email"
                  onChange={ClickInput}
                  className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[8px] border-[0.7px] border-gray-600 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="Enter Email"
                  required
                />
              </div>
            </div>
            <div className=" mt-5">
              <div className="w-[100%] md:mb-0">
                <label
                  className="uppercase block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4"
                  for="grid-first-name"
                >
                  Company Role
                </label>
                <input
                  value={jobData.role}
                  type="text"
                  name="role"
                  id="floating_email"
                  onChange={ClickInput}
                  className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[8px] border-[0.7px] border-gray-600 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="Enter Contact Number "
                  required
                />
              </div>
            </div>
          </div>

          <div
            className={`grid ${
              providerLogin ? "grid-cols-1" : "grid-cols-2"
            } gap-5 mt-5`}
          >
            {/* <div className=" mt-5">
              <div className="w-[100%] md:mb-0">
                <label
                  className="uppercase block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4"
                  for="grid-first-name"
                >
                  Link
                </label>
                <input
                  value={jobData.link}
                  type="text"
                  name="link"
                  id="floating_email"
                  onChange={ClickInput}
                  className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[8px] border-[0.7px] border-gray-600 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="Enter Email"
                  required
                />
              </div>
            </div> */}
            {providerLogin ? (
              ""
            ) : (
              <div className="-mx-3 mb-6">
                <div className="w-[100%] px-3 md:mb-0">
                  <label
                    className="block tracking-wide uppercase text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4"
                    htmlFor="grid-first-name"
                  >
                    Link
                  </label>
                  <input
                    value={jobData.link}
                    type="text"
                    name="link"
                    id="floating_email"
                    onChange={ClickInput}
                    className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[8px] border-[0.7px] border-gray-600 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder="Enter Link"
                    required
                  />
                </div>
              </div>
            )}
            <div className="">
              <div className="w-[100%] md:mb-0">
                <label
                  className="uppercase block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4"
                  for="grid-first-name"
                >
                  Designation
                </label>
                <input
                  value={jobData.designation}
                  type="text"
                  name="designation"
                  id="floating_email"
                  onChange={ClickInput}
                  className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[8px] border-[0.7px] border-gray-600 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="Enter Contact Number "
                  required
                />
              </div>
            </div>
          </div>

          <div className="">
            <div className="w-[100%]">
              <label
                className="uppercase block tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4"
                for="grid-Name"
              >
                Description
              </label>
              {/* <textarea value={jobData.description} name='description' rows='4' onChange={ClickInput} className="appearance-none block w-full bg-gray-50  border-gray-lighter rounded py-3 px-4 rounded-[8px] mb-3 border-[0.7px] border-gray-600 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer text-[14px]" id="grid-Name" type="text" placeholder="Enter HeadQuarter Addres" /> */}
              <JoditEditor
                // ref={editor}
                name="description"
                tabIndex={1} // tabIndex of textarea
                value={jobData?.description}
                // onChange={newContent => setContent(newContent)}
                onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <input
            type="submit"
            onClick={handleSubmit}
            className="bg-black text-white hover:bg-yellow-400 hover:text-black border-2 transition-all ease-in-out duration-75 border-black font-[600] py-2 px-[2.4rem] mt-5 cursor-pointer rounded-[8px] text-[1rem]"
            value="Submit"
          />
        </div>
      </div>
    </PortalLayout>
  );
};

export default JobsEdit;
