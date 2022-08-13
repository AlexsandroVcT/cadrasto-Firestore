// primeiro parametro req = requisição
export default function handler(req, res) {
    const codigo = req.query.codigo
    res.status(200).json({
        id: codigo,
        nome: `${'Alex ' + codigo}`,
        email: `alexalexalex${codigo}@x1hotmail.com`
    })
}