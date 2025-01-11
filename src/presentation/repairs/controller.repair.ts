import { Request, Response } from "express";


export class RepairsController {
    constructor() {}

    // Crear reparación
    createRepair =  (req: Request, res: Response) => {
        const { date, userId } = req.body;

        if (!date || !userId) {
            return res.status(400).json({ message: "Faltan campos obligatorios: date y userId" });
        }
        return res.status(201).json({
            message: "Reparación creada con éxito",
            repair: { date, userId, status: "pending" },
        });
    };

    // Obtener lista de reparaciones pendientes
    getRepairs =  (_req: Request, res: Response) => {
        
        return res.status(200).json({
            message: "Lista de reparaciones pendientes",
            repairs: [], 
        });
    };

    // Obtener reparación por ID
    getRepairById =  (req: Request, res: Response) => {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ message: "Se requiere un ID válido" });
        }

        
        return res.status(200).json({
            message: "Reparación encontrada",
            repair: { id }, 
        });
    };

    // Actualizar reparación a completada
    updateRepair =  (req: Request, res: Response) => {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ message: "Se requiere un ID válido" });
        }

        
        return res.status(200).json({
            message: "Reparación actualizada a completada",
            repair: { id, status: "completed" }, 
        });
    };

    // Cancelar reparación
    cancelRepair =  (req: Request, res: Response) => {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ message: "Se requiere un ID válido" });
        }

       
        return res.status(200).json({
            message: "Reparación cancelada",
            repair: { id, status: "cancelled" }, 
        });
    };
}
