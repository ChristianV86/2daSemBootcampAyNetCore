import { Component } from '@angular/core';
import { IEmpleado, IDireccion } from '../interfaces/empleado';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent {
  empleados:IEmpleado [] = [
    {
      nombres: 'Cristian David',
      apellidos: 'Vanegas Morales',
      direccion: {
        tipoVia: 'Calle',
        numeroVia: 52,
        numeroCasa: 34,
        barrio: 'Samaria',
        ciudad: 'Manizales'
      },
      sueldo: 2500000
    },
    {
      nombres: 'Santiago',
      apellidos: 'Vela Ramirez',
      direccion: {
        tipoVia: 'Carrera',
        numeroVia: 23,
        numeroCasa: 85,
        barrio: 'Centro',
        ciudad: 'Medellín'
      },
      sueldo: 3500000
    },
    {
      nombres: 'Juan',
      apellidos: 'Marín Saldarriaga',
      direccion: {
        tipoVia: 'Avenida',
        numeroVia: 72,
        numeroCasa: 56,
        barrio: 'Paraiso',
        ciudad: 'Bogotá D.C.'
      },
      sueldo: 2000000
    }
  ];
}
