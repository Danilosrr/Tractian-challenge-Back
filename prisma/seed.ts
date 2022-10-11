import { PrismaClient, Units } from "@prisma/client";
import { prisma } from "./../src/config/database.js"

const company = {
  name: 'Freios Supremos',
}

const units = [
  {
    name: 'Unit 1',
    companyId: null
  },
  {
    name: 'Unit 2',
    companyId: null
  }
]

const users = [
  {
    name: 'Danilo Ribeiro',
    picture: 'https://avatars.githubusercontent.com/u/98192838?v=4',
    email: 'danilo_srr@hotmail.com',
    phone: '83 998817547'
  },
  {
    name: 'Danilo Sabino',
    picture: 'https://avatars.githubusercontent.com/u/98192838?v=4',
    email: 'danilo_srr@hotmail.com',
    phone: '83 998817547'
  },
  {
    name: 'Danilo Rosas',
    picture: 'https://avatars.githubusercontent.com/u/98192838?v=4',
    email: 'danilo_srr@hotmail.com',
    phone: '83 998817547'
  },
]

const status = [
  'Running',
  'Alerting',
  'Stopped'
]

async function seedCompany() {
  return await prisma.$transaction(async (prisma: PrismaClient) => {
    await prisma.company.deleteMany();

    await prisma.company.create({
      data: company,
    });

    return await prisma.company.findUnique({
      where: {
        name: company.name
      }
    });
  });
}

async function seedUnits(companyId:string) {
  return await prisma.$transaction(async (prisma: PrismaClient) => {
    await prisma.units.deleteMany();

    const companyUnits = units.map((unit) => { return {...unit, companyId} });

    await prisma.units.createMany({
      data: companyUnits,
    });

    return await prisma.units.findMany();
  });
}

async function seedAssets(units:Units[]) {
  return await prisma.$transaction(async (prisma: PrismaClient) => {
    await prisma.assets.deleteMany();

    const companyAssets = [];
    for(let i = 1; i <= 10; i++) {
      companyAssets.push({
        name: `Asset ${i}`,
        image: 'https://aprender.buzzero.com/buzzers/wilson-schwebel/41350/HotSiteImage.jpg',
        description: 'description example',
        model: 'machinery model',
        owner: 'owner',
        status: status[Math.round(Math.random()*3)],
        unitId: units[Math.round(Math.random())].id,
        health: parseFloat((Math.random()*100).toFixed(2)),
      });
    }

    await prisma.assets.createMany({
      data: companyAssets,
    });

    return await prisma.assets.findMany();
  });
}

async function seedUsers(companyId:string) {
  return await prisma.$transaction(async (prisma: PrismaClient) => {
    await prisma.users.deleteMany();

    const companyUsers = users.map((user) => { return {...user, companyId} });

    await prisma.users.createMany({
      data: companyUsers,
    });

    return await prisma.users.findMany();
  });
}

async function main() {
  console.log(`Start seeding ...`);

  const company = await seedCompany();
  const units = await seedUnits(company.id);
  const assets = await seedAssets(units);
  const users = await seedUsers(company.id);

  console.log(assets);

  console.log(`Seeding finished.`);
}


main()
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
