import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();
const SECRET_KEY = "my_secret_key"; // change this in production

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return new Response(JSON.stringify({ error: "Invalid credentials" }), {
      status: 401,
    });
  }

  // GENERATE JWT
  const token = jwt.sign({ userId: user.id }, SECRET_KEY, {
    expiresIn: "10d",
  });

  return new Response(JSON.stringify({ message: "Login successful", token }));
}
