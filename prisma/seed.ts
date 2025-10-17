import { prisma } from "../src/config/prisma";
import { UserType, AnimalSpecies, ReportStatus } from "@prisma/client";
import bcrypt from "bcrypt";

async function main() {
  // Limpar dados existentes
  await prisma.midia.deleteMany();
  await prisma.animalsCharacteristics.deleteMany();
  await prisma.animal.deleteMany();
  await prisma.report.deleteMany();
  await prisma.notification.deleteMany();
  await prisma.characteristic.deleteMany();
  await prisma.user.deleteMany();

  // Criar características
  const characteristics = await Promise.all([
    prisma.characteristic.create({ data: { description: "Carinhoso" } }),
    prisma.characteristic.create({ data: { description: "Brincalhão" } }),
    prisma.characteristic.create({ data: { description: "Calmo" } }),
    prisma.characteristic.create({ data: { description: "Energético" } }),
    prisma.characteristic.create({ data: { description: "Amigável" } }),
    prisma.characteristic.create({ data: { description: "Tímido" } }),
  ]);

  // Criar usuários
  const hashedPassword = await bcrypt.hash("123456", 10);
  
  const user = await prisma.user.create({
    data: {
      email: "usuario@exemplo.com",
      name: "João Silva",
      password: hashedPassword,
      phone: "(47) 99999-8888",
      cpf: "123.456.789-00",
      type: UserType.USER,
    },
  });

  const ong1 = await prisma.user.create({
    data: {
      email: "ong1@exemplo.com",
      name: "ONG Amigos dos Animais",
      password: hashedPassword,
      phone: "(47) 88888-7777",
      cnpj: "12.345.678/0001-90",
      type: UserType.ONG,
    },
  });

  const ong2 = await prisma.user.create({
    data: {
      email: "ong2@exemplo.com",
      name: "ONG Patas Felizes",
      password: hashedPassword,
      phone: "(47) 77777-6666",
      cnpj: "98.765.432/0001-10",
      type: UserType.ONG,
    },
  });

  // Criar animais
  const animals = await Promise.all([
    prisma.animal.create({
      data: {
        name: "Rex",
        age: 3,
        species: AnimalSpecies.DOG,
        breed: "Vira-lata",
        description: "Um cão muito amigável e cheio de energia",
        responsibleNGOId: ong1.id,
        characteristics: {
          create: [
            { characteristicId: characteristics[0].id }, // Carinhoso
            { characteristicId: characteristics[1].id }, // Brincalhão
          ],
        },
        midia: {
          create: [
            {
              type: "image",
              extension: "jpg",
              url: "/images/rex1.jpg",
            },
          ],
        },
      },
    }),
    prisma.animal.create({
      data: {
        name: "Mia",
        age: 2,
        species: AnimalSpecies.CAT,
        breed: "Siamês",
        description: "Gata calma e carinhosa, adora dormir no sofá",
        responsibleNGOId: ong1.id,
        characteristics: {
          create: [
            { characteristicId: characteristics[0].id }, // Carinhoso
            { characteristicId: characteristics[2].id }, // Calmo
          ],
        },
        midia: {
          create: [
            {
              type: "image",
              extension: "jpg",
              url: "/images/mia1.jpg",
            },
          ],
        },
      },
    }),
    prisma.animal.create({
      data: {
        name: "Thor",
        age: 4,
        species: AnimalSpecies.DOG,
        breed: "Husky",
        description: "Cão energético que precisa de muito exercício",
        responsibleNGOId: ong2.id,
        characteristics: {
          create: [
            { characteristicId: characteristics[1].id }, // Brincalhão
            { characteristicId: characteristics[3].id }, // Energético
          ],
        },
        midia: {
          create: [
            {
              type: "image",
              extension: "jpg",
              url: "/images/thor1.jpg",
            },
          ],
        },
      },
    }),
    prisma.animal.create({
      data: {
        name: "Luna",
        age: 1,
        species: AnimalSpecies.CAT,
        breed: "Persa",
        description: "Gatinha tímida mas muito doce",
        responsibleNGOId: ong2.id,
        characteristics: {
          create: [
            { characteristicId: characteristics[4].id }, // Amigável
            { characteristicId: characteristics[5].id }, // Tímido
          ],
        },
        midia: {
          create: [
            {
              type: "image",
              extension: "jpg",
              url: "/images/luna1.jpg",
            },
          ],
        },
      },
    }),
  ]);

  // Criar denúncias
  const reports = await Promise.all([
    prisma.report.create({
      data: {
        description: "Cão abandonado na rua",
        details: "Encontrei um cão magro e assustado perto do parque. Ele parece estar perdido há vários dias.",
        location: "Rua das Flores, 123 - Centro",
        status: ReportStatus.PENDING,
        userId: user.id,
        ocurrenceDate: new Date("2025-10-14T10:00:00Z"),
        midia: {
          create: [
            {
              type: "image",
              extension: "jpg",
              url: "/images/report1.jpg",
            },
          ],
        },
      },
    }),
    prisma.report.create({
      data: {
        description: "Gato ferido",
        details: "Gato com uma das patas machucada, precisa de ajuda médica urgente.",
        location: "Avenida Principal, 456 - Bairro Novo",
        status: ReportStatus.UNDER_REVIEW,
        userId: user.id,
        ngoId: ong1.id,
        ocurrenceDate: new Date("2025-10-13T15:30:00Z"),
        midia: {
          create: [
            {
              type: "image",
              extension: "jpg",
              url: "/images/report2.jpg",
            },
          ],
        },
      },
    }),
    prisma.report.create({
      data: {
        description: "Vários filhotes abandonados",
        details: "Encontrei uma caixa com 5 filhotes de cachorro recém-nascidos. A mãe não está por perto.",
        location: "Praça Central - próximo ao coreto",
        status: ReportStatus.IN_PROGRESS,
        userId: user.id,
        ngoId: ong2.id,
        ocurrenceDate: new Date("2025-10-12T08:00:00Z"),
        midia: {
          create: [
            {
              type: "image",
              extension: "jpg",
              url: "/images/report3.jpg",
            },
            {
              type: "video",
              extension: "mp4",
              url: "/images/report3_video.mp4",
            },
          ],
        },
      },
    }),
    prisma.report.create({
      data: {
        description: "Animal em situação de maus-tratos",
        details: "Cão preso em corrente muito curta, sem água nem comida adequada.",
        location: "Rua dos Animais, 789 - Zona Rural",
        status: ReportStatus.RESOLVED,
        userId: user.id,
        ngoId: ong1.id,
        ocurrenceDate: new Date("2025-10-10T14:20:00Z"),
        midia: {
          create: [
            {
              type: "image",
              extension: "jpg",
              url: "/images/report4.jpg",
            },
          ],
        },
      },
    }),
  ]);

  // Criar notificações
  await Promise.all([
    prisma.notification.create({
      data: {
        message: "Nova denúncia recebida em sua região",
        userId: ong1.id,
      },
    }),
    prisma.notification.create({
      data: {
        message: "Sua denúncia está em análise",
        userId: user.id,
      },
    }),
    prisma.notification.create({
      data: {
        message: "Animal disponível para adoção próximo de você",
        userId: user.id,
      },
    }),
  ]);

  console.log("Seed criado com sucesso!");
  console.log(`Usuários: 3`);
  console.log(`Animais: ${animals.length}`);
  console.log(`Denúncias: ${reports.length}`);
  console.log(`Características: ${characteristics.length}`);
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })