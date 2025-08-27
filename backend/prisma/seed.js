import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function seed() {
  const createUser = await prisma.user.create({
    data: 
      {
        email: "stevenJohnson12@gmail.com",
        password: await bcrypt.hash("Password123!", 10),
        profile: {
          create: {
            firstName: "Steven",
            lastName: "Johnson",
            bio: "I like trains",
            mobile: "07900000000",
          },
        },
      },
      include: {
        profile: true
      }
  });

  console.log({ createUser });

  const createPosts = await prisma.post.createManyAndReturn({
    data: [{
        title: 'Happy Sunday!',
        content: 'Have a Happy Sunday everyone.',
        userId: 1
    },
    {
        title: 'Traveling Blues :(',
        content: 'I miss travelling *cry face*',
        userId: 1
    }
]
  });

  console.log(createPosts);

  
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
