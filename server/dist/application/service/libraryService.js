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
const libraryModel_js_1 = __importDefault(require("../../model/libraryModel.js"));
const libraryModel = new libraryModel_js_1.default();
class LibraryService {
    getAllBooks() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const books = yield libraryModel.findAll();
                return books;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    createBook(book) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!book.name || !book.description || !book.amount) {
                    throw new Error("Please provide all Field");
                }
                yield libraryModel.create(book);
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    deleteBook(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!id) {
                    throw new Error("Id is Missing");
                }
                const book = yield libraryModel.delete(id);
                return book;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    updateBook(id, book) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!id) {
                    throw new Error("Id is Missing");
                }
                else if (!book) {
                    throw new Error("Book is Missing");
                }
                const newBook = libraryModel.update(id, book);
                return newBook;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
}
exports.default = LibraryService;
