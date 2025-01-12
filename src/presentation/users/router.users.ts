import { Router } from "express";
import { UsersController } from "./controller.users";

export class UsersRouter {
    static get routes(): Router {
        const router = Router();
        const usersController = new UsersController();

        // Endpoints
        router.get("/", usersController.getUsers); // Obtener todos los usuarios
        router.get("/:id", usersController.getUserById); // Obtener usuario por ID
        router.post("/", usersController.createUser); // Crear un nuevo usuario
        router.patch("/:id", usersController.updateUser); // Actualizar datos de un usuario
        router.delete("/:id", usersController.disableUser); // Deshabilitar usuario

        return router;
    }
}
