export class Producto {
    _id?: number;
    nombre:string;
    ApellidoPaterno:string;
    ApellidoMaterno:string;
    direccion:string;
    numero:string;
    
    constructor( nombre:string,ApellidoPaterno:string, ApellidoMaterno:string,direccion:string, numero:string){
        this.nombre = nombre;
        this.ApellidoPaterno = ApellidoPaterno;
        this.ApellidoMaterno = ApellidoMaterno;
        this.direccion = direccion;
        this.numero = numero;
    }
}