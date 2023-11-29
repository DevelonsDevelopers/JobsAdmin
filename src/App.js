import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
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
import ProviderPanel from "./ProviderDashboard/ProviderPanel";
import Offers from "./ProviderDashboard/Offers";
import Recommended from "./ProviderDashboard/Recommended";
import Interactions from "./ProviderDashboard/Interactions";
import AppliedUserProvider from "./ProviderDashboard/AppliedUser";
import ProviderInteraction from "./ProviderDashboard/Interactions";
import JobsProvider from "./ProviderDashboard/JobsProvider";
import ProviderLogin from "./ProviderDashboard/login/ProviderLogin";
import CareerJetApi from "./dashboard/CareerJetApi";
import ApiJobs from "./dashboard/ApiJobs";
import Email from "./dashboard/Email";
import EmailForm from "./dashboard/form/EmailForm";
import JobBankEdit from "./dashboard/edit/JobBankEdit";
import { GoogleOAuthProvider } from "@react-oauth/google";
import NoPage from "./dashboard/NoPage";

function App() {
  return (
    <GoogleOAuthProvider clientId="404623696003-doe1cpjrlljj8om770ha3ri9s9vatoc8.apps.googleusercontent.com">
      <BrowserRouter basename={"/"}>
        <Routes>
          <Route
            path="*"
            element={<Navigate to="/userPanel" replace={true} />}
          />
          <Route path="/userPanel" element={<Dashboard />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/categories" element={<Categories />} />
          {/* <Route path="/jobbank" element={<Email />} /> */}
          <Route path="/companies" element={<Companies />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/seekers" element={<Seekers />} />
          <Route path="/tags" element={<Tags />} />
          <Route path="/appliedusers" element={<AppliedUsers />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/users" element={<Users />} />
          <Route path="/payment" element={<PaymentGateway />} />
          <Route path="/ads" element={<Ads />} />
          {/* <Route path="/jobsAPI" element={<JobsAPI/>} /> */}
          {/* <Route path="/jobsAPI" element={<ApiJobs/>} /> */}
          {/* <Route path="/careerJetApi" element={<CareerJetApi/>} /> */}

          <Route path="/users/add" element={<UserForm />} />
          <Route path="/categories/add" element={<CategoryForm />} />
          {/* <Route path="/jobBanks/add" element={<EmailForm/>} /> */}
          <Route path="/cities/add" element={<CitiesForm />} />
          <Route path="/companies/add" element={<CompaniesForm />} />
          <Route path="/jobs/add" element={<JobsForm />} />
          <Route path="/appliedusers/add" element={<AppliedUsersFrom />} />
          <Route path="/countries/add" element={<CountriesForm />} />
          <Route path="/plans/add" element={<PlansForm />} />
          <Route path="/reports/add" element={<ReportsForm />} />
          <Route path="/tags/add" element={<TagsForm />} />
          <Route path="/transactions/add" element={<TransactionsForm />} />

          <Route path="/users/edit" element={<UsersEdit />} />
          <Route path="/categories/edit" element={<CategoryEdit />} />
          <Route path="/jobBanks/edit" element={<JobBankEdit />} />
          <Route path="/countries/edit" element={<CountryEdit />} />
          <Route path="/cities/edit" element={<CitiesEdit />} />
          <Route path="/companies/edit" element={<CompanyEdit />} />
          <Route path="/tags/edit" element={<TagsEdit />} />
          <Route path="/jobs/edit" element={<JobsEdit />} />
          <Route path="/plans/edit" element={<PlansEdit />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cv" element={<Cv />} />
          <Route path="/coverLetter" element={<CoverLetter />} />
          <Route path="/test" element={<Test />} />

          <Route path="/providerLogin" element={<ProviderLogin />} />
          <Route path="/providerPanel" element={<ProviderPanel />} />
          <Route path="/appliedProvider" element={<AppliedUserProvider />} />
          <Route path="/jobProvider" element={<JobsProvider />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/jobProvider/recommended" element={<Recommended />} />
          <Route path="/interaction" element={<ProviderInteraction />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
