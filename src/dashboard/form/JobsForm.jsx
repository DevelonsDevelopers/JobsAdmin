import React, { useEffect, useState } from 'react'
import PortalLayout from '../../portalLayout/PortalLayout'
import { createJob } from '../../store/actions/jobActions'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AllCountries } from '../../store/actions/countryActions'
import { AllCities, getCitybyCountry } from '../../store/actions/cityActions'
import { AllCategories } from '../../store/actions/categoryActions'

const JobsForm = () => {
    const [jobData, setJobData] = useState()
    const [country, setCountry] = useState()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const ClickInput = (e) => {
        setJobData(prev => ({ ...prev, [e.target.name]: e.target.value }))
        setCountry(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
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

    const fetchCitybyCountry = useSelector(state => state.city.cities)
    useEffect(() => {
        console.log(fetchCitybyCountry)
    }, [fetchCitybyCountry])

    useEffect(() => {
        if (country){
            dispatch(getCitybyCountry(country))
        }
    }, [dispatch, country])



    return (
        <PortalLayout >
            <h1 className='text-center bg-blue-600 text-white font-[600] mb-5 py-4 rounded-xl shadow-md shadow-blue-300 text-[1.5rem]'>ADD JOBS</h1>
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
                <div class="-mx-3 md:flex mb-6">
                    <div class="md:w-full px-3">
                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 " for="grid-Title">
                            Title
                        </label>
                        <input onChange={ClickInput} type="text" name="title" id="floating_Title" className="pl-4 block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent rounded-xl p-2 border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Title" required />
                    </div>
                </div>
                <div class="-mx-3 md:flex mb-2">
                    <div class="md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-state">
                            CATEGORY
                        </label>
                        <div class="relative">
                        <select onChange={ClickInput} name='category' class="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" id="grid-state">
                            <option>Select Country</option>
                            {categories?.map((value) => {
                                return <option>{value.name}</option>
                            })}

                        </select>
                        </div>
                    </div>
                    <div class="md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-state">
                            COUNTRY
                        </label>
                        <select onChange={ClickInput} name='country' class="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" id="grid-state">
                            <option>Select Country</option>
                            {countries?.map((value) => {
                                return <option value={value.id}>{value.name}</option>
                            })}

                        </select>
                    </div>
                    <div class="md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-state">
                            CITY
                        </label>
                        <div class="relative">
                            <select onChange={ClickInput} name='city' class="pl-4 block py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" id="grid-state">
                                <option>Select City</option>
                                {fetchCitybyCountry.data?.map((value) => {
                                    return <option >{value.name}</option>
                                })}

                            </select>
                        </div>
                    </div>
                </div>
                <div class="-mx-3 md:flex mb-2 mt-2">
                    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-city">
                            EXPERIENCE
                        </label>
                        <input name='experience' onChange={ClickInput} type="text" id="floating_email" className="pl-4 block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent rounded-xl p-2 border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Experience" required />
                    </div>
                    <div class="md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-state">
                            QUALIFICATION
                        </label>
                        <input name='qualification' onChange={ClickInput} type="text" id="floating_email" className="pl-4 block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent rounded-xl p-2 border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Qualification" required />
                    </div>
                    <div class="md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-zip">
                            SKILLS
                        </label>
                        <input name='skills' onChange={ClickInput} type="text" id="floating_email" className="pl-4 block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent rounded-xl p-2 border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Skills" required />
                    </div>
                </div>
                <div class="-mx-3 md:flex mb-2 mt-2">
                    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-city">
                            WORK DAY
                        </label>
                        <input name='days' onChange={ClickInput} type="text" id="floating_email" className="pl-4 block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent rounded-xl p-2 border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Work Day" required />
                    </div>
                    <div class="md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-state">
                            WORK TIME
                        </label>
                        <input name='time' type="time" id="floating_email" className="pl-4 block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent rounded-xl p-2 border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Work Time" required />

                    </div>
                    <div class="md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-zip">
                            DATE
                        </label>
                        <input name='date' type="date" id="floating_email" className="pl-4 block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent rounded-xl p-2 border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Date" required />
                    </div>
                    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
                            ADDRESS
                        </label>
                        <input onChange={ClickInput} type="text" name="address" id="floating_email" className="pl-4 block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent rounded-xl p-2 border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Address" required />
                    </div>
                    <div class="md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
                            TAGS
                        </label>
                        <input onChange={ClickInput} type="text" name="tags" id="floating_email" className="pl-4 block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent rounded-xl p-2 border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Tags" required />
                    </div>
                </div>
                <div class="-mx-3 md:flex mb-2 mt-2">
                    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-city">
                            COMPANY ROLE
                        </label>
                        <input onChange={ClickInput} type="text" name="role" id="floating_email" className="pl-4 block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent rounded-xl p-2 border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Company Role" required />
                    </div>
                    <div class="md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-state">
                            DESIGNATION
                        </label>
                        <input onChange={ClickInput} type="text" name="designation" id="floating_email" className="pl-4 block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent rounded-xl p-2 border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Designation" required />
                    </div>
                    <div class="md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-zip">
                            SALARY
                        </label>
                        <input onChange={ClickInput} type="text" name="salary" id="floating_email" className="pl-4 block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent rounded-xl p-2 border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Salary" required />
                    </div>
                </div>
                <div class="-mx-3 md:flex mb-6 mt-2">
                    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
                            LINK
                        </label>
                        <input onChange={ClickInput} type="text" name="link" id="floating_email" className="pl-4 block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent rounded-xl p-2 border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Link" required />
                    </div>
                    <div class="md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
                            TYPE
                        </label>
                        <input onChange={ClickInput} type="text" name="type" id="floating_email" className="pl-4 block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent rounded-xl p-2 border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter Type" required />
                    </div>
                </div>

                <div class="-mx-3 md:flex mb-6">
                    <div class="md:w-full px-3">
                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-Name">
                            Description
                        </label>
                        <textarea name='description' class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 rounded-xl mb-3 border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" id="grid-Name" onChange={ClickInput} type="text" placeholder="Enter Description" />
                    </div>
                </div>
                <div className='flex justify-center'>
                    <button onClick={handleSubmit} className='bg-gradient-to-r from-sky-600 to-cyan-400 text-white font-[600] py-2 px-[3rem] mt-4 rounded-lg'>Submit</button>
                </div>

            </form>

        </PortalLayout>
    )
}

export default JobsForm
