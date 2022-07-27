import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {
  
  listPersonas:Producto[] = [];
  constructor(private _personaService:ProductoService,
   private toastr:ToastrService ) { }

  ngOnInit(): void {
    this.obtenerPersonas();
  }
  obtenerPersonas(){

    this._personaService.getPersona().subscribe({
       next: (data) =>{this.listPersonas=data;},
       error: (err) => { console.log("err.error.msg"); },
       complete: () => { }  

       });
    }

   eliminarPersona(id:any){
    this._personaService.eliminarPersona(id).subscribe(data=>{
      this.toastr.error('La persona fue eliminada con exito','Pesona eliminada')
      this.obtenerPersonas();
    },error=>{
      console.log(error)
    })
   } 
}
