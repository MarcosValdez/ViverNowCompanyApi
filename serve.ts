import { port } from './src/config';
import app from './src/app';

app
  .listen(port, () => {
    console.log(`http://localhost:${port}/api/v1`);
  })
  .on('error ', e => console.log(e));
