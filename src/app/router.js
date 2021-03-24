import BookRouter from '../api/book/route';

const apiBaseURL = process.env.API_BASE_URL || '/api/v2/';

const Router = (app) => {
  //Our first route is here
  app.get('/', (req, res) => {
    res.json({ message: 'Hello world !' });
  });

  app.use(`${apiBaseURL}books`, BookRouter);
};

export default Router;
