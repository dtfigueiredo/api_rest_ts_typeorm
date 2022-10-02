import { Request, Response } from 'express'
import { subjectRepository } from '../repositories/SubjectRepository'

export class SubjectController {
	// criar disciplina
	async create(request: Request, response: Response) {
		const { name } = request.body

		if (!name) {
			return response.status(400).json({ message: 'Campo nome é obrigatório' })
		}

		try {
			// utilizando a classe de repository
			const newSubject = subjectRepository.create({ name })
			// salvando as informações criadas na requisição na tabela
			await subjectRepository.save(newSubject)
			// retorno com o status code created + objeto cadastrado
			return response.status(201).json(newSubject)
			//
		} catch (error) {
			//
			console.log(error)
			return response.status(500).json({ message: 'Internal Server Error' })
		}
	}

	// buscar todas as disciplinas
	async getSubjects(request: Request, response: Response) {
		try {
			//
			const subjectList = await subjectRepository.find()
			//
			return response.status(200).json(subjectList)
			//
		} catch (error) {
			//
			console.log(error)
			return response.status(500).json({ message: 'Internal Server Error' })
		}
	}

	// buscar disciplinas por nome
	async getSubjectByName(request: Request, response: Response) {
		const { name } = request.body

		if (!name) {
			return response.status(400).json({ message: 'Campo nome é obrigatório' })
		}

		try {
			//
			const subject = await subjectRepository.findBy({ name: name })
			console.log(subject)
			//
			return response.status(200).json(subject)
			//
		} catch (error) {
			console.log(error)
			return response.status(500).json({ message: 'Internal Server Error' })
		}
	}
}
