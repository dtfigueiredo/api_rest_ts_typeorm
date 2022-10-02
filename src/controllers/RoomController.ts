import { Request, Response } from 'express'
import { roomRepository } from '../repositories/RoomRepository'

export class RoomController {
	async create(request: Request, response: Response) {
		const { name, description } = request.body

		if (!name || !description) {
			return response.status(400).json({ message: 'Campos nome e descrição são obrigatórios' })
		}

		try {
			//
			const newRoom = roomRepository.create({ name, description })
			//
			await roomRepository.save(newRoom)
			//
			return response.status(201).json(newRoom)
			//
		} catch (error) {
			//
			console.log(error)
			return response.status(500).json({ message: 'Internal Server Error' })
		}
	}

	async getRooms(request: Request, response: Response) {
		try {
			//
			const roomList = await roomRepository.find()
			//
			return response.status(200).json(roomList)
			//
		} catch (error) {
			//
			console.log(error)
			return response.status(500).json({ message: 'Internal Server Error' })
		}
	}
}
