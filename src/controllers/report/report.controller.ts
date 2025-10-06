import { Prisma, ReportStatus } from '@prisma/client';
import { Request, Response } from 'express';
import * as z from 'zod';
import { reportServices } from '../../services/report.service';

const userSchema = z.object({
    id: z.number(),
    name: z.string(),
    email: z.email(),
    type: z.string()
})


const reportSchema = z.object({
    description: z.string().min(1),
    details: z.string().min(1),
    ocurrenceDate: z.string().transform((string) => new Date(string)),
    location: z.string().min(1),
    user: userSchema.optional()
})

export async function register(req: Request, res: Response) {
    const parsed = reportSchema.parse({ ...req.body, user: req.body.user ? JSON.parse(req.body.user) : undefined })
    const files = req.files as Express.Multer.File[]

    const midiaData = files.map((file) => ({
        type: file.mimetype.startsWith("image") ? "image" : "video",
        extension: file.originalname.split(".").pop()!,
        url: `/images/${file.filename}`,
    }))


    const data: Prisma.ReportCreateInput = {
        description: parsed.description,
        details: parsed.details,
        location: parsed.location,
        ocurrenceDate: parsed.ocurrenceDate,
        status: ReportStatus.PENDING,
        user: parsed.user ? { connect: { id: parsed.user.id } } : undefined,
        midia: {
            create: midiaData.map(file => ({
                type: file.type,
                extension: file.extension,
                url: file.url,

            }))
        },
    }

    const { report } = await reportServices.register(data)

    return res.status(201).json({
        report
    });

}