import express from 'express'
import { ApiController } from './controllers';

const app: express.Application = express();
const port: string = process.env.PORT || '3000';

app.use('/api', ApiController)

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`);
});