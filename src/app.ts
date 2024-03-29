import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { NotFoundError, ApiError, InternalError } from './core/ApiError';
import routesV1 from './routes/v1';
import remodelacionRoutes from './remodelacion';

const app = express();

app.use(bodyParser.json({ limit: '15mb' }));
app.use(
  bodyParser.urlencoded({
    limit: '15mb',
    extended: true,
    parameterLimit: 50000,
  })
);
// Routes

app.get('/fecha', function (req, res) {
  res.json({ msg: new Date(Date.now()) });
});

app.use('/api/v1', routesV1);
app.use('/api/v1', remodelacionRoutes);

// catch 404 and forward to error handler
app.use((req, res, next) => next(new NotFoundError()));

// Middleware Error Handler
// eslint-disable-next-line @typescript-eslint/no-unused-vars
/* app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ApiError) {
    ApiError.handle(err, res);
  } else {
    if (environment === 'development') {
      console.log(err);
      return res.status(500).send(err.message);
    }
    ApiError.handle(new InternalError(), res);
  }
}); */

export default app;
