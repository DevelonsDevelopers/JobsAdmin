import React, { useEffect, useState } from 'react'
import PortalLayout from '../../portalLayout/PortalLayout'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AllCountries } from '../../store/actions/countryActions'
import { AllCategories } from '../../store/actions/categoryActions'
import { AllCompanies } from '../../store/actions/companyActions'
import { getCitybyCountry } from '../../store/actions/cityActions'
import { getJob, updateJob } from '../../store/actions/jobActions'

const JobsEdit = () => {
    const [jobData, setJobData] = useState({ category: '', country: '', city: '', title: '', company: '', designation: '', salary: '', role: '', description: '', link: '', type: '', workdays: '', worktime: '', address: '', experience: '', qualification: '', skills: '', date: '', tags: '' })
    const [country, setCountry] = useState()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [tagValue, setTagValue] = useState("");
    const [tags, setTags] = useState([])
    const [skillValue, setSkillValue] = useState("");
    const [skills, setSkills] = useState([])


    const deleteTag = (val) => {
      let remainTags = tags.filter((t) => t !== val)
      setTags(remainTags)
    }

    const deleteSkill = (val) => {
      let remainSkills = skills.filter((t) => t !== val)
      setSkills(remainSkills)
    }

    const addTags = (e) => {
      if(e.keyCode === 13 || e.keyCode === 32  && tagValue) {
        setTags([...tags, tagValue])
        setTagValue("")
      }
    }

    const addSkills = (e) => {
      if(e.keyCode === 13 || e.keyCode === 32 && skillValue) {
        setSkills([...skills, skillValue])
        setSkillValue("") 
      }
    }

    useEffect(() => {
      console.log(tags)
      setJobData({...jobData, tags: tags.toString()})
    }, [tags])

    useEffect(() => {
      console.log(skills)
      setJobData({...jobData, skills: skills.toString()})
    }, [skills])

    const params = useLocation();
    const id = params.state.ID;
    // console.log(id)

    const job = useSelector(state => state.job.job)
    // useEffect(() => {
    //     console.log(job)
    // }, [job])
    useEffect(() => {
        dispatch(getJob(id))
    }, [dispatch])

    useEffect(() => {
        if(job){
          setTags((job?.tags).split(','))
          setSkills((job?.skills).split(','))
            setJobData({ category: job?.category, country: job?.country, city: job?.city, title: job?.title, company: job?.company, designation: job?.designation, salary: job?.salary, role: job?.role ,description: job?.description, link: job?.link, type: job?.type, workdays: job?.workdays, worktime: job?.worktime, address: job?.address, experience: job?.experience, qualification: job?.qualification, skills: job?.skills, date: job?.date, tags: job?.tags})
        }
    }, [job])
    console.log(jobData)

    const ClickInput = (e) => {
      
      if (e.target.name !== 'skills' || e.target.name !== 'tags'){
        setJobData(prev => ({ ...prev, [e.target.name]: e.target.value }))
      }
      if (e.target.name === 'country'){
        setCountry(e.target.value)
    }
    
         if (e.target.name === 'skills'){
          setSkillValue(e.target.value)
        }
         if (e.target.name === 'tags'){
          setTagValue(e.target.value)
        }
    }
    // console.log(jobData)

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     dispatch(createJob(jobData))
    //     navigate('/jobs')
    // }

    const countries = useSelector(state => state.country.countries)

    useEffect(() => {
        dispatch(AllCountries())
    }, [dispatch])

    const categories = useSelector(state => state.category.categories)

    useEffect(() => {
        dispatch(AllCategories())
    }, [dispatch])

    const companies = useSelector(state => state.company.companies)
    useEffect(() => {
        dispatch(AllCompanies())
    }, [dispatch])

    const citybyCountry = useSelector(state => state.city.citybycountry)
    useEffect(() => {
        // console.log(country)
        if (country) {
            dispatch(getCitybyCountry(country))
        }
    }, [dispatch, country])

    const handleSubmit =(e) => {
      e.preventDefault()
      if(jobData.category && jobData.country && jobData.city && jobData.title && jobData.company && jobData.designation && jobData.salary && jobData.role && jobData.description && jobData.link && jobData.type && jobData.workdays && jobData.worktime && jobData.address && jobData.experience && jobData.qualification && jobData.skills && jobData.date && jobData.tags){
        dispatch(updateJob(id, jobData))
        navigate('/jobs')
      } else{
        alert('plz fill the data')
      }
    }

    return (
        <PortalLayout>
        <h1 className='text-center bg-gradient-to-r from-sky-600 to-cyan-400  text-white font-[600] mb-5 py-4 rounded-xl shadow-md shadow-blue-300 text-[1.5rem]'>ADD JOBS</h1>
        <form class="bg-white shadow-md rounded-xl px-[10rem] pt-6 pb-8 mb-4 flex flex-col  my-2">
          <div className="-mx-3 mt-[-1.2rem] mb-6">
            <div className="w-[100%] px-3 mb-6 md:mb-0 mt-5">
              <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                Title
              </label>
              <input value={jobData.title} type="text" name="title" id="floating_email" onChange={ClickInput} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Company Name" required />
            </div>
          </div>
          <div className=" mt-[-1.2rem] mb-6">
          <div class="md:w-[100%] ">
                <label className="block text-left tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                  Company
                </label>
                <select value={jobData.company} onChange={ClickInput} name='company' class="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" id="grid-state">
                  {/* <option>Select Company</option> */}
                  {companies?.map((value) => {
                    return <option value={value.id}>{value.name}</option>
                  })}
  
                </select>
            </div>
          </div>
  
          <div className='grid grid-cols-2 gap-10 mt-2'>
            <div className="-mx-3 mt-[-1.2rem] mb-6">
              <div className="w-[100%] px-3 mb-6 md:mb-0">
                <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                  Experience
                </label>
                <input value={jobData.experience} type="text" name="experience" id="floating_email" onChange={ClickInput} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Email" required />
              </div>
            </div>
            <div className="-mx-3 mt-[-1.2rem] mb-6">
              <div className="w-[100%] px-3 mb-6 md:mb-0">
                <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                  Qualification
                </label>
                <input value={jobData.qualification} type="text" name="qualification" id="floating_email" onChange={ClickInput} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Contact Number " required />
              </div>
            </div>
  
          </div>
  
          <div className="-mx-3 mt-[-1.2rem] mb-6">
            <div className="w-[100%] px-3 mb-6 md:mb-0 mt-0">
              <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                Type
              </label>
              {/* <input value={jobData.type} type="text" name="type" id="floating_email" onChange={ClickInput} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Company Name" required /> */}
              <select value={jobData.type} onChange={ClickInput} name='type' class="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" id="grid-state">
                <option>Select Type</option>
                   <option>Full-Time</option>
                   <option>Part-Time</option>
                   <option>Remote</option>
              </select> 
            </div>
          </div>
  
          <div class="grid grid-cols-2 gap-10 mt-[-12px]">
            <div class="md:w-[100%] ">
                <label className="block text-left tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                  Country
                </label>
                <select value={jobData.country} onChange={ClickInput} name='country' class="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" id="grid-state">
                  <option>Select Country</option>
                  {countries?.map((value) => {
                    return <option value={value.id}>{value.name}</option>
                  })}
  
                </select>
            </div>
            <div class="md:w-[100%] ">
                <label className="block text-left tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                  City
                </label>
                <select value={jobData.city} onChange={ClickInput} name='city' class="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" id="grid-state">
                  <option>Select City</option>
                  {citybyCountry?.map((value) => {
                    return <option value={value.id}>{value.name}</option>
                  })}
  
                </select>
            </div>
          </div>
          <div className='flex-col mt-4'>
            <div className='grid grid-cols-2 gap-10 '>
            <div class="md:w-[100%] ">
                <label className="block text-left tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                  Category
                </label>
                <select value={jobData.category} onChange={ClickInput} name='category' class="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" id="grid-state">
                  <option>Select Category</option>
                  {categories?.map((value) => {
                    return <option value={value.id}>{value.name}</option>
                  })}
  
                </select>
            </div>
              <div className="-mx-3  mb-6 ">
                <div className="w-[100%] px-3 mb-6 md:mb-0">
                  <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                    Tags
                  </label>
                  {/* <input value={jobData.tags} type="text" name="tags" id="floating_email" onChange={ClickInput} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Company Size" required /> */}
                  <div name="tags" className='  w-full flex text-sm text-gray-900 bg-gray-50 rounded-[9px] flex-wrap appearance-none  border-2 border-black border-[0.7px] border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer'>
                    {tags.map((item, index) => (
                      <button onClick={() => deleteTag(item)} className=' m-2 text-white bg-black outline-none border-none px-4 py-1 rounded-lg' key={index}>
                        {item}
                        <span  className='ml-5'>X</span>
                        </button>
                    ))}
                <input type="text" name="tags" value={tagValue} onKeyDown={addTags} onChange={ClickInput}  id="floating_email"   className= "pl-4 py-[9px] px-0 bg-gray-50 border-none  focus:outline-none w-full " placeholder="Enter Skills" required />
                </div>
                </div>
              </div>
  
            </div>          
          <div className="-mx-3 mt-[-.6rem] mb-7">
            <div className="w-[100%] px-3 mb-6 md:mb-0 mt-0">
              <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                Address
              </label>
              <input value={jobData.address} type="text" name="address" id="floating_email" onChange={ClickInput} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Company Name" required />
            </div>
          </div>
          <div className='grid grid-cols-2 gap-10 mt-2'>
            <div className="-mx-3 mt-[-1.2rem] mb-6">
              <div className="w-[100%] px-3 mb-6 md:mb-0">
                <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                  Skills
                </label>
                {/* <input value={jobData.skills} type="text" name="skills" id="floating_email" onChange={ClickInput} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Email" required /> */}
                <div name="skills" className='  w-full flex text-sm text-gray-900 bg-gray-50 rounded-[9px] flex-wrap appearance-none  border-2 border-black border-[0.7px] border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer'>
                    {skills.map((item, index) => (
                      <button onClick={() => deleteSkill(item)} className=' m-2 text-white bg-black outline-none border-none px-4 py-1 rounded-lg' key={index}>
                        {item}
                        <span  className='ml-5'>X</span>
                        </button>
                    ))}
                <input type="text" name="skills" value={skillValue} onKeyDown={addSkills} onChange={ClickInput}  id="floating_email"   className= "pl-4 py-[9px] px-0 bg-gray-50 border-none  focus:outline-none w-full " placeholder="Enter Skills" required />
                </div> 
              </div>
            </div>
            <div className="-mx-3 mt-[-1.2rem] mb-6">
              <div className="w-[100%] px-3 mb-6  :mb-0">
                <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                  Work Day
                </label>
                <input value={jobData.workdays} type="number" name="workdays" id="floating_email" onChange={ClickInput} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Contact Number " required />
              </div>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-10 mt-2'>
            <div className="-mx-3 mt-[-1.2rem] mb-6">
              <div className="w-[100%] px-3 mb-6 md:mb-0">
                <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                  Work Time
                </label>
                <input value={jobData.worktime} type="time" name="worktime" id="floating_email" onChange={ClickInput} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Email" required />
              </div>
            </div>
            <div className="-mx-3 mt-[-1.2rem] mb-6">
              <div className="w-[100%] px-3 mb-6 md:mb-0">
                <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                  Date
                </label>
                <input value={jobData.date} type="date" name="date" id="floating_email" onChange={ClickInput} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Contact Number " required />
              </div>
            </div>
          </div>

          <div className='grid grid-cols-2 gap-10 mt-2'>
            <div className="-mx-3 mt-[-1.2rem] mb-6">
              <div className="w-[100%] px-3 mb-6 md:mb-0">
                <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                  Salary
                </label>
                <input value={jobData.salary} type="text" name="salary" id="floating_email" onChange={ClickInput} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Email" required />
              </div>
            </div>
            <div className="-mx-3 mt-[-1.2rem] mb-6">
              <div className="w-[100%] px-3 mb-6 md:mb-0">
                <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                 Company Role
                </label>
                <input value={jobData.role} type="text" name="role" id="floating_email" onChange={ClickInput} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Contact Number " required />
              </div>
            </div>
          </div>

          <div className='grid grid-cols-2 gap-10 mt-2'>
            <div className="-mx-3 mt-[-1.2rem] mb-6">
              <div className="w-[100%] px-3 mb-6 md:mb-0">
                <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                  Link
                </label>
                <input value={jobData.link} type="text" name="link" id="floating_email" onChange={ClickInput} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Email" required />
              </div>
            </div>
            <div className="-mx-3 mt-[-1.2rem] mb-6">
              <div className="w-[100%] px-3 mb-6 md:mb-0">
                <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                Designation
                </label>
                <input value={jobData.designation} type="text" name="designation" id="floating_email" onChange={ClickInput} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Contact Number " required />
              </div>
            </div>
          </div>

            <div className="-mx-3 ">
              <div className="w-[100%]  px-3">
                <label className="block uppercase tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-Name">
                  Description
                </label>
                <textarea value={jobData.description} name='description' rows='4' onChange={ClickInput} className="appearance-none block w-full bg-gray-50  border-gray-lighter rounded py-3 px-4 rounded-[9px] mb-3 border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer text-[14px]" id="grid-Name" type="text" placeholder="Enter HeadQuarter Addres" />
              </div>
            </div>
          </div>
  
  
  
          <div className='flex justify-center'>
            <button onClick={handleSubmit} className='bg-gradient-to-r from-sky-600 to-cyan-400 text-white font-[600] py-2 px-[3rem] mt-4 rounded-lg'>Submit</button>
          </div>
  
        </form>
  
      </PortalLayout>
    )
}

export default JobsEdit
