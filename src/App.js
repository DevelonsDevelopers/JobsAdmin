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
import ProviderPanel from "./dashboard/ProviderPanel";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/cities" element={<Cities/>} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/companies" element={<Companies/>} />
          <Route path="/countries" element={<Countries/>} />
          <Route path="/jobs" element={<Jobs/>} />
          <Route path="/plans" element={<Plans/>} />
          <Route path="/reports" element={<Reports/>} />
          <Route path="/seekers" element={<Seekers/>} />
          <Route path="/tags" element={<Tags/>} />
          <Route path="/appliedusers" element={<AppliedUsers/>} />
          <Route path="/transactions" element={<Transactions/>} />
          <Route path="/users" element={<Users/>} />
          <Route path="/payment" element={<PaymentGateway/>} />
          <Route path="/ads" element={<Ads/>} />



          <Route path="/users/add" element={<UserForm/>} />
          <Route path="/categories/add" element={<CategoryForm/>} />
          <Route path="/cities/add" element={<CitiesForm/>} />
          <Route path="/companies/add" element={<CompaniesForm/>} />
          <Route path="/jobs/add" element={<JobsForm/>} />
          <Route path="/appliedusers/add" element={<AppliedUsersFrom/>} />
          <Route path="/countries/add" element={<CountriesForm/>} />
          <Route path="/plans/add" element={<PlansForm/>} />
          <Route path="/reports/add" element={<ReportsForm/>} />
          <Route path="/tags/add" element={<TagsForm/>} />
          <Route path="/transactions/add" element={<TransactionsForm/>} />
          
          <Route path="/users/edit" element={<UsersEdit />} />
          <Route path="/categories/edit" element={<CategoryEdit />} />
          <Route path="/countries/edit" element={<CountryEdit />} />
          <Route path="/cities/edit" element={<CitiesEdit />} />
          <Route path="/companies/edit" element={<CompanyEdit />} />
          <Route path="/tags/edit" element={<TagsEdit />} />
          <Route path="/jobs/edit" element={<JobsEdit />} />
          <Route path="/plans/edit" element={<PlansEdit />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cv" element={<Cv />} />
          <Route path="/coverLetter" element={<CoverLetter />}/>
          <Route path="/test" element={<Test />} />
          <Route path="/providerPanel" element={<ProviderPanel />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
