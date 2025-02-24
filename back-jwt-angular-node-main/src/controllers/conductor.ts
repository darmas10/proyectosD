// Importaciones necesarias
import { Request, Response } from 'express';
import { conductores } from '../models/conductor'; 

// Función para obtener todos los conductores
export const getConductores = async (req: Request, res: Response) => {
    const listConductores = await conductores.findAll();

    res.json(listConductores)
}

// Función para agregar un nuevo conductor
export const createConductor = async (req: Request, res: Response) => {
    try {
        const newConductor = await conductores.create(req.body);
        res.status(201).json(newConductor);
    } catch (error) {
        console.error(error);
        res.status(400).send("Error al crear el conductor");
    }
};

// Función para actualizar un conductor existente
export const updateConductor = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const [updatedRowCount, [updatedConductor]] = await conductores.update(req.body, {
        where: { id: Number(id) },
        returning: true,
      });
      if (updatedRowCount === 0) {
        return res.status(404).send("Conductor no encontrado");
      }
      res.json(updatedConductor);
    } catch (error) {
      console.error(error);
      res.status(500).send("Error al actualizar el conductor");
    }
  };

// Función para eliminar un conductor por su ID
export const deleteConductor = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const deletedCount = await conductores.destroy({
            where: { id: Number(id) }
        });
        if (deletedCount === 0) {
            return res.status(404).send("Conductor no encontrado");
        }
        res.status(204).end(); // No content
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al eliminar el conductor");
    }
};





 //   export const getConductores = async (req: Request, res: Response) => {
   //  const listBoletos = await conductores.findAll();

        //res.json(listBoletos)
    //}



    /*export const getBoletosFiltrer = async (req: Request, res: Response) => {
        const { origen, destino, fecha , estado} = req.query;
        

        try {       
            let queryOptions = {};
            const estadoDisponible = 'disponible'; // Define el estado que estamos buscando
            const estadoTexto = String(estado); // Convertir el estado recibido a texto

            if (origen && destino && fecha && estado && estadoTexto === estadoDisponible) {
                // Convertir la fecha a formato Date de JavaScript
                const fechaDate = new Date(fecha as string);

                // Calcular el límite superior del rango de fechas
                const endDate = new Date(fechaDate.getTime() + 24 * 60 * 60 * 1000);
                
                

                queryOptions = {
                    where: {
                        estado:estadoDisponible ,
                        origen: origen as string,
                        destino: destino as string,
                        fecha: {
                            [Op.gt]: fechaDate, // Mayor que la fecha de inicio
                            [Op.lt]: endDate // Menor que la fecha de fin
                        }
                    }
                };
            


            }

        // const filteredBoletos = await boletos.findAll(queryOptions);
        
        const filteredBoletos = await boletos.findAll({ where: queryOptions });

            // Log para verificar los resultados obtenidos
        

            res.json(filteredBoletos);
        } catch (error) {
            console.error(error);
            res.status(500).send('Error al obtener los boletos');
        }

        */
