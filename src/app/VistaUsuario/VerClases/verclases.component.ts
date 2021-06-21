import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { JsonService } from '../../json.service';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'app-verclases',
    templateUrl: './verclases.component.html',
    styleUrls: ['./verclases.component.css']
  })

  export class Verclases{
    dummy:Array<any> = [];
    res4:Array<any> = [];
    ListaClases: Array<any> = [{"tipo":"Tipo1","instructor":"NombreInst","individual":1,"capacidad":50,
                               "fecha":"06-18-2021","horaInicio":"18:52","horaFin":"19:50"}];
    constructor(
        private router: Router, public json: JsonService) {
         /* this.json.getJsonClases().subscribe((res: any) => {
            console.log(res);
            this.ListaClases = res;
          });
          */
      }

      Registrarse(object: any): void{
        this.json.postJsonRegistroClase(object).subscribe((resX: any) => {
          console.log(resX);
          this.dummy = resX;
          if(resX.status == "agregado"){
            window.location.reload();
            alert('Se Registró con exito');
          }if (resX.status == "lleno"){
            alert('El cupo ya está lleno');
          }
      });
      
      }

      goToBuscar(BuscarClases: NgForm) {
        if (BuscarClases.valid) {
          this.json.postJsonBuscarClaseUsuario(BuscarClases.value).subscribe((res: any) => {
            console.log(res);
            this.res4 = res;
            if (this.res4.length == 0){
              alert('No se encontraron Clases'); }
            }
          );
        }
        else{
          alert('Error en el ingreso de datos');
        }
      }

    }