import { Prisma } from "@prisma/client";
import { reportRepository } from "../repositories/report.repository";



async function register(input: Prisma.ReportCreateInput) {
    const report = await reportRepository.create({
        ...input,
    });

    return { report }

}

async function findByUser(id: number) {
    const reports = await reportRepository.findByUser(id)
    return { reports }
}

export const reportServices = {
    register,
    findByUser
}