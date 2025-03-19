import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { email, password } = await req.json();

  // CHECK IF USER ALREADY EXISTS
  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    return new Response(JSON.stringify({ error: " User already exists" }), {
      status: 400,
    });
  }

  // HASH THE PASSWORD
  const hashedPassword = await bcrypt.hash(password, 10);

  // CREATE USER
  const newUser = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  });

  return new Response(
    JSON.stringify({ message: "User created", user: newUser })
  );
}
