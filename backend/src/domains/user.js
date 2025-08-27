import prisma from "../utils/prisma.js";

const loginUserdb = async (email) => {
  return await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
};

export { loginUserdb };
