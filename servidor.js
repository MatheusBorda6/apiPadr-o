//importar o express, necessario instalar o express no terminal
import express from 'express'
const app = express()
import router from './routes/produtos.js'

//configurar o uso de json na api
app.use(express.json())

//informar o arquivo de rotas a serem utilizadas
app.use(router)

//indicar que o servidor vai rodar na porta 3001
app.listen(3001, () => console.log('server online!'))