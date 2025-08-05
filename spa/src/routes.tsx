import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import PageBase from "./Pages/PageBase";
import Home from "./Pages/Home/Home.tsx";
import Admin from "./Pages/Admin/Admin.tsx";
import SobreInstituto from "./Pages/SobreInstituto/SobreInstituto.tsx"

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageBase />}>
          <Route index element={<Home />} />
          <Route path="/teste" element={<div className="mt-5 p-5">Aqui é só um teste</div>} />
          <Route path="/sobre-o-instituto" element={<SobreInstituto />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}