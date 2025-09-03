const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function checkUsers() {
  try {
    const users = await prisma.user.findMany()
    console.log('Existing users:', users)
  } catch (error) {
    console.error('Error fetching users:', error)
  } finally {
    await prisma.$disconnect()
  }
}

checkUsers()