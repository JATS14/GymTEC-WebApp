import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { JsonService } from '../../json.service';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'app-generacionPlanilla',
    templateUrl: './generacionPlanilla.component.html',
    styleUrls: ['./generacionPlanilla.component.css']
  })

  export class GeneracionPlanilla{
    res1: Array<any> = [{"nombre":"Sucursal1","direccion":"Cartago-Cartago-Guadalupe",
                            "fechaApertura":"10-500-2010","horarioAtencion":"6-18",
                            "empleadoAdmin":"JuanitoMora","capacidadMax":50,"numTelefono":85125548,
                            "spa":"OFF","tienda":"OFF"}];

    resMensual: Array<any> = [];
    resHora: Array<any> = [];
    resClase: Array<any> = []; 
    
    PlanillaMensual: Array<any> = [];
    PlanillaHora: Array<any> = [];
    PlanillaClase: Array<any> = [];

    framePlanillaMensual : boolean = false;
    framePlanillaHora : boolean = false;
    framePlanillaClase : boolean = false;

    constructor(
        private router: Router, public json: JsonService) {
         this.json.getJsonSucursal().subscribe((res: any) => {
            console.log(res);
            this.res1 = res;
          });
      }

      planillaMensual(Sucursal: any){
        this.PlanillaMensual = [Sucursal];
        this.framePlanillaMensual = true;
        this.json.postJsonPlanillaMensual(Sucursal).subscribe((resy: any) => {
          console.log(resy);
          this.resMensual = resy;
        });
        //this.resMensual= [{"nombre":"Adrian","numeroCedula":514542,"monto":1000},
        //                {"nombre":"Steph","numeroCedula":87855,"monto":2000}];
      }
      planillaHora(Sucursal: any){
        this.PlanillaHora = [Sucursal];
        this.framePlanillaHora = true;
        this.json.postJsonPlanillaHoras(Sucursal).subscribe((resy: any) => {
          console.log(resy);
          this.resHora = resy;
        });
        //this.resHora = [{"nombre":"Adrian","numeroCedula":514542,"horas":6,"monto":1000},
        //               {"nombre":"Steph","numeroCedula":87855,"horas":10,"monto":2000}];
      }
      planillaClase(Sucursal: any){
        this.PlanillaClase = [Sucursal];
        this.framePlanillaClase = true;
        
        this.json.postJsonPlanillaClase(Sucursal).subscribe((resy: any) => {
          console.log(resy);
          this.resClase = resy;
        });
        
        //this.resClase = [{"nombre":"Adrian","numeroCedula":514542,"clases":6,"monto":1000},
        //                {"nombre":"Steph","numeroCedula":87855,"clases":10,"monto":2000}];
      }
      planillaMensualClose(estado : boolean){
        this.framePlanillaMensual = estado;
      }
      planillaHoraClose(estado : boolean){
        this.framePlanillaHora = estado;
      }
      planillaClaseClose(estado : boolean){
        this.framePlanillaClase = estado;
      }

    }