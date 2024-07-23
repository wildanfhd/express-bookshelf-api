const express = require("express")
const router = express.Router();

const { createBookData, getAllBooks, getBookDetail, updateBook, deleteBook } = require("./controller");

// Mandatory
// 1. Menyimpan Buku POST:/books
// 2. Menampilkan Seluruh buku GET:/books
// 3. Menampilkan detail buku | GET:/books/{bookId}
// 4. Mengubah data buku | PUT: /books/{bookId}
// 5. Menghapus Buku | DELETE:/books/{bookId}


router.post("/", createBookData);     // ## 1. Menyimpan/membuat data buku
router.get("/", getAllBooks);         // ## 2. Menampilkan Seluruh buku 
router.get("/:bookId", getBookDetail) // ## 3. Menampilkan detail buku berdasarkan id
router.put("/:bookId", updateBook)    // ## 4. Mengubah data buku
router.delete("/:bookId", deleteBook) // ## 5. Menghapus buku



module.exports = router;