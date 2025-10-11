import { Prisma } from "@prisma/client";
import { reportRepository } from "../repositories/report.repository";
import path from 'path';
import fs from 'fs'



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

async function findById(id: number) {
    const report = await reportRepository.findById(id)
    if (!report) return false
    return { report }
}

async function edit(id: number, data: Prisma.ReportUpdateInput) {
    const report = await reportRepository.edit(id, data)
    if (!report) return false
    return { report }
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
    findByUser,
    findById,
    edit,
    exclude
}