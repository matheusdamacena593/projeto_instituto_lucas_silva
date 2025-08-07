import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import PageBase from "./Pages/PageBase";
import ProtectedRoute from "./_components/ProtectedRoute/ProtectedRoute";
import AdminDashboard from "./Pages/Admin/Dashboard";
import PageBaseAdmin from "./Pages/Admin/PageBase";
import Usuarios from "./Pages/Admin/Usuarios";
import Home from "./Pages/Home/Home.tsx";
import Admin from "./Pages/Admin/Admin.tsx";
import SobreInstituto from "./Pages/SobreInstituto/SobreInstituto.tsx"
import FaleConosco  from "./Pages/FaleConosco/FaleConosco.tsx";
import QueroApoiar from "./Pages/QueroApoiar/QueroApoiar.tsx";
import Projetos from "./Pages/Projetos/Projetos.tsx"

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageBase />}>
          <Route index element={<Home />} />
          <Route path="/teste" element={<div className="mt-5 p-5">Aqui é só um teste</div>} />
          <Route path="/sobre-o-instituto" element={<SobreInstituto />} />
          <Route path="/fale-conosco" element={<FaleConosco />} />
          <Route path="/quero-apoiar" element={<QueroApoiar />}/>
          <Route path="/projetos" element={<Projetos />}/>
        </Route>

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <PageBaseAdmin />
            </ProtectedRoute>
          }
          >
            <Route index element={<AdminDashboard />} />
            <Route path="/admin/usuarios" element={<Usuarios />}/>
          </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/admin/login" element={<Admin />} />
      </Routes>
    </Router>
  );
}