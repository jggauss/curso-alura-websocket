import express from 'express'
const app = express()
import url from 'url'
import path from 'path'
import http from 'http'
import { Server } from 'socket.io'


const porta = process.env.porta || 3000

const caminhoAutal = url.fileURLToPath(import.meta.url)
const diretorioPublico = path.join(caminhoAutal, '../../','public')
app.use(express.static(diretorioPublico))

const servidorHttp = http.createServer(app)


servidorHttp.listen(porta, () => console.log(`Servidor escutando na porta ${porta}`))

const io = new Server(servidorHttp)

export default io