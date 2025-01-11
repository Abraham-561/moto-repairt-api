import {Router} from 'express'
import { RepairsRouter } from './repairs/router.repairs';

export class AppRoutes {
    static get routes() : Router{
        const router = Router()

        router.use("/api/repairs",RepairsRouter.routes)
        return router;
    }

}