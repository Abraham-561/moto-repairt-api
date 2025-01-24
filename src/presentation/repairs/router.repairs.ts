import { Router } from "express";
import { RepairController } from "./controller.repair";
import { RepairService } from "../services/repair.service";

export class RepairRoutes {
  static get routes(): Router {
    const router = Router();
    const repairService = new RepairService()
    const repairsController = new RepairController(repairService);

    router.get("/", repairsController.findAllRepairs)
    router.get("/:id", repairsController.findOneRepair)
    router.post("/", repairsController.createRepair)
    router.patch("/:id", repairsController.updateRepair)
    router.delete("/:id", repairsController.delete)

    return router;
  }
}

