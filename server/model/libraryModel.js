"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var LibraryModel = /** @class */ (function () {
    function LibraryModel() {
        this.libraryBooks = [];
    }
    LibraryModel.prototype.create = function (book) {
        var newBook = __assign(__assign({}, book), { id: this.libraryBooks.length });
        this.libraryBooks.push(newBook);
    };
    LibraryModel.prototype.findAll = function () {
        return this.libraryBooks;
    };
    LibraryModel.prototype.delete = function (id) {
        this.libraryBooks = this.libraryBooks.filter(function (book) { return book.id != id; });
        return { isDeleted: true };
    };
    LibraryModel.prototype.update = function (id, book) {
        this.libraryBooks[id] = __assign({}, book);
        return { isUpdated: true };
    };
    return LibraryModel;
}());
exports.default = LibraryModel;
