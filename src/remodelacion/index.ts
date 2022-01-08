import express from 'express';
import remodelacion from './routes/remodelacion.routes';

const router = express.Router();

router.use('/remodelacion', remodelacion);

export default router;
