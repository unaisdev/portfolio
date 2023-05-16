import { PrismaClient } from "@prisma/client";

export async function GET(request: Request) {
  const prisma = new PrismaClient();
  try {
    // Use the Prisma client to interact with your MongoDB
    const data = await prisma.skill.findMany();
    return new Response(JSON.stringify(data));
  } catch (error) {
    return new Response(JSON.stringify(error));
  } finally {
    await prisma.$disconnect();
  }
}
