import bookService from './service';

class BookController {
  //   constructor() {
  //     this.bookService = new BookService();
  //   }

  get(req, res) {
    const books = bookService.get();

    if (!books || books.length > 0) {
      return res.json({ message: 'Sorry no books found' });
    }

    return res.json(books);
  }

  getAuthor() {}
}

export default BookController;
