const development = {
  database: process.env.DATABASE || 'backend_api',
  usermane: process.env.USERNAME || 'root',
  password: process.env.PASSWORD || '',
  host: process.env.DATABASE || 'localhost',
  dialect: process.env.DATABASE || 'mysql'
};

const production = {
  database: process.env.DATABASE || 'backend_api_prod',
  usermane: process.env.USERNAME || 'root',
  password: process.env.PASSWORD || '',
  host: process.env.DATABASE || 'localhost',
  dialect: process.env.DATABASE || 'mysql'
};

let databaseOptions;

process.env.PRODUCTION
  ? (databaseOptions = production)
  : (databaseOptions = development);

export default databaseOptions;
