import { Router } from 'express';
import { getAllAsignaciones, createAsignacion, updateAsignacion, deleteAsignacion } from '../controllers/asignaciones';
import validateToken from './validate-token'; // Asegúrate de que la ruta y el nombre del archivo sean correctos

const router = Router();

// Ruta para obtener todas las asignaciones
router.get('/', validateToken, getAllAsignaciones);

// Ruta para crear una nueva asignación
router.post('/', validateToken, createAsignacion);

// Ruta para actualizar una asignación existente
router.put('/:id', validateToken, updateAsignacion);

// Ruta para eliminar una asignación por su ID
router.delete('/:id', validateToken, deleteAsignacion);

export default router;
