import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEdit, faTrash, faUser } from "@fortawesome/free-solid-svg-icons";
import apiService from "../../../services/ApiService";

import {
  Button,
  Card,
  Badge,
  Spinner,
  Row,
  Col,
  Alert,
} from "react-bootstrap";

interface Usuario {
  id: number;
  name: string;
  username: string;
  email: string;
  status: "active" | "inactive";
}

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUsuarios() {
      try {
        setLoading(true);
        const response = await apiService.get("/api/usuarios");
        setUsuarios(response.data.usuarios);
        setError(null);
      } catch (err) {
        setError("Erro ao carregar usuários.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchUsuarios();
  }, []);

  const handleCreate = () => {
    // Navegação para tela de criação
  };

  const handleEdit = (user: Usuario) => {
    // Navegação para tela de edição
    console.log(user);
  };

  const handleDelete = (user: Usuario) => {
    if (window.confirm(`Deseja excluir o usuário ${user.name}?`)) {
      setUsuarios(usuarios.filter((u) => u.id !== user.id));
    }
  };

  const getStatusBadge = (status: string) => (
    <Badge bg={status === "active" ? "success" : "secondary"}>
      {status === "active" ? "Ativo" : "Inativo"}
    </Badge>
  );

  return (
    <div className="container py-4">
      {/* Header responsivo */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4 gap-3">
        <h2 className="mb-0">Lista de Usuários</h2>
        <Button variant="primary" onClick={handleCreate}>
          <FontAwesomeIcon icon={faPlus} className="me-2" />
          Novo Usuário
        </Button>
      </div>

      {/* Loading */}
      {loading && (
        <div className="text-center py-5">
          <Spinner animation="border" variant="primary" />
        </div>
      )}

      {/* Erro */}
      {error && <Alert variant="danger">{error}</Alert>}

      {/* Lista de usuários */}
      {!loading && usuarios.length > 0 && (
        <Row xs={1} md={2} lg={3} className="g-4">
          {usuarios.map((usuario) => (
            <Col key={usuario.id}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  {/* Conteúdo principal com empilhamento em telas pequenas */}
                  <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start gap-3">
                    <div className="d-flex align-items-start gap-3 flex-grow-1">
                      <div className="bg-primary bg-opacity-25 p-3 rounded-circle d-flex align-items-center justify-content-center">
                        <FontAwesomeIcon icon={faUser} className="text-primary" />
                      </div>
                      <div>
                        <h5 className="mb-1">{usuario.name}</h5>
                        <p className="mb-1 text-muted small">{usuario.email}</p>
                        {getStatusBadge(usuario.status)}
                      </div>
                    </div>

                    <div className="d-flex gap-2 flex-wrap">
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() => handleEdit(usuario)}
                      >
                        <FontAwesomeIcon icon={faEdit} className="me-1" />
                        Editar
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleDelete(usuario)}
                      >
                        <FontAwesomeIcon icon={faTrash} className="me-1" />
                        Excluir
                      </Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}

      {/* Nenhum usuário */}
      {!loading && usuarios.length === 0 && (
        <Card className="text-center mt-5 p-5">
          <Card.Body>
            <FontAwesomeIcon icon={faUser} size="3x" className="mb-3 text-muted" />
            <h5>Nenhum usuário encontrado</h5>
            <p className="text-muted">Comece criando seu primeiro usuário no sistema.</p>
            <Button onClick={handleCreate}>
              <FontAwesomeIcon icon={faPlus} className="me-2" />
              Criar Primeiro Usuário
            </Button>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}
