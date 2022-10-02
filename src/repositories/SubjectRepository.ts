import { AppDataSource } from '../data-source'
import { Subject } from '../entities/Subject'

// cria o repositório a partir da entidade escolhida
export const subjectRepository = AppDataSource.getRepository(Subject)
