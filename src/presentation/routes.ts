import {Router} from 'express'
import { RepairsRouter } from './repairs/router.repairs';
import { UsersRouter } from "./users/router.users";


export class AppRoutes {
    static get routes() : Router{
        const router = Router()

        router.use("/api/repairs",RepairsRouter.routes)
        router.use("/api/users", UsersRouter.routes);
        return router;
    }

}