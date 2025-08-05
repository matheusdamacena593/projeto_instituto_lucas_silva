
import { useNavigate, NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function AdminSidebar() {
    const navigate = useNavigate();
    const { logout } = useAuth();

    // Pega o usuário do localStorage (ou adapte para seu context)
    const userRaw = localStorage.getItem("user");
    const user = userRaw ? JSON.parse(userRaw) : { nome: "Admin" };

    async function handleLogout() {
        await logout();    // chama a função do contexto que já remove token e limpa user
        navigate("/login");
    }

    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{ width: "280px", height: "100vh" }}>
            <a href="/admin" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none">
                <span className="fs-4 text-dark">Olá, {user.nome}</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <NavLink
                        to="/admin"
                        className={() =>
                            "nav-link"
                        }
                        end
                    >
                        Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/admin/usuarios"
                        className={() =>
                            "nav-link"
                        }
                    >
                        Usuários
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/admin/relatorios"
                        className={() =>
                            "nav-link"
                        }
                    >
                        Relatórios
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/admin/configuracoes"
                        className={() =>
                            "nav-link"
                        }
                    >
                        Configurações
                    </NavLink>
                </li>
            </ul>
            <hr />
            <div>
                <button
                    className="btn btn-outline-danger w-100"
                    onClick={handleLogout}
                >
                    Sair
                </button>
            </div>
        </div>
    );
}
