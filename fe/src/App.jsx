import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLayout from "../components/layout/PageLayout";

const RegistrationPage = lazy(() => import("../pages/RegistrationPage"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<RegistrationPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
