export interface IEmpleado {
    nombres:string;
    apellidos:string;
    direccion: IDireccion;
    sueldo:number;
}

export interface IDireccion {
    tipoVia:string;
    numeroVia:number;
    numeroCasa:number;
    barrio:string;
    ciudad:string;
}