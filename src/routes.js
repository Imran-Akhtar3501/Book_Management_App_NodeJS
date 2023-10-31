const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const router = express.Router();
const {
  findBooks,
  findBookById,
  updateBook,
  deleteBook,
  createBook,
} = require("./db/CRUD");

const SWAGGER_HOST = process.env.SWAGGER_HOST;
swaggerDocument.host = SWAGGER_HOST;

router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
router.use(express.json());

router.get("/helloApi", (req, res) => {
  res.send("Hello API");
});

router.get("/getAllBooks", async (req, res) => {
  const books = await findBooks();
  res.json(books);
});

router.get("/getBookById", async (req, res) => {
  const id = req.query.BookID;
  const book = await findBookById(id);
  if (book) {
    res.json(book);
  } else {
    res.send("Book not found");
  }
});

router.post("/addNewBook", (req, res) => {
  const { Title, Author, Summary } = req.body;
  createBook(Title, Author, Summary);
  res.send("New Book Added!");
});

router.put("/updateBookById", async (req, res) => {
  const id = req.query.BookID;
  const updates = req.body;
  const result = await updateBook(id, updates);
  
  if (result) {
    res.send(`Book with ID ${id} updated!`);
  } else {
    res.send(`Book with ID ${id} do not exist in DB. Please check the provided ID!`);
  }
});

router.delete("/deleteBookById", async (req, res) => {
  const id = req.query.BookID;
  const result = await deleteBook(id);
  
  if (result) {
    res.send(`Book with ID ${id} deleted successfully!`);
  } else {
    res.send(`Book with ID ${id} do not exist in DB. Please check the provided ID!`);
  }
});

module.exports = router;
