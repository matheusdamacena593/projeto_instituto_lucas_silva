import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import PageBase from "./Pages/PageBase";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import ProtectedRoute from "./_components/ProtectedRoute/ProtectedRoute";
import AdminDashboard from "./Pages/Admin/Dashboard";
import PageBaseAdmin from "./Pages/Admin/PageBase";
import Usuarios from "./Pages/Admin/Usuarios";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageBase />}>
          <Route index element={<Home />} />
          <Route path="/teste" element={<div className="mt-5 p-5">Aqui é só um teste</div>} />
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
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}