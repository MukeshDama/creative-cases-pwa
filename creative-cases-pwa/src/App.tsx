import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CasesPage from "./pages/CasesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/cases" replace />} />
        <Route path="/cases" element={<CasesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
