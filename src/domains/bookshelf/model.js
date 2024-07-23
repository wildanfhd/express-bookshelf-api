const prisma = require("../../prismaClient")

const getBooks = async () => {
  return await prisma.book.findMany()
}

const getBookDetails = async (id) => {
  return await prisma.book.findFirst({
    where: {
      id: id
    }
  })
}

const createBook = async (data) => {
  return await prisma.book.create({
    data,
  })
}


module.exports = {
  getBooks,
  createBook,
  getBookDetails
}