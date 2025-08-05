import { useEffect, useState } from 'react';
import apiService from '../../../services/ApiService'; // ajuste o caminho conforme seu projeto

interface Usuario {
  id: number;
  name: string;
  username: string;
  // outros campos que sua API retorna
}

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUsuarios() {
      try {
        setLoading(true);
        const response = await apiService.get('/api/usuarios'); // ajuste a rota conforme backend
        setUsuarios(response.data.usuarios);
        setError(null);
      } catch (err) {
        setError('Erro ao carregar usuários.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchUsuarios();
  }, []);

  if (loading) return <p>Carregando usuários...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div>
      <h2>Lista de Usuários</h2>
      <ul className="list-group">
        {usuarios.map((user) => (
          <li key={user.id} className="list-group-item">
            {user.name} ({user.username})
          </li>
        ))}
      </ul>
    </div>
  );
}