import axios from "axios"



const API = axios.create({ baseURL: 'http://192.168.1.4:5001'})



export const fetchAllCategories = () => API.get(`/categories/all`)
export const fetchAllCities = () => API.get(`/cities/all`)
export const fetchAllJobs = () => API.get(`/jobs/all`)
export const fetchAllCompanies = () => API.get(`/companies/all`)
export const fetchAllCountries = () => API.get(`/countries/all`)
export const fetchAllPlans = () => API.get(`/plans/all`)
export const fetchAllReports = () => API.get(`/reports/all`)
export const fetchAllSeekers = () => API.get(`/seekers/all`)
export const fetchAllTags = () => API.get(`/tags/all`)
export const fetchAllTransactions = () => API.get(`/transactions/all`)
export const fetchAllUsers = () => API.get(`/users/all`)
export const fetchAllAppliedUsers = () => API.get(`/applied/all`)
// export const fetchAllSeekers = () => API.get(`/seekers/all`)
