
type Book={
  id: number,
  name: string,
  description: string,
  amount: string,
}

class LibraryModel {
private libraryBooks:Book[];

  constructor() {
    this.libraryBooks = [];
  }
  create(book:Omit<Book,"id">):void {
    const newBook = { ...book, id: this.libraryBooks.length };
    this.libraryBooks.push(newBook);
  }
  findAll():Book[] {
    return this.libraryBooks;
  }
  delete(id:number):{isDeleted:boolean} {
    this.libraryBooks = this.libraryBooks.filter((book) => book.id != id);
    return { isDeleted: true };
  }
  update(id:number, book:Book):{isUpdated:boolean} {
    this.libraryBooks[id] = { ...book };
    return { isUpdated: true };
  }
}

export default LibraryModel;
