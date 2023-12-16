import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/auth/login";
import Hompage from "./pages/home/home";
import DashboardWrapper from "./component/dashboard/dashboardWrapper";
import Company from "./pages/company/company";
import Miner from "./pages/miner/miner";

function App() {
  return (
    <>
      <div className="bg-white md:bg-[#F4F6F9] h-[100vh] ">
        <Routes>
          <Route path="/auth" element={<LoginPage />} />
          <Route path="/" element={<DashboardWrapper />}>
            <Route index element={<Hompage />} />
            <Route path="miners" element={<Miner />} />
            <Route path="companies" element={<Company />} />
            <Route path="lga" element={<Hompage />} />
            <Route path="charts" element={<Hompage />} />
            <Route path="settings" element={<Hompage />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
