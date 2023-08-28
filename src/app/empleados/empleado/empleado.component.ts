import { Component } from '@angular/core';
import { IEmpleado } from '../interfaces/empleado';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.scss']
})

export class EmpleadoComponent {
  //Este componente es el componente padre del componente listado.component.ts, recibe la informacion, pero esta se pinta en el html del componente hijo, para esto llamamos al selector del componente hijo en template del componente padre  
  empleadosAntiguos: IEmpleado [] = [
    {
      nombres: 'cristian david',
      apellidos: 'vanegas morales',
      direccion:'Cll 52 # 3G -28',
      sueldo: 2500000
    },
    {
      nombres: 'santiago',
      apellidos: 'vela ramirez',
      direccion: 'Cra 11 N°51 - 17',
      sueldo: 3500000
    },
    {
      nombres: 'juan',
      apellidos: 'marín saldarriaga',
      direccion: 'Calle Búsquela Cra Encuentrela',
      sueldo: 2000000
    }
  ];
}
