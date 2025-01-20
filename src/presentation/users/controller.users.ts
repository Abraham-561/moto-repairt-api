import { Request, Response } from "express";
import { CustomError } from "../../domain";
import { UserService } from "../services/user.service";




export class UsersController {
    constructor(
        private readonly userService: UserService) { }


    private handleError = (error: unknown, res: Response) => {
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({ message: error.message })
        }
        console.log(error)
        return res.status(500).json({ message: "Something went very wrong!" })
    }

    findAllUsers = (req: Request, res: Response) => {
        this.userService
            .findAll()
            .then(data => res.status(200).json(data))
            .catch((error: any) => this.handleError(error, res))

    }
    findOneUser = (req: Request, res: Response) => {
        const { id } = req.params
        this.userService
            .findOne(id)
            .then(data => res.status(200).json(data))
            .catch((error: any) => this.handleError(error, res))

    }
    createUser = (req: Request, res: Response) => { }
    updateUser = (req: Request, res: Response) => { }
    deleteUser = (req: Request, res: Response) => { }
} 