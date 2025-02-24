// vehiculoController.ts
import { Request, Response } from 'express';
import { vheiculos } from '../models/vheiculos';

// Obtener todos los vehículos
export const getAllVehiculos = async (req: Request, res: Response) => {
    try {
        const vehiculos = await vheiculos.findAll();
        res.json(vehiculos);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al obtener los vehículos");
    }
};

// Crear un nuevo vehículo
export const createVehiculo = async (req: Request, res: Response) => {
    try {
        const newVehiculo = await vheiculos.create(req.body);
        res.status(201).json(newVehiculo);
    } catch (error) {
        console.error(error);
        res.status(400).send("Error al crear el vehículo");
    }
};

// Actualizar un vehículo existente
export const updateVehiculo = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updatedVehiculo = await vheiculos.update(req.body, {
            where: { id: Number(id) }
        });
        if (!updatedVehiculo) {
            return res.status(404).send("Vehículo no encontrado");
        }
        res.json(updatedVehiculo);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al actualizar el vehículo");
    }
};

// Eliminar un vehículo por su ID
export const deleteVehiculo = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const deletedCount = await vheiculos.destroy({
            where: { id: Number(id) }
        });
        if (deletedCount === 0) {
            return res.status(404).send("Vehículo no encontrado");
        }
        res.status(204).end(); // No content
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al eliminar el vehículo");
    }
};
