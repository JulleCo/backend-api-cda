const Router = (app) => {
  //Our first route is here
  app.get('/', (request, response) => {
    response.json({ message: 'Hello world !' });
  });
};

export default Router;
