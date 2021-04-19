import bookService from './service';

class BookController {
  async getAll(req, res) {
    const books = await bookService.getAll();

    !books
      ? res.json({ message: 'Sorry no book found' })
      : res.status(200).json(books);
  }

  async getOne(req, res) {
    const findBook = req.params.id;
    const book = await bookService.getOne(findBook);

    !book
      ? res.json({ message: 'Sorry no book found' })
      : res.status(200).json(book);
  }

  async post(req, res) {
    const newBook = {
      title: req.body.title,
      description: req.body.description,
      published: req.body.published
    };

    const addBook = await bookService.post(newBook);

    !addBook
      ? res.json({ message: 'Error book was not add to the database' })
      : res.status(200).json(addBook);
  }

  async delete(req, res) {
    let book = req.params.id;
    const findBook = await bookService.getOne(book);

    if (!findBook) {
      return res
        .status(404)
        .json({ message: 'No corresponding book in storage' });
    }

    const deleteBook = await bookService.delete(book);

    !deleteBook
      ? res.status(400).json({ error: 'book not delete' })
      : res
          .status(200)
          .json({ message: 'Book reference deleted successfully' });
  }
}

export default BookController;
