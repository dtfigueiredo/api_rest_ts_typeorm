import express from 'express'

import { AppDataSource } from './data-source'
import routes from './routes'

//promise de conexão com o DB
AppDataSource.initialize().then(() => {
	//express só é inicializado após comunicação com o DB estiver pronta
	const APP = express()

	APP.use(express.json()) //configurando o middleware de json

	APP.use(routes) //configurando o routes

	return APP.listen(process.env.PORT, () => console.log(`Running on port ${process.env.PORT}`))
})
