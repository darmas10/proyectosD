// asignacionController.ts
import { Request, Response } from 'express';
import { asignaciones } from '../models/asignaciones';

// Obtener todas las asignaciones
export const getAllAsignaciones = async (req: Request, res: Response) => {
  const listAsignaciones = await asignaciones.findAll();

  res.json(listAsignaciones);
};

// Crear una nueva asignación
export const createAsignacion = async (req: Request, res: Response) => {
    try {
        const newAsignacion = await asignaciones.create(req.body);
        res.status(201).json(newAsignacion);
    } catch (error) {
        console.error(error);
        res.status(400).send("Error al crear la asignación");
    }
};

// Actualizar una asignación existente
export const updateAsignacion = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updatedAsignacion = await asignaciones.update(req.body, {
            where: { id: Number(id) }
        });
        if (!updatedAsignacion) {
            return res.status(404).send("Asignación no encontrada");
        }
        res.json(updatedAsignacion);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al actualizar la asignación");
    }
};

// Eliminar una asignación por su ID
export const deleteAsignacion = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const deletedCount = await asignaciones.destroy({
            where: { id: Number(id) }
        });
        if (deletedCount === 0) {
            return res.status(404).send("Asignación no encontrada");
        }
        res.status(204).end(); // No content
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al eliminar la asignación");
    }
};
