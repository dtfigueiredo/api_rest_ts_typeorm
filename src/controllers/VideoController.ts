import { Request, Response } from 'express'
import { videoRepository } from '../repositories/VideoRepository'

export class VideoController {
	async create(request: Request, response: Response) {
		const { name, url } = request.body
		const { idAula } = request.params

		if (!name || !url) {
			return response.status(400).json({ message: 'Campos nome e url são obrigatórios' })
		}

		try {
			//
			const newVideo = videoRepository.create({ name, url })
			//
			await videoRepository.save(newVideo)
			//
			return response.status(201).json(newVideo)
			//
		} catch (error) {
			//
			console.log(error)
			return response.status(500).json({ message: 'Internal Server Error' })
		}
	}

	async getVideos(request: Request, response: Response) {
		try {
			const videosList = await videoRepository.find()
			return response.status(200).json(videosList)
		} catch (error) {
			//
			console.log(error)
			return response.status(500).json({ message: 'Internal Server Error' })
		}
	}
}
