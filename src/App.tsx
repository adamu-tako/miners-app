import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/auth/login";
import Hompage from "./pages/home/home";
import DashboardWrapper from "./component/dashboard/dashboardWrapper";
import Company from "./pages/company/company";
import Miner from "./pages/miner/miner";
import Toast from "./component/notification/toast";
import AuthChecker from "./utils/authChecker";

function App() {
  return (
    <>
      <div className="bg-white md:bg-[#F4F6F9] h-[100dvh] ">
        <AuthChecker>
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

          <Toast timeout={4000} />
        </AuthChecker>
      </div>
    </>
  );
}

export default App;
