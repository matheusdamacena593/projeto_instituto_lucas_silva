import { useEffect, useState } from "react";
import CardProjetos from "../../_components/CardProjetos/CardProjetos.tsx";
import styles from "./ProjetosStyle.module.scss";
import apiService from "../../services/ApiService"; // ajuste o caminho se precisar

// Interface para tipar o projeto conforme os dados que o backend retorna
interface Projeto {
  id: number;
  titulo: string;
  publicoAlvo: string;
  dataInscricao: Date;
  dataInicio: Date;
  vagas: number;
  imagem: string; // pode ser URL da imagem
}

export default function Projetos() {
  const [projetos, setProjetos] = useState<Projeto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProjetos() {
      try {
        setLoading(true);
        const response = await apiService.get("/api/listar-projetos");
        // assumindo que os dados vêm em response.data.projetos (ajuste conforme seu backend)
        setProjetos(response.data.projetos);
        setError(null);
      } catch (err: any) {
        setError("Erro ao carregar projetos.");
      } finally {
        setLoading(false);
      }
    }

    fetchProjetos();
  }, []);

  if (loading) {
    return <p>Carregando projetos...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className={styles.cardContainer}>
      {projetos.map((projeto) => (
        <CardProjetos
          key={projeto.id}
          titulo={projeto.titulo}
          publicoAlvo={projeto.publicoAlvo}
          inscricao={projeto.dataInscricao}
          inicio={projeto.dataInicio}
          vagas={projeto.vagas}
          imagem={projeto.imagem}
          className={styles.tamanhoCard}
        />
      ))}
    </div>
  );
}
