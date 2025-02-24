import { Router } from 'express';
import {  createConductor, deleteConductor, getConductores, updateConductor } from '../controllers/conductor';
import validateToken from './validate-token';

const router = Router();

// Ruta para obtener todos los conductores
router.get('/', validateToken, getConductores);

// Ruta para crear un nuevo conductor
router.post('/', validateToken, createConductor);

// Ruta para actualizar un conductor existente
router.put('/:id', validateToken, updateConductor);

// Ruta para eliminar un conductor por su ID
router.delete('/:id', validateToken, deleteConductor);

export default router;
