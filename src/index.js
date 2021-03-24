import { createServer } from './app/server';
import { PORT } from './config/server';

const boostrap = async () => {
  const app = await createServer();
  app.listen(PORT);
  console.log(`—————— Server launch on port ${PORT} ——————`);
};

boostrap();
