import db from '../../app/database';

class BookService {
  constructor() {}

  async getAll() {
    let books = await db.books.findAll({
      attributes: ['id', 'title', 'published', 'description']
    });

    return books;
  }

  async getOne(findBook) {
    let book = await db.books.findOne({
      where: { id: findBook }
    });
    return book;
  }

  async post(addBook) {
    let books = await db.books.create(addBook);
    return books;
  }

  async delete(findBook) {
    console.log('service booook', findBook);
    const destroying = await db.books.destroy({
      where: { id: findBook }
    });
    return {};
    // destroying ? findBook : {};
  }
}

export default new BookService();
