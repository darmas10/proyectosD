import express, { Application } from 'express';
import cors from 'cors';
import routesConductor from '../routes/conductor';
import routesVehiculos from '../routes/vheiculos';
import routesUser from '../routes/user';
import routesAsignacion from '../routes/asignaciones'
import { conductores } from './conductor';
import { User } from './users';
import { asignaciones } from './asignaciones';
import { vheiculos } from './vheiculos';


class Server {
    private app: Application;
    private port: string;
    

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlewares(); 
        this.routes();
        this.dbConnect();

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Aplicacion corriendo en el puerto ' + this.port);
        })
    }

    routes() {
    
        this.app.use('/api/users', routesUser);
        this.app.use('/api/vehiculos', routesVehiculos); // Corrección de typo
        this.app.use('/api/conductores', routesConductor); // Corrección de typo
        this.app.use('/api/asignaciones', routesAsignacion); // Única vez
    }

    midlewares() {
        // Parseo body
        this.app.use(express.json());

        // Cors
        this.app.use(cors());
    }

    async dbConnect() {
        try {
            await vheiculos.sync()
            await User.sync();
            await conductores.sync();
            await asignaciones.sync();
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }
}

export default Server;