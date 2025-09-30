import { Request, Response } from 'express';
// import { animalService } from '../../services/animal.service';
// import { AnimalCreateInputObjectZodSchema } from "../../../prisma/generated/zod/schemas";

export async function register(req: Request, res: Response) {
  // const data = AnimalCreateInputObjectZodSchema.parse(req.body);
  // const { animal } = await animalService.register(data);

  return res.status(201).json({
    // animal
  });
}