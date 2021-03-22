import express from 'express';
import router from './router';

// Doc
import swaggerUi from 'swagger-ui-express';
import swaggerOptions from '../../swagger.json';

export const createServer = async () => {
  const server = express();

  server.use(express.json());

  router(server);

  server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerOptions));

  return server;
};
