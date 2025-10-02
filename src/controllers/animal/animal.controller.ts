import { Request, Response } from 'express';
import * as z from 'zod';
import { UserType } from '@prisma/client';
import { Prisma } from '@prisma/client';
import { animalService } from '../../services/animal.service';

const animalSchema = z.object({
  name: z.string().min(1),
  age: z.preprocess((val) => Number(val), z.number().int().gte(0)),
  species: z.string().min(1),
  breed: z.string().min(1),
  midia: z.any(),
  characteristics: z.any(),
  description: z.string().min(1),
  responsibleNGO: z.any(),
  adopterUser: z.any().optional()
});

export async function register(req: Request, res: Response) {
  const parsed = animalSchema.parse(req.body);

  const files = req.files as Express.Multer.File[];

  const midiaData = files.map((file) => ({
    type: file.mimetype.startsWith("image") ? "image" : "video",
    extension: file.originalname.split(".").pop()!,
    url: `/images/${file.filename}`,
  }));

  const characteristics = 
    typeof parsed.characteristics === "string"
    ? parsed.characteristics.split(",").map((c: string) => ({
      characteristic: { create: { description: c.trim() } },
    }))
    : [];

    const data: Prisma.AnimalCreateInput = {
      name: parsed.name,
      age: parsed.age,
      species: parsed.species,
      breed: parsed.breed,
      description: parsed.description,

      midia: { create: midiaData },

      characteristics: { create: characteristics },

      responsibleNGO: {
        connect: { id: (req as any).user.sub }
      }
    };

  const { animal } = await animalService.register(data);

  return res.status(201).json({
    animal
  });
}

export async function find(req: Request, res: Response) {
  const animal = await animalService.find(Number(req.params.id));
  if (!animal) return res.status(404).json({ code: "NOT_FOUND "})
  return res.status(200).json({
    animal
  })
}