import LibraryModel from "../../model/libraryModel.js";
const libraryModel = new LibraryModel();


type Book={
  id: number,
  name: string,
  description: string,
  amount: string,
}

class LibraryService {
  async getAllBooks():Promise<Book[]> {
    try {
      const books = await libraryModel.findAll();
      return books;
    } catch (error) {
      throw new Error((error as Error ).message);
    }
  }

  async createBook(book:Omit<Book,"id">):Promise<void> {
    try {
      if (!book.name || !book.description || !book.amount) {
        throw new Error("Please provide all Field");
      }
       await libraryModel.create(book);
     
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async deleteBook(id:number):Promise<{isDeleted:boolean}> {
    try {
      if (!id) {
        throw new Error("Id is Missing");
      }
      const book = await libraryModel.delete(id);
      return book;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async updateBook(id:number, book:Book):Promise<{isUpdated:boolean}> {
    try {
      if (!id) {
        throw new Error("Id is Missing");
      } else if (!book) {
        throw new Error("Book is Missing");
      }
      const newBook = libraryModel.update(id, book);
      return newBook;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
}
export default LibraryService;
