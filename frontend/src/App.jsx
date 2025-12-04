import { Routes, Route } from "react-router-dom";
import "./App.css";
import AppDashboard from "./components/Layers/AppDashboard";
import AppAnalytics from "./components/Layers/AppAnalytics";
import AppGoals from "./components/Layers/AppGoals";
import AppCalories from "./components/Layers/AppCalories";
import { AppSidebar } from "./components/app-sidebar";
import { Root } from "vaul";
import RootLayout from "./components/RootLayout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<AppDashboard />} />
          <Route path="/analytics" element={<AppAnalytics />} />
          <Route path="/goals" element={<AppGoals />} />
          <Route path="/calories" element={<AppCalories />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
