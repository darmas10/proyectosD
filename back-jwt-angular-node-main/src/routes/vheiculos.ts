import { Router } from 'express';
import { getAllVehiculos, createVehiculo, updateVehiculo, deleteVehiculo } from '../controllers/vheiculos'; // Asegúrate de que la ruta y el nombre del archivo sean correctos
import validateToken from './validate-token';

const router = Router();

// Ruta para obtener todos los vehículos
router.get('/', validateToken, getAllVehiculos);

// Ruta para crear un nuevo vehículo
router.post('/', validateToken, createVehiculo);

// Ruta para actualizar un vehículo existente
router.put('/:id', validateToken, updateVehiculo);

// Ruta para eliminar un vehículo por su ID
router.delete('/:id', validateToken, deleteVehiculo);

export default router;
