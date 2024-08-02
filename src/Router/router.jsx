import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import DonationDetails from "../Pages/DonationDetails/DonationDetails";
import Statistics from "../Pages/Statistics/Statistics";
import Donation from "../Pages/AllDonation/Donation";
import DonationSub from "../Pages/Donation/Donation";
import DashboardLayout from "../Layout/DashboardLayout";
import Statistic from "../Dashboard/Components/Statistic/Statistic";
import Dashboard from "../Dashboard/Pages/Dashboard/Dashboard";
import AllDonation from "../Dashboard/Components/AllDonation/AllDonation";
import AddDonation from "../Dashboard/Components/AddDonation/AddDonation";
import Profile from "../Dashboard/Components/Profile/Profile";

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/donation_details/:id" element={<DonationDetails />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/donation" element={<DonationSub />} />
      </Route>
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/statistic" element={<Statistic />} />
        <Route path="/dashboard/allDonation" element={<AllDonation />} />
        <Route path="/dashboard/addDonation" element={<AddDonation />} />
        <Route path="/dashboard/profile" element={<Profile />} />
      </Route>
    </Route>
  )
);
