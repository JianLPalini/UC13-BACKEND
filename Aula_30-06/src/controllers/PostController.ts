import { NextFunction, Request, Response } from "express";
import { PostService } from "../services/PostService";
import { Post } from "../models/Post";

export class PostController {


    async list(req: Request, res: Response, next: NextFunction) {
        try {
            const posts = await PostService.listAll()

            return res.json(posts)
        } catch (error) {

            next(error)
        }
    }

    async getById(req: Request, res: Response, next: NextFunction) {
        try {

            const id = Number(req.params.id)
            const post = await PostService.getById(id)
            return res.json(post)
        } catch (error) {
            next(error)
        }
    }

    async create(req: Request, res: Response, next: NextFunction) {
        try {

            const { title, userId} = req.body

            const post = await PostService.create({ title, userId})
            return res.status(201).json(post)

        } catch (error) {
            next(error)
        }
    }

    async update(req: Request, res: Response, next: NextFunction) {
        try {
            const id = Number(req.params.id)
            const { title } = req.body

            const post = await PostService.update(id, { title})
            return res.json(post)

        } catch (error) {
            next(error)
        }
    }

    async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const id = Number(req.params.id)
            await PostService.delete(id)
            return res.status(204).send()

        } catch (error) {
            next(error);
        }
    }
}