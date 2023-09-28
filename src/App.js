import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cities from "./dashboard/Cities";
import Dashboard from "./dashboard/Page";
import Categories from "./dashboard/Categories";
import Companies from "./dashboard/Companies";
import Jobs from "./dashboard/Jobs";
import Plans from "./dashboard/Plans";
import Reports from "./dashboard/Reports";
import Seekers from "./dashboard/Seekers";
import Tags from "./dashboard/Tags";
import Transactions from "./dashboard/Transactions";
import Users from "./dashboard/Users";
import PaymentGateway from "./dashboard/PaymentGateway";
import Countries from "./dashboard/Countries";
import AppliedUsers from "./dashboard/AppliedUsers";
import UserForm from "./dashboard/form/UserForm";
import CategoryForm from "./dashboard/form/CategoryForm";
import CitiesForm from "./dashboard/form/CitiesForm";
import CompaniesForm from "./dashboard/form/CompaniesForm";
import JobsForm from "./dashboard/form/JobsForm";
import AppliedUsersFrom from "./dashboard/form/AppliedUsersFrom";
import CountriesForm from "./dashboard/form/CountriesForm";
import PlansForm from "./dashboard/form/PlansForm";
import ReportsForm from "./dashboard/form/ReportsForm";
import TagsForm from "./dashboard/form/TagsForm";
import TransactionsForm from "./dashboard/form/TransactionsForm";
import CitiesEdit from "./dashboard/edit/CitiesEdit";
import CategoryEdit from "./dashboard/edit/CategoryEdit";
import CompanyEdit from "./dashboard/edit/CompanyEdit";
import CountryEdit from "./dashboard/edit/CountryEdit";
import TagsEdit from "./dashboard/edit/TagsEdit";
import JobsEdit from "./dashboard/edit/JobsEdit";
import PlansEdit from "./dashboard/edit/PlansEdit";
import UsersEdit from "./dashboard/edit/UsersEdit";
import Login from "./dashboard/login/Login";
import Register from "./dashboard/register/Register";
import Cv from "./components/Cv";
import Test from "./dashboard/Test";
import Ads from "./dashboard/Ads";
import CoverLetter from "./components/CoverLetter";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<Dashboard/>} />
          <Route path="/admin/cities" element={<Cities/>} />
          <Route path="/admin/categories" element={<Categories />} />
          <Route path="/admin/companies" element={<Companies/>} />
          <Route path="/admin/countries" element={<Countries/>} />
          <Route path="/admin/jobs" element={<Jobs/>} />
          <Route path="/admin/plans" element={<Plans/>} />
          <Route path="/admin/reports" element={<Reports/>} />
          <Route path="/admin/seekers" element={<Seekers/>} />
          <Route path="/admin/tags" element={<Tags/>} />
          <Route path="/admin/appliedusers" element={<AppliedUsers/>} />
          <Route path="/admin/transactions" element={<Transactions/>} />
          <Route path="/admin/users" element={<Users/>} />
          <Route path="/admin/payment" element={<PaymentGateway/>} />
          <Route path="/admin/ads" element={<Ads/>} />



          <Route path="/admin/users/add" element={<UserForm/>} />
          <Route path="/admin/categories/add" element={<CategoryForm/>} />
          <Route path="/admin/cities/add" element={<CitiesForm/>} />
          <Route path="/admin/companies/add" element={<CompaniesForm/>} />
          <Route path="/admin/jobs/add" element={<JobsForm/>} />
          <Route path="/admin/appliedusers/add" element={<AppliedUsersFrom/>} />
          <Route path="/admin/countries/add" element={<CountriesForm/>} />
          <Route path="/admin/plans/add" element={<PlansForm/>} />
          <Route path="/admin/reports/add" element={<ReportsForm/>} />
          <Route path="/admin/tags/add" element={<TagsForm/>} />
          <Route path="/admin/transactions/add" element={<TransactionsForm/>} />
          
          <Route path="/admin/users/edit" element={<UsersEdit />} />
          <Route path="/admin/categories/edit" element={<CategoryEdit />} />
          <Route path="/admin/countries/edit" element={<CountryEdit />} />
          <Route path="/admin/cities/edit" element={<CitiesEdit />} />
          <Route path="/admin/companies/edit" element={<CompanyEdit />} />
          <Route path="/admin/tags/edit" element={<TagsEdit />} />
          <Route path="/admin/jobs/edit" element={<JobsEdit />} />
          <Route path="/admin/plans/edit" element={<PlansEdit />} />

          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/register" element={<Register />} />
          <Route path="/admin/cv" element={<Cv />} />
          <Route path="/admin/coverLetter" element={<CoverLetter />}/>
          <Route path="/admin/test" element={<Test />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
