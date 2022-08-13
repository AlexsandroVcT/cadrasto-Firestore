/** Criando uma API Propia e em cima dela vou querer consumir essas informaçôes
 * dentro da minha aplicação
 */
// Integração simples com Front-End com Back-End

import { useState } from "react"
import Layout from "../components/Layout"

export default function Integracao() {

    const [codigo, setCodigo] = useState(1)
    const [cliente, setCliente] = useState({})

    /** 
        Para obter informaçôes do BeckEnd, a Gente vai precisar trabalhar com sincronismo
        Eu poderia por exemplo instalar uma biblioteca que é um cliente HTTP que é o Accel
        mas eu vou usar o própio fetch para obter essas informaçôes
     */
    async function obterCliente() {
        const resp = await fetch(`https://integracao-firestore.vercel.app/api/clientes/${codigo}`)
        const dados = await resp.json()
        setCliente(dados)

        // fetch(`http://localhost:3001/api/clientes/${codigo}`)
        //     .then(resp => resp.json())
        //     .then(dados => setCliente(dados))
    }


    return (
        <Layout>
            <div>
                <input type="number" value={codigo}
                    onChange={e => setCodigo(e.target.value)} />
                <button onClick={obterCliente}>Obter Cliente</button>

            </div>
            <ul>
                <li>Código {cliente.id}</li>
                <li>Nome {cliente.nome}</li>
                <li>Email {cliente.email}</li>
            </ul>


        </Layout>
    )
}
