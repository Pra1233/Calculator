import {Router} from "express";
const router = Router();
import {
  getBooks,
  createBook,
  deleteBook,
  updateBook,
} from "../../application/controller/library";

router.get("/books", getBooks);
router.post("/book", createBook);
router.delete("/book/:id", deleteBook);
router.put("/book/update/:id", updateBook);

export default router;
