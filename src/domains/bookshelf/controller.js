const { nanoid } = require("nanoid");
const books = require("./books");
const { getBooks, createBook, getBookDetails } = require("../bookshelf/model")


function createBookData(req, res) {
  const { name, year, author, summary, publisher, pageCount, readPage, reading } = req.body;
  const id = nanoid(16);
  const isFinished = readPage === pageCount;
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;

  if (!name) {
    const response = res.status(400).json({
      status: "fail",
      message: "Gagal menambahkan buku. Mohon isi nama buku",
    });
    return response;
  }

  if (readPage > pageCount) {
    const response = res.status(400).json({
      status: "fail",
      message: "Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount",
    });
    return response;
  }

  // Membuat objek baru
  const newBook = {
    id, name, year, author, summary, publisher, pageCount, readPage, finished: isFinished, reading, insertedAt, updatedAt
  }

  books.push(newBook);

  // Memastikan apakah data benar benar sudah masuk dan memiliki panjang > 0
  const isSuccess = books.filter((book) => book.id === id).length > 0;

  if (isSuccess) {
    const response = res.status(201).json({
      status: "success",
      message: "Buku berhasil ditambahkan",
      data: {
        bookId: id
      }
    });
    return response;
  }

  const response = res.status(500).json({
    status: "fail",
    message: "Buku gagal ditambahkan",
  });
  return response;
}


const getAllBooks = async (req, res) => {
  // const bookList = books;
  const bookList = await getBooks();
  // res.json(bookList)

  // console.log(bookList)

  const isEmpty = bookList.length < 0;
  const { name, reading, finished } = req.query;

  if (name) {
    const filteredBooks = bookList.filter((book) => book.name.toLowerCase().includes(name.toLowerCase()));

    console.log("Book contain name : ", filteredBooks)

    const response = res.status(200).json({
      status: "success",
      data: {
        books: filteredBooks.map((book) => ({
          id: book.id,
          name: book.name,
          publisher: book.publisher
        }))
      }
    })

    return response
  }

  if (reading) {
    const filteredBooks = bookList.filter((book) => book.reading === Boolean(Number(reading)));

    console.log("Reading Book : ", filteredBooks)

    const response = res.status(200).json({
      status: "success",
      data: {
        books: filteredBooks.map((book) => ({
          id: book.id,
          name: book.name,
          publisher: book.publisher
        }))
      }
    })

    return response
  }

  if (finished) {
    const filteredBooks = bookList.filter((book) => book.finished === Boolean(Number(finished)))

    console.log("Finished Book : ", filteredBooks)

    const response = res.status(200).json({
      status: "success",
      data: {
        books: filteredBooks.map((book) => ({
          id: book.id,
          name: book.name,
          publisher: book.publisher
        }))
      }
    })

    return response;
  }

  if (isEmpty) {
    const response = res.status(200).json({
      status: "success",
      data: {
        books: []
      }
    })
    return response;
  }

  const response = res.status(200).json({
    status: "success",
    data: {
      books: bookList.map((book) => ({
        id: book.id,
        name: book.name,
        publisher: book.publisher
      }))
    },
  })
  return response;
}


const getBookDetail = (req, res) => {
  const { bookId } = req.params;
  const book = books.filter((b) => b.id === bookId)[0];
  const finishedBook = books.filter((b) => b.readPage === b.pageCount)

  console.log("ID Buku : ", bookId)
  console.log(finishedBook)


  if (book !== undefined) {
    const response = res.status(200).send({
      status: "success",
      data: {
        book,
      }
    })

    return response
  }

  const response = res.status(404).send({
    status: "fail",
    message: "Buku tidak ditemukan"
  })

  return response;
}

const updateBook = (req, res) => {
  const { bookId } = req.params;
  const { name, year, author, summary, publisher, pageCount, readPage, reading } = req.body;
  const book = books.filter((b) => b.id === bookId)[0];


  if (!name) {
    const response = res.status(400).json({
      status: "fail",
      message: "Gagal memperbarui buku. Mohon isi nama buku",
    });
    return response;
  }

  if (readPage > pageCount) {
    const response = res.status(400).json({
      status: "fail",
      message: "Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount",
    });
    return response;
  }

  if (book !== undefined) {
    book.name = name;
    book.year = year;
    book.author = author;
    book.summary = summary;
    book.publisher = publisher;
    book.pageCount = pageCount;
    book.readPage = readPage;
    book.reading = reading;

    const response = res.status(200).send({
      status: "success",
      message: "Buku berhasil diperbarui"
    })

    return response
  }

  const response = res.status(404).send({
    status: "fail",
    message: "Gagal memperbarui buku. Id tidak ditemukan"
  })

  return response;

}

const deleteBook = (req, res) => {
  const { bookId } = req.params;
  const book = books.filter((b) => b.id === bookId)[0];

  if (book !== undefined) {
    books.splice(books.indexOf(book), 1);

    const response = res.status(200).send({
      status: "success",
      message: "Buku berhasil dihapus"
    })

    return response
  }

  const response = res.status(404).send({
    status: "fail",
    message: "Buku gagal dihapus. Id tidak ditemukan"
  })

  return response
}

module.exports = { createBookData, getAllBooks, getBookDetail, updateBook, deleteBook }