import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { JsonService } from '../json.service';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'app-VistaAdministrador',
    templateUrl: './vistaAdministrador.component.html',
    styleUrls: ['./vistaAdministrador.component.css']
  })

  export class VistaAdministrador{
    res1: Array<any> = [{"nombre": "prueba1"}];
    constructor(
        private router: Router, public json: JsonService
      ) {
         this.json.getJsonRolActual().subscribe((res: any) => {
            console.log(res);
            this.res1 = res;
          });
      }


    }