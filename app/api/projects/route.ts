import { PrismaClient } from "@prisma/client";

export async function GET(request: Request) {
  const prisma = new PrismaClient();
  try {
    // Use the Prisma client to interact with your MongoDB
    const data = await prisma.project.findMany();
    return new Response("data" + JSON.stringify(data));
  } catch (error) {
    return new Response(JSON.stringify(error));
  } finally {
    await prisma.$disconnect();
  }
}
