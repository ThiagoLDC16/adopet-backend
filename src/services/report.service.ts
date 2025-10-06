import { Prisma } from "@prisma/client";
import { reportRepository } from "../repositories/report.repository";



async function register(input: Prisma.ReportCreateInput) {
    const report = await reportRepository.create({
        ...input,
    });

    return { report }

}
export const reportServices = {
    register,
}