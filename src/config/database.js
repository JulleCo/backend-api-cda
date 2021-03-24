const development = {
  username: 'root',
  password: 'root',
  database: 'backend_api',
  host: 'localhost',
  port: '8889',
  dialect: 'mysql'
};

const production = {
  database: process.env.DATABASE || 'backend_api_prod',
  username: process.env.USERNAME || 'root',
  password: process.env.PASSWORD || 'root',
  host: process.env.HOST || '127.0.0.1',
  port: process.env.PORT_DB || '8889',
  dialect: process.env.DIALECT || 'mysql'
};

let databaseOptions;

process.env.PRODUCTION
  ? (databaseOptions = production)
  : (databaseOptions = development);

export default databaseOptions;
