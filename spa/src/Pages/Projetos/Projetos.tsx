import CardProjetos from "../../_components/CardProjetos/CardProjetos.tsx"
import Aperto from "../../Image/aperto_mao.jpg";
import styles from "./ProjetosStyle.module.scss"

export default function Projetos() {
    return (
        <div className={styles.cardContainer}>
            <CardProjetos
                titulo="Futebolzinho com os criaszinhos"
                publicoAlvo="Futzin dos cria"
                inscricao="10/10/10"
                inicio="11/11/11"
                vagas={100}
                imagem={Aperto}
                className={styles.tamanhoCard}
            />
        </div>
    )
}