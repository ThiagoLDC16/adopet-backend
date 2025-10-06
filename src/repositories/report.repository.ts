import { Prisma, Report } from "@prisma/client";
import { prisma } from '../config/prisma';


async function create(data: Prisma.ReportCreateInput): Promise<Report> {
    return prisma.report.create({ data });
}

export const reportRepository = {
    create,

};
