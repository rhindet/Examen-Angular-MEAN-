import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService  {
  url = 'http://localhost:4000/api/persona/'
  constructor(private http:HttpClient) { }

  public getPersona():Observable<any>{
    return this.http.get(this.url);
  }
  eliminarPersona(id:string):Observable<any>{
    return this.http.delete(this.url + id);
  }
  guardarPersona(persona:Producto):Observable<any>{
    return this.http.post(this.url,persona)
  }
  obtenerPersona(id:string):Observable<any>{
    return this.http.get(this.url+id);
  }
  editarPersona(id:string,persona:Producto):Observable<any>{
    return this.http.put(this.url+id,persona);
  }
}
