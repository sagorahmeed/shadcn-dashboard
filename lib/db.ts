// lib/db.ts
import { prisma } from "./prisma"

export async function fetchUserByEmail(email: string) {
  return await prisma.user.findUnique({ where: { email } })
}
