import db from '../../app/database';

class BookService {
  constructor() {}

  async get() {
    let books = await db.books.findAll({
      attributes: ['title', 'published', 'description']
    });

    return books;
  }

  async post(addBook) {
    let books = await db.books.create(addBook);
    return books;
  }
}

export default new BookService();
