"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const library_1 = require("../../application/controller/library");
router.get("/books", library_1.getBooks);
router.post("/book", library_1.createBook);
router.delete("/book/:id", library_1.deleteBook);
router.put("/book/update/:id", library_1.updateBook);
exports.default = router;