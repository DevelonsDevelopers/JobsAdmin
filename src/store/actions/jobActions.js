import { ALL_JOBS, CREATE_JOB, DELETE_JOB, GETCATEGORY_JOB, GETCITY_JOB, GETCOMPANY_JOB, GETCOUNTRY_JOB, GET_JOB, GET_JOBS, JOBS_STATUS, LOADING, RECENT_JOB, SUCCESS, UPDATE_JOB } from "../../Utils/Constant";
import * as api from '../../store/index'



export const AllJobs = () => async (dispatch) => {
    try{
        dispatch ({ type: LOADING})
        const { data: { data }} = await api.fetchAllJobs();
        dispatch({ type: ALL_JOBS, payload: { jobs: data }})
        dispatch({ type: SUCCESS })
    } catch(error) {
        console.log(error)
    }
}

export const getJobs = () => async (dispatch) => {
    try{
        const { data: { data } } = await api.fetchJobs()
        dispatch({ type: GET_JOBS, payload: data})
    }catch(error) {
        console.log(error)
    }
}
export const getRecentJob = () => async (dispatch) => {
    try{
        const { data: { data } } = await api.fetchRecentJobs()
        // console.log(id)
        dispatch({ type: RECENT_JOB, payload: data})
    }catch(error) {
        console.log(error)
    }
}
export const getJob = (id) => async (dispatch) => {
    try{
        const { data: { data } } = await api.fetchJob(id)
        // console.log(id)
        dispatch({ type: GET_JOB, payload: data})
    }catch(error) {
        console.log(error)
    }
}

export const getCategorybyJob = (category) => async (dispatch) => {
    try{
        const { data } = await api.fetchCategorybyJob(category)
        dispatch({ type: GETCATEGORY_JOB, payload: data})
    } catch(error){
        console.log(error)
    }
}

export const getCountrybyJob = (country) => async (dispatch) => {
    try{
        const { data } = await api.fetchCountrybyJob(country)
        dispatch({ type: GETCOUNTRY_JOB, payload: data})
    } catch(error){
        console.log(error)
    }
}
export const getCitybyJob = (city) => async (dispatch) => {
    try{
        const { data } = await api.fetchCitybyJob(city)
        dispatch({ type: GETCITY_JOB, payload: data})
    } catch(error){
        console.log(error)
    }
}

export const getCompanybyJob = (company) => async (dispatch) => {
    try{
        const { data: {data} } = await api.fetchCompanybyJob(company)
        dispatch({ type: GETCOMPANY_JOB, payload: data})
    } catch(error){
        console.log(error)
    }
}

export const createJob = (job) => async (disptach) =>{
    try{
        const {data: { data }} = await api.createJob(job)
        console.log(data)
        disptach({ type: CREATE_JOB, payload: data})
    }catch(error){
        console.log(error)
    }
}

export const updateJob = (id , job) => async (dispatch) => {
    try{
        const { data } = await api.updateJob(id, job.category, job.country, job.city, job.title, job.company, job.company_name, job.designation, job.salary, job.role, job.description, job.link, job.type, job.workdays, job.worktime, job.address, job.experience, job.qualification, job.skills, job.date, job.tags)
        console.log(id)
        dispatch({ type: UPDATE_JOB, payload: data})
    }catch(error){
        console.log(error)
    }
}

export const jobStatus = (id, status) => async (dispatch) => {
    try{
        const { data } = await api.jobStatus(id, status)
        console.log(data)
        dispatch({ type: JOBS_STATUS, payload: { id: id, status: status }})
    }catch(error){
        console.log(error)
    }
}

export const DeleteJob = (id) => async (dispatch) => {
    try {
        const { data } = await api.deleteJob(id)
        console.log(id)
        dispatch({ type: DELETE_JOB, payload: id})
    } catch(error) {
        console.log(error);
    }
}
