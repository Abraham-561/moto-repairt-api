import { Request, Response } from "express";
import { CustomError } from "../../domain";
import { UserService } from "../services/user.service";

import { UpdateUserDTO } from "../../domain/dtos/users/update-user.dto";
import { CreateUserDTO } from "../../domain/dtos/users/create-user.dto";
import { protectAccountOwner } from "../../config/validate-owner";




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
    createUser = (req: Request, res: Response) => {
        const [error, createUserDto] = CreateUserDTO.create(req.body)
        if (error) return res.status(422).json({ message: error })
        this.userService
            .create(createUserDto!)
            .then((data) => res.status(200).json(data))
            .catch((error: any) => this.handleError(error, res))
    }
    updateUser = (req: Request, res: Response) => {
        const { id } = req.params;
        const sessionUserId = req.body.sessionUserId;
      
        console.log(sessionUserId, id)
        if (!protectAccountOwner(id, sessionUserId)) {
          return res
            .status(401)
            .json({ message: "You are not the owner of this account" });
        }
      
        const [error, updateUserDto] = UpdateUserDTO.create(req.body);
      
        if (error) return res.status(422).json({ message: error });
      
        this.userService
          .update(id, updateUserDto!)
          .then((data) => res.status(200).json(data))
          .catch((error: any) => this.handleError(error, res));
      };
      

    deleteUser = (req: Request, res: Response) => {
        const { id } = req.params
        const sessionUserId = req.body.sessionUserId.id

        if (!protectAccountOwner(id,sessionUserId)  ) {
          return res.status(401).json({message: "You are not the owner of this account"})
          
        }

        this.userService.delete(id) 
        .then((data) => res.status(204).json(data))
        .catch((error: any) => this.handleError(error,res))

    }

    loginUser =  (req: Request, res: Response) => {
        const { email, password } = req.params

        this.userService.login(email,password).then((data) => res.status(204).json(data))
        .catch((error: any) => this.handleError(error,res))

    }
} 