import { Router } from "express";
import { RepairController } from "./controller.repair";
import { RepairService } from "../services/repair.service";
import { AuthMiddleware } from "../middleware/auth.middleware";
import { Role } from "../../data/postgres/models/user.model";

export class RepairRoutes {
  static get routes(): Router {
    const router = Router();
    const repairService = new RepairService()
    const repairsController = new RepairController(repairService);


    router.use(AuthMiddleware.protect);
        router.post("/", repairsController.createRepair);
        router.use(AuthMiddleware.restricTo(Role.EMPLOYEE));
    router.get("/", repairsController.findAllRepairs);
    router.get("/:id", repairsController.findOneRepair);
    router.patch("/:id", repairsController.updateRepair);
    router.delete("/:id", repairsController.delete);
    

    return router;
  }
}

