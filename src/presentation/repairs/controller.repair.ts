import { Request, Response } from "express";
import { RepairService } from "../services/repair.service";
import { CustomError } from "../../domain";
import { CreateRepairDTO } from "../../domain";
import { protectAccountOwner } from "../../config/validate-owner";


export class RepairController {
  constructor(private readonly repairService: RepairService) {}

  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ message: error.message });
    }

    console.log(error);
    return res.status(500).json({ message: "Something went very wrong! 🔧" });
  };

  findAllRepairs = (req: Request, res: Response) => {
    this.repairService
      .findAll()
      .then((data) => res.status(200).json(data))
      .catch((error: any) => this.handleError(error, res));
  };

  findOneRepair = (req: Request, res: Response) => {
    const { id } = req.params;

    this.repairService.findOne(id).then((data) => res.status(200).json(data))
    .catch((error: any) => this.handleError(error, res));
  };

  createRepair = (req: Request, res: Response) => {
    const [error, createRepairDto] = CreateRepairDTO.create(req.body);
  
    if (error) return res.status(422).json({ message: error });
  
    this.repairService
      .create(createRepairDto!)
      .then((data) => res.status(200).json(data))
      .catch((error: any) => this.handleError(error, res));
  };
  
  updateRepair = (req: Request, res: Response) => {
    const { id } = req.params;
   
    

  
    this.repairService
      .update(id)
      .then((data) => res.status(200).json(data))
      .catch((error: any) => this.handleError(error, res));
  };
  
  delete = (req: Request, res: Response) => {
    const { id } = req.params;
  
  
    this.repairService
      .delete(id)
      .then((data) => res.status(204).json(null))
      .catch((error: any) => this.handleError(error, res));
  };
  
}
