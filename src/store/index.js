import axios from "axios"



const API = axios.create({ baseURL: 'http://192.168.1.8:5001'})


//Categories
export const fetchAllCategories = () => API.get(`/categories/all`)
export const fetchCategory = (id) => API.get(`/categories/get`, {
    data: {
        id: id,
    }
})
export const createCategory = (category) => API.post(`/categories/create`, 
    {
        name: category.name,
        description: category.description,
        image: category.image,
    }
)
export const updateCategory = (name, description,image,id) => API.put(`/categories/update`, {
    data: {
        name: name,
        description: description,
        image: image,
        id: id,
    }
})
export const deleteCategory = (id) => API.delete(`/categories/:delete`, {
    data: {
        id: id
    }
})
// Cities
export const fetchAllCities = () => API.get(`/cities/all`)
export const fetchCity = (id) => API.get(`/cities/get` , {
    data: {
        id: id
    }
})
export const fetchCountrybyCity = (country) => API.get(`/cities/get` , {
    data: {
        country: country
    }
})
export const createCity = (city) => API.post(`/cities/create` , 
    {
        name: city.name,
        description: city.description,
        image: city.image,
    }
)
export const updateCity = (name, description,image, id) => API.get(`/cities/update`, {
    data: {
        name: name,
        description: description,
        image: image,
        id: id,
    }
})
export const deleteCity = (id) => API.delete(`/cities/:delete`, {
    data: {
        id: id
    }
})
//Jobs
export const fetchAllJobs = () => API.get(`/jobs/all`)
// Companies
export const fetchAllCompanies = () => API.get(`/companies/all`)
export const fetchCompany = (id) => API.get(`/companies/get`, {
    data: {
        id: id,
    }
}) 
export const createCompany =(company) => API.post(`/companies/create`, {
    name: company.name,
    size: company.size,
    city: company.city,
    country: company.country,
    phone: company.phone,
    email: company.email,
    password: company.password,
    headquter: company.headquter,
    type: company.type,
})
export const updateCompany = (id,name, size, city, country, phone, email, password, headquter, type) => API.get(`/companies/update`, {
    data: {
        name: name,
        size: size,
        city: city,
        country: country,
        phone: phone,
        email: email,
        password: password,
        headquter: headquter,
        type: type,
        id: id,
    }
})
export const deleteCompany = (id) => API.delete(`/companies/:delete`, {
    data: {
        id: id
    }
})
// Countries
export const fetchAllCountries = () => API.get(`/countries/all`)
export const fetchCountry = (id) => API.get(`/countries/get`, {
    data: {
        id: id,
    }
}) 
export const createCountry =(country) => API.post(`/countries/create`, {
    name: country.name,
    description: country.description,
    flag: country.flag,
})
export const updateCountry = (name, description,flag, id) => API.get(`/countries/update`, {
    data: {
        name: name,
        description: description,
        flag: flag,
        id: id,
    }
})
export const deleteCountry = (id) => API.delete(`/countries/:delete`, {
    data: {
        id: id
    }
})
// Plans
export const fetchAllPlans = () => API.get(`/plans/all`)
// Reports
export const fetchAllReports = () => API.get(`/reports/all`)
// Seekers
export const fetchAllSeekers = () => API.get(`/seekers/all`)
//Tags
export const fetchAllTags = () => API.get(`/tags/all`)
// Transactions
export const fetchAllTransactions = () => API.get(`/transactions/all`)
// Users
export const fetchAllUsers = () => API.get(`/users/all`)
// AppliedUsers
export const fetchAllAppliedUsers = () => API.get(`/applied/all`)




// export const fetchAllSeekers = () => API.get(`/seekers/all`)
