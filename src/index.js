import { createServer } from './app/server';
import { PORT } from './config/server';

//Initializing our app server with express
createServer().then((server) => {
  //Make the server listened on a specific port
  server.listen(PORT, () => {
    console.info(`\n`);
    console.info(`----------- LAUNCHING SERVER -----------`);
    console.info(`\n`);
    console.info(`Server is listening on port ${PORT}`);
    console.info(`\n`);
    console.info(`----------------------------------------`);
  });
});
