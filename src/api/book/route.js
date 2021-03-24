import express from 'express';
import BookController from './controller';

const router = express.Router();

const bookController = new BookController();

router.get('/', (req, res, next) => bookController.get(req, res, next));

router.post('/new-book', (req, res, next) =>
  bookController.post(req, res, next)
);

export default router;
