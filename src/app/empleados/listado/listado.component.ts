import { Component, Input } from '@angular/core';
import { IEmpleado } from '../interfaces/empleado';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent {
  etiquetaEliminado:string = '';
  
  @Input()//decorador que permite recibir informacion de otro componente padre, es decir, convierte el componente en hijo. En este caso empleados ya no va a recibir la informacion desde el componente padre empleado.component.ts
  empleados:IEmpleado [] = [];

  borrar(){
    //console.log("Botón funciona");
    const objEliminado =  this.empleados.shift();
    if(objEliminado !== undefined){
      this.etiquetaEliminado = objEliminado?.nombres +' '+ objEliminado?.apellidos;
    }
    else {
      this.etiquetaEliminado='';
    }
    
  }
}
