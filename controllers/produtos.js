const listarProdutos = (req, res) => {
    res.status(200).send({mensagem : 'ok'})
}


//exportar diversas variaveis
export {listarProdutos}