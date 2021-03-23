import express, { request, response } from 'express';
import BookController from './controller';

const router = express.Router();

const bookController = new BookController();

router.get('/', (request, response, next) =>
  bookController.get(request, response, next)
);

export default router;
