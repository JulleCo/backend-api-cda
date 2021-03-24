import bookService from './service';

class BookController {
  async get(req, res) {
    const books = await bookService.get();

    if (!books) {
      return res.json({ message: 'Sorry no book found' });
    }

    return res.status(200).json(books);
  }

  async post(req, res) {
    let newBook = {
      title: req.body.title,
      description: req.body.description,
      published: req.body.published
    };

    const addBook = await bookService.post(newBook);

    if (!addBook) {
      return res.json({ message: 'Error book was not add to the database' });
    }

    return res.status(200).json(addBook);
  }

  getIfPublished(req, res) {}
}

export default BookController;
