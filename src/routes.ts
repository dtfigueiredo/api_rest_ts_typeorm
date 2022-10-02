import { Router } from 'express'

import { RoomController } from './controllers/RoomController'
import { SubjectController } from './controllers/SubjectController'
import { VideoController } from './controllers/VideoController'

const routes = Router()

// instanciando controladores de criação
routes.post('/subject', new SubjectController().create) // rota de criação de disciplinas
routes.post('/video', new VideoController().create) // rota de criação de videos
routes.post('/room', new RoomController().create) // rota de criação de salas

// instanciando controladores de requisição
routes.get('/subject', new SubjectController().getSubjects)
routes.get('/subject/:name', new SubjectController().getSubjectByName)
routes.get('/room', new RoomController().getRooms)
routes.get('/video', new VideoController().getVideos)

export default routes
