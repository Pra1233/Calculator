import container from "../../library/dependencyInjection/container";
const library = container.resolve("libraryService"); //key
import {Request,Response} from 'express'; //object


export const getBooks = async (req:Request, res:Response):Promise<void> => {
  try {
    const books = await library.getAllBooks();
    res.status(200).json({
      success: true,
      books: books,
    });
  } catch (error) {
     res.status(400).json({ success: false, message: (error as Error).message });
  }
};

export const createBook = async (req:Request, res:Response):Promise<void> => {
  try {
    const book = req.body;
    const newbook = await library.createBook(book);
    res.status(200).json({
      success: true,
      message: "Send data successfully",
      book: newbook,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: (error as Error).message });
  }
};

export const deleteBook = async (req:Request, res:Response):Promise<void> => {
  const { id } = req.params;
  try {
    await library.deleteBook(Number(id));
    res.status(200).json({
      success: true,
      message: "Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: (error as Error).message });
  }
};

export const updateBook = async (req:Request, res:Response):Promise<void> => {
  try {
    const id = req.params.id;
    const book = req.body;
    await library.updateBook(Number(id), book);
    res.status(200).json({
      success: true,
      id: id,
      message: "Updated Successfully",
    });
  } catch (error) {
     res.status(500).json({ success: false, message: (error as Error).message });
  }
};
