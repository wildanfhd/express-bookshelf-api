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

const createBook = async (newBook) => {
  return await prisma.book.create({
    data: newBook,
  })
}


module.exports = {
  getBooks,
  createBook,
  getBookDetails
}