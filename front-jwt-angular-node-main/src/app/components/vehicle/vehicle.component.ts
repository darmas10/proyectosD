import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/interfaces/vehicle';
import { VehicleService } from 'src/app/services/vehicleService.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
  listVehicles: Vehicle[] = [];
  selectedVehicle: Vehicle | null = null;
  newVehicle: Vehicle = {
    id:0,
    matricula:'',
    marca:'',
    modelo:'',
    anyo:'',
    ubicacion:'',
    estado:'',
  };

  constructor(private vehicleService: VehicleService) { }

  ngOnInit(): void {
    this.getVehicles();
  }

  getVehicles() {
    this.vehicleService.getVehicles().subscribe(data => {
      this.listVehicles = data;
      console.log(this.listVehicles);
    })
  }

  add(): void {
    this.vehicleService.addVehicle(this.newVehicle)
      .subscribe((addVehicle:Vehicle) => {
        // Añade el conductor agregado a la lista de conductores
        this.listVehicles.push(addVehicle);
        // Limpia el objeto newDriver para preparar el formulario para una nueva inserción
        this.newVehicle = {
          id: 0,
          matricula: '',
          marca: '',
          modelo: '',
          anyo: '',
          ubicacion:'',
          estado:'',
        };
      }, error => {
        console.error('Error al agregar el conductor:', error);
        // Aquí puedes manejar el error, por ejemplo, mostrando un mensaje al usuario
      });
  }
  

  delete(driverId: number): void {
    this.vehicleService.deleteVehicle(driverId).subscribe(
      () => {
        this.listVehicles = this.listVehicles.filter(driver => driver.id !== driverId);
      },
      (error) => {
        console.error('Error al eliminar conductor:', error);
      }
    );
  }

  edit(driver: Vehicle): void {
    this.selectedVehicle = driver;
  
  }
  
  
  saveEdits(): void {
    if (this.selectedVehicle) {
      this.vehicleService.editVehicle( this.selectedVehicle).subscribe(
        (updatedDriver) => {
          // Actualizar la lista local después de la actualización exitosa
          const index = this.listVehicles.findIndex(d => d.id === updatedDriver.id);
          if (index > -1) {
            this.listVehicles[index] = updatedDriver;
          }
          this.selectedVehicle = null; // Reiniciar el estado de selección
        },
        (error) => {
          console.error('Error al editar conductor:', error);
        }
      );
    }
  }
  
  }
  

