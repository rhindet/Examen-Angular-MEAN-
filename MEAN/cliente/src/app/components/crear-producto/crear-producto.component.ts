import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
  productoForm:FormGroup;
  titulo = 'Crear Persona';
  id:string|null;
  constructor(private fb:FormBuilder,
              private router:Router,
              private toastr: ToastrService,
              private _personaService:ProductoService,
              private aRouter:ActivatedRoute) { 
    this.productoForm = this.fb.group({
      nombre:['',Validators.required],
      ApellidoPaterno:['',Validators.required],
      ApellidoMaterno:['',Validators.required],
      direccion:['',Validators.required],
      numero:['',Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this.esEditar();
  }
  agregarProducto(){
    

    const USUARIO:Producto = {
        nombre:this.productoForm.get('nombre')?.value,
        ApellidoPaterno:this.productoForm.get('ApellidoPaterno')?.value,
        ApellidoMaterno:this.productoForm.get('ApellidoMaterno')?.value,
        direccion:this.productoForm.get('direccion')?.value,
        numero:this.productoForm.get('numero')?.value,
    }
   

        if(this.id !== null){
          this._personaService.editarPersona(this.id,USUARIO).subscribe(data=>{
            this.toastr.info('Persona actualizada Existosamente', 'Persona Actualizada');
            this.router.navigate(['/']);
          })
        }else{
          console.log(USUARIO);
          this._personaService.guardarPersona(USUARIO).subscribe(data=>{
            this.toastr.success('Agregado Existosamente', 'Persona Agregado');
            this.router.navigate(['/']);
          },error=>{
            console.log(error);
            this.productoForm.reset();
          })
        }

  
  }
  esEditar(){
    if(this.id !==null){
      this.titulo = 'Editar Persona';
      this._personaService.obtenerPersona(this.id).subscribe(data=>{
        this.productoForm.setValue({
          nombre:data.nombre,
          ApellidoPaterno:data.ApellidoPaterno,
          ApellidoMaterno:data.ApellidoMaterno,
          direccion:data.direccion,
          numero:data.numero,
        })
      })
    }
  }
  
}
