import { Component, OnInit } from '@angular/core';
import { Driver } from 'src/app/interfaces/driver';
import { DriverService } from 'src/app/services/driverService.service';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {
  listDrivers : Driver[] = []
  
  selectedDriver: Driver | null = null;
  newDriver: Driver = {
    id: 0,
    nombre: '',
    licencia: '',
    correo: '',
    contacto: ''
  };

  constructor(private driverService: DriverService) { }

  ngOnInit(): void {
    this.getDrivers();
  }
  
  getDrivers() {
    this.driverService.getDrivers().subscribe(data => {
      this.listDrivers = data;
      console.log(this.listDrivers)
    })
  }

add(): void {
  this.driverService.addDriver(this.newDriver)
    .subscribe((addedDriver: Driver) => {
      // Añade el conductor agregado a la lista de conductores
      this.listDrivers.push(addedDriver);
      // Limpia el objeto newDriver para preparar el formulario para una nueva inserción
      this.newDriver = {
        id: 0,
        nombre: '',
        licencia: '',
        correo: '',
        contacto: ''
      };
    }, error => {
      console.error('Error al agregar el conductor:', error);
      // Aquí puedes manejar el error, por ejemplo, mostrando un mensaje al usuario
    });
}


 /* delete(driver: Driver): void {
    this.driverService.deleteDriver(driver.id)
      .subscribe(() => {
        this.drivers = this.drivers.filter(h => h !== driver);
      });
  }

  edit(driver: Driver): void {
    this.driverService.editDriver(driver)
      .subscribe(() => {
        this.getDrivers();
      });
  }
  onSelect(driver: Driver): void {
    this.selectedDriver = driver;
  }
*/
delete(driverId: number): void {
  this.driverService.deleteDriver(driverId).subscribe(
    () => {
      this.listDrivers = this.listDrivers.filter(driver => driver.id !== driverId);
    },
    (error) => {
      console.error('Error al eliminar conductor:', error);
    }
  );
}

edit(driver: Driver): void {
  this.selectedDriver = driver;

}


saveEdits(): void {
  if (this.selectedDriver) {
    this.driverService.editDriver( this.selectedDriver).subscribe(
      (updatedDriver) => {
        // Actualizar la lista local después de la actualización exitosa
        const index = this.listDrivers.findIndex(d => d.id === updatedDriver.id);
        if (index > -1) {
          this.listDrivers[index] = updatedDriver;
        }
        this.selectedDriver = null; // Reiniciar el estado de selección
      },
      (error) => {
        console.error('Error al editar conductor:', error);
      }
    );
  }
}

}
