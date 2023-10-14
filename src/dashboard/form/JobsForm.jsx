import React, { useEffect, useMemo, useRef, useState } from 'react'
import PortalLayout from '../../portalLayout/PortalLayout'
import { createJob } from '../../store/actions/jobActions'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AllCountries } from '../../store/actions/countryActions'
import { AllCities, getCitybyCountry } from '../../store/actions/cityActions'
import { AllCategories } from '../../store/actions/categoryActions'
import { AllCompanies } from '../../store/actions/companyActions'
import Select from 'react-select'
import JoditEditor from 'jodit-react'
import moment from 'moment'
import { AllTags } from '../../store/actions/tagActions'


const JobsForm = ({ }) => {
  const [jobData, setJobData] = useState({ category: '', country: '', city: '', title: '', company: 0, company_name: '', designation: '', salary: '', role: '', description: '', link: '', type: '', workdays: '', worktime: '', address: '', experience: '', qualification: '', skills: '', date: '', tags: '' })
  const [country, setCountry] = useState()
  const [tagValue, setTagValue] = useState("");

  const [startTime, setStartTime] = useState()
  const [endTime, setEndTime] = useState()
  const [date, setDate] = useState()


  // useEffect(() => {
  //   console.log(startTime)
  //   // setTotalDuration(startTime + '-' + endTime)
  //   // console.log('good', totalDuration)
  // }, [])

  // useEffect(() => {
  // }, [totalDuration])

  const editor = useRef(null);
  const [content, setContent] = useState('');
  // console.log(content)

  const [tags, setTags] = useState([])
  const [skillValue, setSkillValue] = useState("");
  const [skills, setSkills] = useState([])


  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [inputValue, setValue] = useState("")
  const [selectedValue, setSelectedValue] = useState(null)

  const [inputCityValue, setCityValue] = useState("")
  const [selectedCityValue, setSelectedCityValue] = useState(null)

  const [inputCompanyValue, setCompanyValue] = useState("")
  const [selectedCompanyValue, setSelectedCompanyValue] = useState(null)

  const [inputCategoryValue, setCategoryValue] = useState("")
  const [selectedCategoryValue, setSelectedCategoryValue] = useState(null)

  const [inputTagValue, setInputTagValue] = useState("")
  const [selectedTagValue, setSelectedTagValue] = useState([])
  // console.log('name', selectedTagValue?.map((value) => (value.name)))

  useEffect(() => {
    console.log(jobData);
  }, [jobData])


//onChange function
const ClickInput = (e) => {
  if (e.target.name !== 'skills' || e.target.name !== 'tags') {
    setJobData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }
  if (e.target.name === 'country') {
    setCountry(e.target.value)
  }

  if (e.target.name === 'skills') {
    setSkillValue(e.target.value)
  }
  if (e.target.name === 'tags') {
    setTagValue(e.target.value)
  }
}
const handleInputChange = (value) => {
  setValue(value)
}

const handleChange = (value) => {
  setSelectedValue(value)
}
const cityInputChange = (value) => {
  setCityValue(value)
}

const cityChange = (value) => {
  setSelectedCityValue(value)

}
const companyInputChange = (value) => {
  setCompanyValue(value)
}

const companyChange = (value) => {
  setSelectedCompanyValue(value)
}

const categoryInputChange = (value) => {
  setCategoryValue(value)
}

const categoryChange = (value) => {
  setSelectedCategoryValue(value)
}

const tagInputChange = (value) => {
  setInputTagValue(value)
}

const tagChange = (value) => {
  setSelectedTagValue(value)
}


//Fetching Data=================================================
const categories = useSelector(state => state.category.categories)
// useEffect(() => {
//     console.log(categories)
// }, [categories])

// useEffect(() => {
//   dispatch(AllCategories())
// }, [dispatch])

const citybyCountry = useSelector(state => state.city.citybycountry)
// useEffect(() => {
//     console.log(citybyCountry)
// }, [citybyCountry])

useEffect(() => {
  if (selectedValue?.id) {
    dispatch(getCitybyCountry(selectedValue?.id))
  }
}, [dispatch, selectedValue?.id])

const companies = useSelector(state => state.company.companies)
// useEffect(() => {
//     console.log(categories)
// }, [categories])

// useEffect(() => {
//   dispatch(AllCompanies())
// }, [dispatch])
//==================================================

// Adding data to jobData
useEffect(() => {
  setJobData({ ...jobData, date: moment(date).format('YYYY-MM-DD') })
}, [date])

useEffect(() => {
  setJobData({ ...jobData, worktime: startTime + " - " + endTime })
}, [startTime, endTime])

useEffect(() => {
  setJobData({ ...jobData, description: content })
}, [content])

useEffect(() => {
  setJobData({ ...jobData, country: selectedValue?.id })
}, [selectedValue])

useEffect(() => {
  setJobData({ ...jobData, city: selectedCityValue?.id })
}, [selectedCityValue])

useEffect(() => {
  setJobData({ ...jobData, company: selectedCompanyValue?.id })
}, [selectedCompanyValue])

useEffect(() => {
  setJobData({ ...jobData, category: selectedCategoryValue?.id })
}, [selectedCategoryValue])

useEffect(() => {
  setJobData({ ...jobData, tags: selectedTagValue.map((value) => (value.name)).toString() })
}, [selectedTagValue])

// useEffect(() => {
//   setJobData({ ...jobData, tags: tags.toString() })
// }, [tags])

useEffect(() => {
  setJobData({ ...jobData, skills: skills.toString() })
}, [skills])

useEffect(() => {
  console.log(jobData);
}, [jobData])


//=======================================================

//Tags Add
const addTags = (e) => {
  if (e.keyCode === 13 || e.keyCode === 32 && tagValue) {
    setTags([...tags, tagValue])
    setTagValue("")
  }
}

const deleteTag = (val) => {
  let remainTags = tags.filter((t) => t !== val)
  setTags(remainTags)
}

//Skills Add
const addSkills = (e) => {
  if (e.keyCode === 13 || e.keyCode === 32 && skillValue) {
    setSkills([...skills, skillValue])
    setSkillValue("")
  }
}

const deleteSkill = (val) => {
  let remainskills = skills.filter((t) => t !== val)
  setSkills(remainskills)
}

const countries = useSelector(state => state.country.countries)
// useEffect(() => {
//     console.log(countries)
// }, [countries])

useEffect(() => {
  dispatch(AllCountries())
}, [dispatch])

const allTags = useSelector(state => state.tag.tags)

// useEffect(() => {
//   console.log(allTags);
// }, [allTags])

useEffect(() => {
  dispatch(AllTags())
}, [dispatch])

// Update Function
const handleSubmit = (e) => {
  e.preventDefault()
  if (jobData.category && jobData.country && jobData.city && jobData.title && jobData.company_name && jobData.designation && jobData.salary && jobData.role && jobData.description && jobData.type && jobData.workdays && jobData.worktime && jobData.address && jobData.experience && jobData.qualification && jobData.skills && jobData.date && jobData.tags) {
    dispatch(createJob(jobData))
    navigate('/jobs')
  } else {
    alert('plz fill the data')
  }
}

return (
  <PortalLayout>
    <h1 className='text-center bg-gradient-to-r from-sky-600 to-cyan-400  text-white font-[600] mb-5 py-4 rounded-xl shadow-md shadow-blue-300 text-[1.5rem]'>ADD JOBS</h1>
    <div className="bg-white shadow-md rounded-xl px-[10rem] pt-6 pb-8 mb-4 flex flex-col  my-2">
      <div className="-mx-3 mt-[-1.2rem] mb-6">
        <div className="w-[100%] px-3 mb-6 md:mb-0 mt-5">
          <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" htmlFor="grid-first-name">
            Title
          </label>
          <input type="text" name="title" id="floating_email" onChange={ClickInput} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Title" required />
        </div>
      </div>
      <div className="mt-[-1.2rem] mb-6">
        <div className="md:w-[100%] ">
          <label className="block text-left tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" htmlFor="grid-first-name">
            Company
          </label>
          {/* <Select
            cacheOptions
            defaultOptions
            options={companies?.map((val) => {
              return {
                id: val.id,
                name: val.name
              }
            })}
            value={selectedCompanyValue}
            getOptionLabel={(e) => e.name}
            getOptionValue={(e) => e.id}
            onInputChange={companyInputChange}
            onChange={companyChange}
            id="grid-state"
          >
          </Select> */}
          <input type="text" name="company_name" id="floating_email" onChange={ClickInput} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Company" required />
        </div>
      </div>

      <div className='grid grid-cols-2 gap-10 mt-2'>
        <div className="-mx-3 mt-[-1.2rem] mb-6">
          <div className="w-[100%] px-3 mb-6 md:mb-0">
            <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" htmlFor="grid-first-name">
              Experience
            </label>
            <input type="text" name="experience" id="floating_email" onChange={ClickInput} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Experience" required />
          </div>
        </div>
        <div className="-mx-3 mt-[-1.2rem] mb-6">
          <div className="w-[100%] px-3 mb-6 md:mb-0">
            <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" htmlFor="grid-first-name">
              Qualification
            </label>
            <input type="text" name="qualification" id="floating_email" onChange={ClickInput} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Qualification " required />
          </div>
        </div>

      </div>

      <div className="-mx-3 mt-[-1.2rem] mb-6">
        <div className="w-[100%] px-3 mb-6 md:mb-0 mt-0">
          <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" htmlFor="grid-first-name">
            Type
          </label>
          <select onChange={ClickInput} name='type' className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" id="grid-state">
            <option>Select Type</option>
            <option>Full-Time</option>
            <option>Part-Time</option>
            <option>Remote</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-10 mt-[-12px]">
        <div className="md:w-[100%] ">
          <label className="block text-left tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" htmlFor="grid-first-name">
            Country
          </label>
          <Select
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
          </Select>
        </div>
        <div className="md:w-[100%] ">
          <label className="block text-left tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" htmlFor="grid-first-name">
            City
          </label>
          <Select
            cacheOptions
            defaultOptions
            options={citybyCountry?.map((val) => {
              return {
                id: val.id,
                name: val.name
              }
            })}
            value={selectedCityValue}
            getOptionLabel={(e) => e.name}
            getOptionValue={(e) => e.id}
            onInputChange={cityInputChange}
            onChange={cityChange}
            id="grid-state"
          >
          </Select>
        </div>
      </div>
      <div className='flex-col mt-4'>
        <div className='grid grid-cols-2 gap-10 '>
          <div className="md:w-[100%] ">
            <label className="block text-left tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" htmlFor="grid-first-name">
              Category
            </label>
            <Select
              cacheOptions
              defaultOptions
              options={categories?.map((val) => {
                return {
                  id: val.id,
                  name: val.name
                }
              })}
              value={selectedCategoryValue}
              getOptionLabel={(e) => e.name}
              getOptionValue={(e) => e.id}
              onInputChange={categoryInputChange}
              onChange={categoryChange}
              id="grid-state"
            >
            </Select>
          </div>
          <div className="-mx-3  mb-6 ">
            <div className="w-[100%] px-3 mb-6 md:mb-0">
              <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" htmlFor="grid-first-name">
                Tags
              </label>

              <Select
                cacheOptions
                defaultOptions
                options={allTags?.map((val) => {
                  return {
                    id: val.id,
                    name: val.name
                  }
                })}
                value={selectedTagValue}
                getOptionLabel={(e) => e.name}
                getOptionValue={(e) => e.id}
                onInputChange={tagInputChange}
                onChange={tagChange}
                isMulti={true}
                id="grid-state"
              >
              </Select>
              {/* <div name="tags" className='  w-full flex text-sm text-gray-900 bg-gray-50 rounded-[9px] flex-wrap appearance-none  border-2 border-black border-[0.7px] border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer'>
                  {tags.map((item, index) => (
                    <button onClick={() => deleteTag(item)} className=' m-2 text-white bg-black outline-none border-none px-4 py-1 rounded-lg' key={index}>
                      {item}
                      <span className='ml-5'>X</span>
                    </button>
                  ))}
                  <input type="text" name="tags" value={tagValue} onChange={ClickInput} id="floating_email" onKeyDown={addTags} className="pl-4 py-[9px] px-0 bg-gray-50 border-none  focus:outline-none w-full " placeholder="Enter Skills(eg.English,Urdu etc)" required />
                </div> */}
            </div>
          </div>

        </div>
        <div className="-mx-3 mt-[-.6rem] mb-7">
          <div className="w-[100%] px-3 mb-6 md:mb-0 mt-0">
            <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" htmlFor="grid-first-name">
              Address
            </label>
            <input type="text" name="address" id="floating_email" onChange={ClickInput} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Address(eg. Lahore, Pakistan)" required />
          </div>
        </div>
        <div className='grid grid-cols-2 gap-10 mt-2'>
          <div className="-mx-3 mt-[-1.2rem] mb-6">
            <div className="w-[100%] px-3 mb-6 md:mb-0">
              <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" htmlFor="grid-first-name">
                Skills
              </label>
              <div name="skills" className='  w-full flex text-sm text-gray-900 bg-gray-50 rounded-[9px] flex-wrap appearance-none  border-2 border-black border-[0.7px] border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer'>
                {skills.map((item, index) => (
                  <button onClick={() => deleteSkill(item)} className=' m-2 text-white bg-black outline-none border-none px-4 py-1 rounded-lg' key={index}>
                    {item}
                    <span className='ml-5'>X</span>
                  </button>
                ))}
                <input type="text" name="skills" value={skillValue} onChange={ClickInput} id="floating_email" onKeyDown={addSkills} className="pl-4 py-[9px] px-0 bg-gray-50 border-none  focus:outline-none w-full " placeholder="Enter Skills" required />
              </div>
            </div>
          </div>
          <div className="-mx-3 mt-[-1.2rem] mb-6">
            <div className="w-[100%] px-3 mb-6 md:mb-0">
              <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" htmlFor="grid-first-name">
                Work Day
              </label>
              <input type="text" name="workdays" id="floating_email" onChange={ClickInput} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Work Days(eg. mon-friday, mon,tue,wed,etc) " required />
            </div>
          </div>
        </div>
        <div className='grid grid-cols-3 gap-10 mt-2'>
          <div className="-mx-3 mt-[-1.2rem] mb-6">
            <div className="w-[100%] px-3 mb-6 md:mb-0">
              <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" htmlFor="grid-first-name">
                Start Time
              </label>
              <input type="time" name="worktime" id="floating_email" onChange={(e) => setStartTime(e.target.value)} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Start Time" required />
            </div>
          </div>
          <div className="-mx-3 mt-[-1.2rem] mb-6">
            <div className="w-[100%] px-3 mb-6 md:mb-0">
              <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" htmlFor="grid-first-name">
                End Time
              </label>
              <input type="time" name="worktime" id="floating_email" onChange={(e) => setEndTime(e.target.value)} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter End Time" required />
            </div>
          </div>
          <div className="-mx-3 mt-[-1.2rem] mb-6">
            <div className="w-[100%] px-3 mb-6 md:mb-0">
              <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" htmlFor="grid-first-name">
                Date
              </label>
              <input type="date" id="floating_email" onChange={(e) => setDate(e.target.value)} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Company Role " required />
            </div>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-10 mt-2'>
          <div className="-mx-3 mt-[-1.2rem] mb-6">
            <div className="w-[100%] px-3 mb-6 md:mb-0">
              <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" htmlFor="grid-first-name">
                Salary
              </label>
              <input type="text " name="salary" id="floating_email" onChange={ClickInput} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Salary (eg. 1000-5000$, etc)" required />
            </div>
          </div>
          <div className="-mx-3 mt-[-1.2rem] mb-6">
            <div className="w-[100%] px-3 mb-6 md:mb-0">
              <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" htmlFor="grid-first-name">
                Role
              </label>
              <input type="text" name="role" id="floating_email" onChange={ClickInput} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Role(eg. Designer)" required />
            </div>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-10 mt-2'>
          <div className="-mx-3 mt-[-1.2rem] mb-6">
            <div className="w-[100%] px-3 mb-6 md:mb-0">
              <label className="block  tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" htmlFor="grid-first-name">
                Designation
              </label>
              <input type="text" name="designation" id="floating_email" onChange={ClickInput} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Designation " required />
            </div>
          </div>
          <div className="-mx-3 mt-[-1.2rem] mb-6">
            <div className="w-[100%] px-3 mb-6 md:mb-0">
              <label className="block tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" htmlFor="grid-first-name">
                Link
              </label>
              <input type="text" name="link" id="floating_email" onChange={ClickInput} className="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Designation " required />
            </div>
          </div>
        </div>
        <div className="-mx-3 ">
          <div className="w-[100%]  px-3">
            <label className="block uppercase tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4" htmlFor="grid-Name">
              Description
            </label>
            <JoditEditor
              // ref={editor}
              name='description'
              tabIndex={1} // tabIndex of textarea
              value={content}
              onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
            />
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
