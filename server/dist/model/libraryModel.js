"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LibraryModel {
    constructor() {
        this.libraryBooks = [];
    }
    create(book) {
        const newBook = Object.assign(Object.assign({}, book), { id: this.libraryBooks.length });
        this.libraryBooks.push(newBook);
    }
    findAll() {
        return this.libraryBooks;
    }
    delete(id) {
        this.libraryBooks = this.libraryBooks.filter((book) => book.id != id);
        return { isDeleted: true };
    }
    update(id, book) {
        this.libraryBooks[id] = Object.assign({}, book);
        return { isUpdated: true };
    }
}
exports.default = LibraryModel;
