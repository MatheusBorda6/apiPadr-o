import express from 'express'
const router = express.Router()
//importar o controller
import { listarProdutos } from '../controllers/produtos.js'

//modelos báscicos de rotas
router.get('/produtos', listarProdutos)

//exportar definições de rotas
export default router