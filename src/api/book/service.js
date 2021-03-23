class BookService {
  constructor() {}

  get() {
    //let books = [];

    let books = [
      {
        title: 'les misérables'
      },
      {
        title: 'La horde du contrevent'
      }
    ];

    return books;
  }
}

export default new BookService();
