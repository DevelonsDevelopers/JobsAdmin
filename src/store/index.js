import axios from "axios"



const API = axios.create({ baseURL: 'http://192.168.1.16:5001' })


//Categories
export const fetchAllCategories = () => API.get(`/categories/all`)
export const fetchCategory = (id) => API.post(`/categories/get`,
    {
        id: id,
    })
export const createCategory = (category) => API.post(`/categories/create`,
    {
        name: category.name,
        description: category.description,
        image: category.image,
    }
)
export const updateCategory = (name, description, image, id) => API.put(`/categories/update`,
    {
        name: name,
        description: description,
        image: image,
        id: id
    })
export const deleteCategory = (id) => API.delete(`/categories/delete`, {
    data: {
        id: id
    }
})
// Countries
export const fetchAllCountries = () => API.get(`/countries/all`)
export const fetchCountry = (id) => API.post(`/countries/get`,
    {
        id: id,
    })
export const createCountry = (country) => API.post(`/countries/create`, {
    name: country.name,
    description: country.description,
    flag: country.flag,
})
export const updateCountry = (id, name, description, flag) => API.put(`/countries/update`,
    {
        name: name,
        description: description,
        flag: flag,
        id: id,
    })

export const deleteCountry = (id) => API.delete(`/countries/delete`, {
    data: {
        id: id
    }
})
// Cities
export const fetchAllCities = () => API.get(`/cities/all`)
export const fetchCity = (id) => API.post(`/cities/get`,
    {
        id: id
    })
export const fetchCitybyCountry = (country) => API.post(`/cities/country`, {
    country: country
})
export const createCity = (city) => API.post(`/cities/create`,
    {
        name: city.name,
        description: city.description,
        country: city.country,
    }
)
export const updateCity = (name, country, description, id) => API.put(`/cities/update`, {
    name: name,
    description: description,
    country: country,
    id: id,
})
export const deleteCity = (id) => API.delete(`/cities/delete`, {
    data: {
        id: id
    }
})
//Jobs
export const fetchAllJobs = () => API.get(`/jobs/all`)
export const fetchJob = (id) => API.post(`/jobs/get`,
    {
        id: id,
    })
export const fetchCategorybyJob = (category) => API.get(`/jobs/category`, {
    data: {
        category: category,
    }
})
export const fetchCountrybyJob = (id) => API.get(`/jobs/country`, {
    data: {
        id: id,
    }
})
export const fetchCitybyJob = (id) => API.get(`/jobs/city`, {
    data: {
        id: id,
    }
})
export const fetchCompanybyJob = (id) => API.get(`/jobs/company`, {
    data: {
        id: id,
    }
})
export const createJob = (job) => API.post(`/jobs/create`,
    {
        category: job.category,
        country: job.country,
        city: job.city,
        title: job.title,
        company: job.company,
        designation: job.designation,
        salary: job.salary,
        description: job.description,
        link: job.link,
        type: job.type,
        workdays: job.workdays,
        worktime: job.worktime,
        address: job.address,
        experience: job.experience,
        qualification: job.qualification,
        skills: job.skills,
        date: job.date,
        tags: job.tags,

    })
export const updateJob = (id, category, country, city, title, company, designation, salary, description, link, type, workdays, worktime, address, experience, qualification, skills, date, tags) => API.put(`/jobs/update`, {
    id: id,
    category: category,
    country: country,
    city: city,
    title: title,
    company: company,
    designation: designation,
    salary: salary,
    description: description,
    link: link,
    type: type,
    workdays: workdays,
    worktime: worktime,
    address: address,
    experience: experience,
    qualification: qualification,
    skills: skills,
    date: date,
    tags: tags,
})
export const deleteJob = (id) => API.delete(`/jobs/delete`, {
    data: {
        id: id
    }
})
// Companies
export const fetchAllCompanies = () => API.get(`/companies/all`)
export const fetchCompany = (id) => API.post(`/companies/get`,
    {
        id: id,
    })


export const createCompany = (company) => API.post(`/companies/create`, {
    name: company.name,
    size: company.size,
    city: company.city,
    country: company.country,
    phone: company.phone,
    email: company.email,
    password: company.password,
    headquater: company.headquater,
    type: company.type,
})
export const updateCompany = (id, name, size, city, country, phone, email, headquater, type) => API.put(`/companies/update`,
    {
        id: id,
        name: name,
        size: size,
        city: city,
        country: country,
        phone: phone,
        email: email,
        headquater: headquater,
        type: type,
    })
export const deleteCompany = (id) => API.delete(`/companies/delete`, {
    data: {
        id: id
    }
})

// Plans
export const fetchAllPlans = () => API.get(`/plans/all`)
export const fetchPlan = (id) => API.post(`/plans/get`,
    {
        id: id,
    })
export const fetchTypebyPlan = (type) => API.get(`/plans/type`, {
    data: {
        type: type,
    }
})
export const createPlan = (plan) => API.post(`/plans/create`, {
    name: plan.name,
    amount: plan.amount,
    type: plan.type,
    accounttype: plan.accounttype,
    timeperiod: plan.timeperiod,
    purpose: plan.purpose,
})
export const updatePlan = (id, name, amount, type, accounttype, timeperiod, purpose) => API.put(`/plans/update`, {
    id: id,
    name: name,
    amount: amount,
    type: type,
    accounttype: accounttype,
    timeperiod: timeperiod,
    purpose: purpose,
})
export const deletePlan = (id) => API.delete(`/plans/delete`, {
    data: {
        id: id
    }
})
// Reports
export const fetchAllReports = () => API.get(`/reports/all`)
// Seekers
export const fetchAllSeekers = () => API.get(`/seekers/all`)
//Tags
export const fetchAllTags = () => API.get(`/tags/all`)
export const fetchTag = (id) => API.post(`/tags/get`, {
    id: id,
})
export const createTag = (tag) => API.post(`/tags/create`, {
    name: tag.name,
})
export const updateTag = (id, name) => API.put(`/tags/update`, {
    id: id,
    name: name,
})
export const deleteTag = (id) => API.delete(`/tags/delete`, {
    data: {
        id: id
    }
})
// Transactions
export const fetchAllTransactions = () => API.get(`/transactions/all`)
// Users
export const fetchAllUsers = () => API.get(`/users/all`)
export const fetchUser = (id) => API.post(`/users/get`,
    {
        id: id,
    })
export const createUser = (user) => API.post(`/users/create`, {
    name: user.name,
    username: user.username,
    email: user.email,
    password: user.password,
    phone: user.phone,
    address: user.address,
})
export const updateUser = (id, name, username, email, password, phone, address) => API.put(`/users/update`,
    {
        id: id,
        name: name,
        username: username,
        email: email,
        password: password,
        phone: phone,
        address: address,
    })
export const deleteUser = (id) => API.delete(`/users/delete`, {
    data: {
        id: id
    }
})
// AppliedUsers
export const fetchAllAppliedUsers = () => API.get(`/applied/all`)
export const fetchAppliedUser = (id) => API.get(`/applied/get`, {
    data: {
        id: id,
    }
})
export const fetchJobbyAppliedUser = (job) => API.get(`/applied/job`, {
    data: {
        job: job,
    }
})
export const createAppliedUser = (appliedUser) => API.post(`/applied/create`, {
    user: appliedUser.user,
    date: appliedUser.date,
    proposal: appliedUser.proposal,
})
export const updateAppliedUser = (user, date, proposal) => API.get(`/applied/update`, {
    data: {
        user: user,
        date: date,
        proposal: proposal,
    }
})
export const deleteAppliedUser = (id) => API.delete(`/applied/delete`, {
    data: {
        id: id
    }
})




// export const fetchAllSeekers = () => API.get(`/seekers/all`)
