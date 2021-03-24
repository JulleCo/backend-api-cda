const Book = (sequelize, Sequelize) =>
  sequelize.define('book', {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  });

export default Book;
