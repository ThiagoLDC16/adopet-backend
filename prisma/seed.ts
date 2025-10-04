import { PrismaClient, AnimalSpecies, UserType, AnimalStatus } from '@prisma/client';
import { hashPassword } from '../src/utils/hash';

const prisma = new PrismaClient();

async function main() {
  console.log('Iniciando seed do banco de dados...');

  // Limpar dados existentes
  await prisma.animal.deleteMany();
  await prisma.user.deleteMany();

  // Criar usuários ONGs
  const ong1 = await prisma.user.create({
    data: {
      email: 'ong1@adopet.com',
      name: 'Patas Amigas',
      password: await hashPassword('123456'),
      phone: '(11) 98765-4321',
      cnpj: '12.345.678/0001-90',
      type: UserType.ONG,
    },
  });

  const ong2 = await prisma.user.create({
    data: {
      email: 'ong2@adopet.com',
      name: 'Abrigo Esperança',
      password: await hashPassword('123456'),
      phone: '(21) 91234-5678',
      cnpj: '98.765.432/0001-10',
      type: UserType.ONG,
    },
  });

  // Criar usuário comum
  const user1 = await prisma.user.create({
    data: {
      email: 'usuario@adopet.com',
      name: 'João Silva',
      password: await hashPassword('123456'),
      phone: '(31) 98888-7777',
      cpf: '123.456.789-00',
      type: UserType.USER,
    },
  });

  // Criar animais para a ONG 1
  await prisma.animal.createMany({
    data: [
      {
        name: 'Rex',
        species: AnimalSpecies.DOG,
        breed: 'Labrador',
        age: 3,
        description: 'Rex é um cão muito dócil e brincalhão. Adora crianças e outros animais. Já foi vacinado e castrado.',
        status: AnimalStatus.DISPONIVEL,
        images: [
          'https://images.unsplash.com/photo-1552053831-71594a27632d?w=400',
          'https://images.unsplash.com/photo-1583337134247-85d2790bae97?w=400'
        ],
        city: 'São Paulo',
        state: 'SP',
        ongId: ong1.id,
      },
      {
        name: 'Mia',
        species: AnimalSpecies.CAT,
        breed: 'Siames',
        age: 2,
        description: 'Mia é uma gata muito carinhosa e calma. Adora dormir no colo e brincar com bolinhas de lã.',
        status: AnimalStatus.DISPONIVEL,
        images: [
          'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400',
          'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400'
        ],
        city: 'São Paulo',
        state: 'SP',
        ongId: ong1.id,
      },
      {
        name: 'Thor',
        species: AnimalSpecies.DOG,
        breed: 'Husky Siberiano',
        age: 4,
        description: 'Thor é um cão energético que precisa de espaço para correr. Ideal para famílias ativas.',
        status: AnimalStatus.DISPONIVEL,
        images: [
          'https://images.unsplash.com/photo-1605568427561-40323c97e2ce?w=400'
        ],
        city: 'São Paulo',
        state: 'SP',
        ongId: ong1.id,
      },
    ],
  });

  // Criar animais para a ONG 2
  await prisma.animal.createMany({
    data: [
      {
        name: 'Luna',
        species: AnimalSpecies.CAT,
        breed: 'Persa',
        age: 1,
        description: 'Luna é uma gatinha muito dócil e tranquila. Perfeita para apartamentos.',
        status: AnimalStatus.DISPONIVEL,
        images: [
          'https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=400'
        ],
        city: 'Rio de Janeiro',
        state: 'RJ',
        ongId: ong2.id,
      },
      {
        name: 'Max',
        species: AnimalSpecies.DOG,
        breed: 'Golden Retriever',
        age: 5,
        description: 'Max é um cão muito leal e protetor. Ótimo com crianças e idosos.',
        status: AnimalStatus.EM_PROCESSO,
        images: [
          'https://images.unsplash.com/photo-1552053831-71594a27632d?w=400'
        ],
        city: 'Rio de Janeiro',
        state: 'RJ',
        ongId: ong2.id,
      },
      {
        name: 'Pipoca',
        species: AnimalSpecies.RODENT,
        breed: 'Porquinho da Índia',
        age: 1,
        description: 'Pipoca é um porquinho da índia muito sociável e fácil de cuidar.',
        status: AnimalStatus.DISPONIVEL,
        images: [
          'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=400'
        ],
        city: 'Rio de Janeiro',
        state: 'RJ',
        ongId: ong2.id,
      },
    ],
  });

  console.log('Seed concluído com sucesso!');
  console.log(`Criados: 3 usuários, 6 animais`);
  console.log(`ONGs: ${ong1.name}, ${ong2.name}`);
  console.log(`Usuário: ${user1.name}`);
}

main()
  .catch((e) => {
    console.error('Erro no seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });