import { Router } from "express";
import { RepairsController } from "./controller.repair";

export class RepairsRouter {
    static get routes(): Router {
        const router = Router();
        const repairsController = new RepairsController();

        // Endpoints 
        router.get('/', repairsController.getRepairs); // reparaciones pendientes
        router.get('/:id', repairsController.getRepairById); //  reparación por ID
        router.post('/', repairsController.createRepair); // Crear una nueva reparación
        router.patch('/:id', repairsController.updateRepair); // Actualizar reparación 
        router.delete('/:id', repairsController.cancelRepair); // Cancelar reparación

        return router;
    }
}
