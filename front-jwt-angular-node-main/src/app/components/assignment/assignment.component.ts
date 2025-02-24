import { Component, OnInit } from '@angular/core';
import { Assignment } from 'src/app/interfaces/assignment';
import { AssignmentService } from 'src/app/services/assignment-service.service';


@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  listAssignments: Assignment[] = [];
  selectedAssignment: Assignment | null = null;
  newAssignment: Assignment = {
    id:0,
    conductor: '',
    vehiculo: '',
    fecha_inicio: '',
    destino:'',
    distancia:'',
    estado : ''
  };

  constructor(private assignmentService: AssignmentService) { }

  ngOnInit(): void {
    this.getAssignments();
  }

  getAssignments() {
    this.assignmentService.getAssignments().subscribe(data => {
      this.listAssignments = data;
      console.log(this.listAssignments)
    })
  }

  add(): void {
    this.assignmentService.addAssignment(this.newAssignment)
      .subscribe((addAssignment:Assignment) => {
        // Añade la asignacion agregado a la lista de asignaciones
        this.listAssignments.push(addAssignment);
        // Limpia el objeto newDriver para preparar el formulario para una nueva inserción
        this.newAssignment = {
          id:0,
          conductor: '',
          vehiculo: '',
          fecha_inicio: '',
          destino:'',
          distancia:'',
          estado : '',
        };
      }, error => {
        console.error('Error al agregar la asignacion:', error);
        console.log(this.newAssignment);
        // Aquí puedes manejar el error, por ejemplo, mostrando un mensaje al usuario
      });
  }


  delete(driverId: number): void {
    this.assignmentService.deleteAssignment(driverId).subscribe(
      () => {
        this.listAssignments = this.listAssignments.filter(driver => driver.id !== driverId);
      },
      (error) => {
        console.error('Error al eliminar conductor:', error);
      }
    );
  }

  edit(assignment: Assignment): void {
    this.selectedAssignment = assignment;

  }


  saveEdits(): void {
    if (this.selectedAssignment) {
      this.assignmentService.editAssignment( this.selectedAssignment).subscribe(
        (updatedDriver) => {
          // Actualizar la lista local después de la actualización exitosa
          const index = this.listAssignments.findIndex(d => d.id === updatedDriver.id);
          if (index > -1) {
            this.listAssignments[index] = updatedDriver;
          }
          this.selectedAssignment = null; // Reiniciar el estado de selección
        },
        (error) => {
          console.error('Error al editar conductor:', error);
        }
      );
    }
  }

  }


