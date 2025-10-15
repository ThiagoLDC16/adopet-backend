import { Midia, Prisma, Report } from "@prisma/client";
import { prisma } from '../config/prisma';


async function create(data: Prisma.ReportCreateInput): Promise<Report> {
    return prisma.report.create({ data });
}

async function findMany(where: Prisma.ReportWhereInput): Promise<Report[] | null> {
    return prisma.report.findMany({
        where,
        include: { midia: true }
    })
}

async function findByUser(id: number): Promise<Report[] | null> {
    return prisma.report.findMany({
        where: { userId: id },
        include: { midia: true }
    })
}

async function findById(id: number): Promise<Report | null> {
    return prisma.report.findUnique({
        where: { id: id },
        include: { midia: true }
    })
}

async function edit(id: number, data: Prisma.ReportUpdateInput): Promise<Report> {
    return prisma.report.update({ where: { id }, data })
}

async function findReportMidia(id: number): Promise<Midia[]> {
    return prisma.midia.findMany({ where: { reportId: id } });
}

async function deleteById(id: number): Promise<Report | null> {
    return prisma.report.delete({ where: { id } });
}


export const reportRepository = {
    create,
    findMany,
    findByUser,
    findById,
    edit,
    findReportMidia,
    deleteById
};
