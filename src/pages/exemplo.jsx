import Cabecalho from "../components/Cabecalho";
import Layout from "../components/Layout";

export default function Exemplo() {
    return (

        <Layout titulo="Usando Componentes">
            <Cabecalho titulo="Next.js e React" />
            <Cabecalho titulo="Next.js e React2" />
        </Layout>
    )
}