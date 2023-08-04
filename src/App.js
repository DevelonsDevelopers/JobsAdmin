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
import Notifications from "./dashboard/Notifications";
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
import SeekersForm from "./dashboard/form/SeekersForm";
import TagsForm from "./dashboard/form/TagsForm";
import TransactionsForm from "./dashboard/form/TransactionsForm";

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
          <Route path="/notifications" element={<Notifications/>} />



          <Route path="/users/add" element={<UserForm/>} />
          <Route path="/categories/add" element={<CategoryForm/>} />
          <Route path="/cities/add" element={<CitiesForm/>} />
          <Route path="/companies/add" element={<CompaniesForm/>} />
          <Route path="/jobs/add" element={<JobsForm/>} />
          <Route path="/appliedusers/add" element={<AppliedUsersFrom/>} />
          <Route path="/countries/add" element={<CountriesForm/>} />
          <Route path="/plans/add" element={<PlansForm/>} />
          <Route path="/reports/add" element={<ReportsForm/>} />
          <Route path="/seekers/add" element={<SeekersForm/>} />
          <Route path="/tags/add" element={<TagsForm/>} />
          <Route path="/transactions/add" element={<TransactionsForm/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
