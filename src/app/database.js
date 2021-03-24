import { Sequelize } from 'sequelize';
import databaseOptions from '../config/database';

//Modules
import BookModel from '../api/book/model';

const sequelize = new Sequelize(
  databaseOptions.database,
  databaseOptions.password,
  databaseOptions.username,
  {
    host: databaseOptions.host,
    port: databaseOptions.port,
    dialect: databaseOptions.dialect
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log(
      `Connection to ${databaseOptions.database} has been established successfully.`
    );
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

let db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.books = BookModel(sequelize, Sequelize);

db.sequelize.sync();

export default db;
