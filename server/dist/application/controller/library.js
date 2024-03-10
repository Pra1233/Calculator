"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBook = exports.deleteBook = exports.createBook = exports.getBooks = void 0;
const container_1 = __importDefault(require("../../library/dependencyInjection/container"));
const library = container_1.default.resolve("libraryService"); //key
const getBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield library.getAllBooks();
        res.status(200).json({
            success: true,
            books: books,
        });
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
});
exports.getBooks = getBooks;
const createBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = req.body;
        const newbook = yield library.createBook(book);
        res.status(200).json({
            success: true,
            message: "Send data successfully",
            book: newbook,
        });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});
exports.createBook = createBook;
const deleteBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield library.deleteBook(Number(id));
        res.status(200).json({
            success: true,
            message: "Deleted Successfully",
        });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});
exports.deleteBook = deleteBook;
const updateBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const book = req.body;
        yield library.updateBook(Number(id), book);
        res.status(200).json({
            success: true,
            id: id,
            message: "Updated Successfully",
        });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});
exports.updateBook = updateBook;
