import * as express from 'express';
import { json, urlencoded } from 'body-parser';
import * as cors from 'cors';
import { eventContext } from 'aws-serverless-express/middleware';
import { join } from 'path';
import * as morgan from 'morgan';

export function configureApp() {
  const app = express();
  app.use(cors());
  app.use(json());
  app.use(urlencoded({ extended: true }));
  app.use(eventContext());
  app.use(morgan('combined'));
  app.use(express.static(join(__dirname, '..', 'client', 'build')));

  app.get('/api/test', async (req, res) => {
    res.json({ text: 'Hello world' });
  });

  return app;
}
