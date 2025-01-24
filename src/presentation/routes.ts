import {Router} from 'express'
import { RepairRoutes } from './repairs/router.repairs';
import { UsersRouter } from "./users/router.users";


export class AppRoutes {
    static get routes() : Router{
        const router = Router()

        router.use("/api/v1/repairs",RepairRoutes.routes)
        router.use("/api/v1/users", UsersRouter.routes);
        return router;
    }

}