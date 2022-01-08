import express from 'express';
import {
  createRemodelacion,
  deleteRemodelacion,
  getAllRemodelacion,
  getRemodelacion,
  updateRemodelacion,
} from '../controllers/remodelacion.controller';

const router = express.Router();

router.get('/:id', getRemodelacion);
router.get('/', getAllRemodelacion);
router.post('/', createRemodelacion);
router.put('/:id', updateRemodelacion);
router.delete('/:id', deleteRemodelacion);

export default router;
