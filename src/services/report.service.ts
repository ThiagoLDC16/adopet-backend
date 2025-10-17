import { Prisma, ReportStatus, UserType } from "@prisma/client";
import { reportRepository } from "../repositories/report.repository";
import path from 'path';
import fs from 'fs'
import { AppError } from "../errors/app-error";



async function register(input: Prisma.ReportCreateInput) {
    const report = await reportRepository.create({
        ...input,
    });

    return { report }

}

async function getPendingReports() {
    const reports = await reportRepository.findMany({
        status: ReportStatus.PENDING,
    });
    return { reports };
}

async function sendReportToReview(id: number, ngoUserId: number) {
    const report = await reportRepository.findById(id);
    if (!report) throw new AppError("REPORT_NOT_FOUND", 404);
    if (report.status != ReportStatus.PENDING) throw new AppError("REPORT_STATUS_NEED_BE_PENDING");

    await reportRepository.edit(report.id, {
        status: ReportStatus.UNDER_REVIEW,
        ngo: { connect: { id: ngoUserId } }
    });

    return;
}

async function findByUser(id: number, userType: UserType, filters: {
    status?: string;
    search?: string;
    dateFrom?: string;
    dateTo?: string;
}) {
    const where: any = userType == UserType.ONG
        ? { ngoId: id }
        : { userId: id };

    if (filters.status) {
        where.status = filters.status;
    }

    if (filters.search) {
        where.OR = [
            { description: { contains: filters.search, mode: 'insensitive' } },
            { location: { contains: filters.search, mode: 'insensitive' } }
        ];
    }

    if (filters.dateFrom || filters.dateTo) {
        where.createdAt = {};
        if (filters.dateFrom) {
            where.createdAt.gte = new Date(filters.dateFrom);
        }
        if (filters.dateTo) {
            where.createdAt.lte = new Date(filters.dateTo);
        }
    }

    const reports = await reportRepository.findMany(where);
    return { reports }
}

async function findById(id: number) {
    const report = await reportRepository.findById(id)
    if (!report) return null
    return report
}

async function edit(id: number, data: Prisma.ReportUpdateInput) {
    const report = await reportRepository.edit(id, data)
    if (!report) return null
    return report
}


async function exclude(id: number) {
    const midia = await reportRepository.findReportMidia(id)

    if (midia && Array.isArray(midia)) {
        midia.forEach(item => {
            const midiaPath = path.join(process.cwd(), "public", item.url.replace(/^\//, ""));
            try {
                if (fs.existsSync(midiaPath)) fs.unlinkSync(midiaPath);
            } catch (err) {
                console.error("Erro ao deletar arquivo:", midiaPath, err);
            }
        });
    }

    const exclude = await reportRepository.deleteById(id)
    if (!exclude) return false

    return { exclude }
}


export const reportServices = {
    register,
    getPendingReports,
    sendReportToReview,
    findByUser,
    findById,
    edit,
    exclude
}