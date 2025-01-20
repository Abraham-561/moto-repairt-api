import { Router } from "express";
import { UsersController } from "./controller.users";
import { UserService } from "../services/user.service";

export class UsersRouter {
    static get routes(): Router {
        const router = Router();
        const userService = new UserService()
        const usersController = new UsersController(userService);

        // Endpoints
        router.get("/", usersController.findAllUsers); // Obtener todos los usuarios
        router.get("/:id", usersController.findOneUser); // Obtener usuario por ID
        router.post("/", usersController.createUser); // Crear un nuevo usuario
        router.patch("/:id", usersController.updateUser); // Actualizar datos de un usuario
        router.delete("/:id", usersController.deleteUser); // Deshabilitar usuario

        return router;
    }
}
