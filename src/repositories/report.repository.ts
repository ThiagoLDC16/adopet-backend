import { Prisma, Report } from "@prisma/client";
import { prisma } from '../config/prisma';


async function create(data: Prisma.ReportCreateInput): Promise<Report> {
    return prisma.report.create({ data });
}

async function findByUser(id: number): Promise<Report[] | null> {
    return prisma.report.findMany({
        where: { userId: id },
        include: { midia: true }
    })
}

export const reportRepository = {
    create,
    findByUser
};
