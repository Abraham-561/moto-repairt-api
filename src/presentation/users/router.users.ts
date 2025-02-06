import { Router } from "express";
import { UsersController } from "./controller.users";
import { UserService } from "../services/user.service";
import { AuthMiddleware } from "../middleware/auth.middleware";

export class UsersRouter {
    static get routes(): Router {
        const router = Router();
        const userService = new UserService()
        const usersController = new UsersController(userService);

        
    

        // Endpoints
        router.post("/login" , usersController.loginUser)
        router.post("/", usersController.createUser); // Crear un nuevo usuario

        router.use(AuthMiddleware.protect);
        
        router.get("/", usersController.findAllUsers); // Obtener todos los usuarios
        router.get("/:id", usersController.findOneUser); // Obtener usuario por ID
        router.patch("/:id", usersController.updateUser); // Actualizar datos de un usuario
        router.delete("/:id", usersController.deleteUser); // Deshabilitar usuario
       
        return router;
    }
}
