import React, { useEffect, useState } from 'react'
import PortalLayout from '../../portalLayout/PortalLayout'
import { createJob } from '../../store/actions/jobActions'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AllCountries } from '../../store/actions/countryActions'
import { AllCities, getCitybyCountry } from '../../store/actions/cityActions'
import { AllCategories } from '../../store/actions/categoryActions'
import { AllCompanies } from '../../store/actions/companyActions'

const JobsForm = () => {
    const [jobData, setJobData] = useState({ category: '', country: '', city: '', title: '', company: '', designation: '', salary: '', role: '', description: '', link: '', type: '', workdays: '', worktime: '', address: '', experience: '', qualification: '', skills: '', date: '', tags: '' })
    const [country, setCountry] = useState()
    const [tagValue, setTagValue] = useState("");
    const [tags, setTags] = useState([])
    const [skillValue, setSkillValue] = useState("");
    const [skills, setSkills] = useState([])

    const dispatch = useDispatch()
    const navigate = useNavigate()

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
    console.log(jobData)

    const deleteTag = (val) => {
      let remainTags = tags.filter((t) => t !== val)
      setTags(remainTags)
    }
    const deleteSkill = (val) => {
      let remainskills = skills.filter((t) => t !== val)
      setSkills(remainskills)
    }
    // console.log(jobData)

    const handleSubmit = (e) => {
      if(e.keyCode === 13){
        e.preventDefault()
        return false
      }
        dispatch(createJob(jobData))
        navigate('/jobs')
    }

    const countries = useSelector(state => state.country.countries)
    // useEffect(() => {
    //     console.log(countries)
    // }, [countries])

    useEffect(() => {
        dispatch(AllCountries())
    }, [dispatch])

    // const cities = useSelector(state => state.city.cities)
    // // useEffect(() => {
    // //     console.log(cities)
    // // }, [cities])

    // useEffect(() => {
    //     dispatch(AllCities())
    // }, [dispatch])

    const categories = useSelector(state => state.category.categories)
    // useEffect(() => {
    //     console.log(categories)
    // }, [categories])

    useEffect(() => {
        dispatch(AllCategories())
    }, [dispatch])

    const companies = useSelector(state => state.company.companies)
    // useEffect(() => {
    //     console.log(categories)
    // }, [categories])

    useEffect(() => {
        dispatch(AllCompanies())
    }, [dispatch])

    const citybyCountry = useSelector(state => state.city.citybycountry)
    // useEffect(() => {
    //     console.log(citybyCountry)
    // }, [citybyCountry])

    useEffect(() => {
        // console.log(country)
        if (country) {
            dispatch(getCitybyCountry(country))
        }
    }, [dispatch, country])



    return (
        <PortalLayout>
        <h1 className='text-center bg-gradient-to-r from-sky-600 to-cyan-400  text-white font-[600] mb-5 py-4 rounded-xl shadow-md shadow-blue-300 text-[1.5rem]'>ADD JOBS</h1>
        <div class="bg-white shadow-md rounded-xl px-[10rem] pt-6 pb-8 mb-4 flex flex-col  my-2">
          <div className="-mx-3 mt-[-1.2rem] mb-6">
            <div className="w-[100%] px-3 mb-6 md:mb-0 mt-5">
              <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                Title
              </label>
              <input type="text" name="title" id="floating_email" onChange={ClickInput} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Title" required />
            </div>
          </div>
          <div className="mt-[-1.2rem] mb-6">
          <div class="md:w-[100%] ">
                <label className="block text-left tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                  Company
                </label>
                <select onChange={ClickInput} name='company' class="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" id="grid-state">
                  <option>Select Company</option>
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
                <input type="text" name="experience" id="floating_email" onChange={ClickInput} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Experience" required />
              </div>
            </div>
            <div className="-mx-3 mt-[-1.2rem] mb-6">
              <div className="w-[100%] px-3 mb-6 md:mb-0">
                <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                  Qualification
                </label>
                <input type="text" name="qualification" id="floating_email" onChange={ClickInput} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Qualification " required />
              </div>
            </div>
  
          </div>
  
          <div className="-mx-3 mt-[-1.2rem] mb-6">
            <div className="w-[100%] px-3 mb-6 md:mb-0 mt-0">
              <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                Type
              </label>
              <input type="text" name="type" id="floating_email" onChange={ClickInput} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Type" required />
            </div>
          </div>
  
          <div class="grid grid-cols-2 gap-10 mt-[-12px]">
            <div class="md:w-[100%] ">
                <label className="block text-left tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                  Country
                </label>
                <select onChange={ClickInput} name='country' class="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" id="grid-state">
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
                <select onChange={ClickInput} name='city' class="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" id="grid-state">
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
                <select onChange={ClickInput} name='category' class="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" id="grid-state">
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
                  {/* <input type="text" name="tags" id="floating_email" onChange={ClickInput} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Tags" required /> */}
                  <div name="tags" className='  w-full flex text-sm text-gray-900 bg-gray-50 rounded-[9px] flex-wrap appearance-none  border-2 border-black border-[0.7px] border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer'>
                    {tags.map((item, index) => (
                      <button onClick={() => deleteTag(item)} className=' m-2 text-white bg-black outline-none border-none px-4 py-1 rounded-lg' key={index}>
                        {item}
                        <span  className='ml-5'>X</span>
                        </button>
                    ))}
                <input type="text" name="tags" value={tagValue} onChange={ClickInput}  id="floating_email" onKeyDown={addTags}  className= "pl-4 py-[9px] px-0 bg-gray-50 border-none  focus:outline-none w-full " placeholder="Enter Skills" required />
                </div>
                </div>
              </div>
  
            </div>          
          <div className="-mx-3 mt-[-.6rem] mb-7">
            <div className="w-[100%] px-3 mb-6 md:mb-0 mt-0">
              <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                Address
              </label>
              <input type="text" name="address" id="floating_email" onChange={ClickInput} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Address" required />
            </div>
          </div>
          <div className='grid grid-cols-2 gap-10 mt-2'>
            <div className="-mx-3 mt-[-1.2rem] mb-6">
              <div className="w-[100%] px-3 mb-6 md:mb-0">
                <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                  Skills
                </label>
                <div name="skills" className='  w-full flex text-sm text-gray-900 bg-gray-50 rounded-[9px] flex-wrap appearance-none  border-2 border-black border-[0.7px] border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer'>
                    {skills.map((item, index) => (
                      <button onClick={() => deleteSkill(item)} className=' m-2 text-white bg-black outline-none border-none px-4 py-1 rounded-lg' key={index}>
                        {item}
                        <span  className='ml-5'>X</span>
                        </button>
                    ))}
                <input type="text" name="skills" value={skillValue} onChange={ClickInput}  id="floating_email" onKeyDown={addSkills}  className= "pl-4 py-[9px] px-0 bg-gray-50 border-none  focus:outline-none w-full " placeholder="Enter Skills" required />
                </div>
              </div>
            </div>
            {/* <div className="-mx-3 mt-[-1.2rem] mb-6">
              <div className="w-[100%] px-3 mb-6 md:mb-0">
                <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                  Skills
                </label>
                <div className=' w-full text-sm text-gray-900 bg-gray-50 rounded-[9px]  appearance-none  border-2 border-black border-[0.7px] border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer'>
                <input type="text" name="skills" id="floating_email" onChange={ClickInput} className= "pl-4 py-[9px] px-0 bg-gray-50 border-none focus:outline-none w-full " placeholder="Enter Email" required />
                </div>
              </div>
            </div> */}
           
            <div className="-mx-3 mt-[-1.2rem] mb-6">
              <div className="w-[100%] px-3 mb-6 md:mb-0">
                <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                  Work Day
                </label>
                <input type="number" name="workdays" id="floating_email" onChange={ClickInput} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Work Days " required />
              </div>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-10 mt-2'>
            <div className="-mx-3 mt-[-1.2rem] mb-6">
              <div className="w-[100%] px-3 mb-6 md:mb-0">
                <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                  Work Time
                </label>
                <input type="time" name="worktime" id="floating_email" onChange={ClickInput} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Salary" required />
              </div>
            </div>
            <div className="-mx-3 mt-[-1.2rem] mb-6">
              <div className="w-[100%] px-3 mb-6 md:mb-0">
                <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                  Date
                </label>
                <input type="date" name="date" id="floating_email" onChange={ClickInput} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Company Role " required />
              </div>
            </div>
          </div>

          <div className='grid grid-cols-2 gap-10 mt-2'>
            <div className="-mx-3 mt-[-1.2rem] mb-6">
              <div className="w-[100%] px-3 mb-6 md:mb-0">
                <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                  Salary
                </label>
                <input type="text" name="salary" id="floating_email" onChange={ClickInput} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Salary" required />
              </div>
            </div>
            <div className="-mx-3 mt-[-1.2rem] mb-6">
              <div className="w-[100%] px-3 mb-6 md:mb-0">
                <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                 Company Role
                </label>
                <input type="text" name="role" id="floating_email" onChange={ClickInput} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Company Role" required />
              </div>
            </div>
          </div>

          <div className='grid grid-cols-2 gap-10 mt-2'>
            <div className="-mx-3 mt-[-1.2rem] mb-6">
              <div className="w-[100%] px-3 mb-6 md:mb-0">
                <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                  Link
                </label>
                <input type="text" name="link" id="floating_email" onChange={ClickInput} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Link" required />
              </div>
            </div>
            <div className="-mx-3 mt-[-1.2rem] mb-6">
              <div className="w-[100%] px-3 mb-6 md:mb-0">
                <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-first-name">
                Designation
                </label>
                <input type="text" name="designation" id="floating_email" onChange={ClickInput} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Designation " required />
              </div>
            </div>
          </div>

            <div className="-mx-3 ">
              <div className="w-[100%]  px-3">
                <label className="block uppercase tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" for="grid-Name">
                  Description
                </label>
                <textarea name='description' rows='4' onChange={ClickInput} className="appearance-none block w-full bg-gray-50  border-gray-lighter rounded py-3 px-4 rounded-[9px] mb-3 border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer text-[14px]" id="grid-Name" type="text" placeholder="Enter Description" />
              </div>
            </div>
          </div>
  
  
  
          <div className='flex justify-center'>
            <button onClick={handleSubmit} className='bg-gradient-to-r from-sky-600 to-cyan-400 text-white font-[600] py-2 px-[3rem] mt-4 rounded-lg'>Submit</button>
          </div>
  
        </div>
  
      </PortalLayout>
    )
}

export default JobsForm
