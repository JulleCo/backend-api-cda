import express from 'express';
import BookController from './controller';

const router = express.Router();

const bookController = new BookController();

router.get('/', (req, res, next) => bookController.getAll(req, res, next));
router.get('/:id', (req, res, next) => bookController.getOne(req, res, next));

router.post('/new-book', (req, res, next) =>
  bookController.post(req, res, next)
);

router.delete('/:id', (req, res, next) =>
  bookController.delete(req, res, next)
);

export default router;
