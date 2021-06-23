import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { JsonService } from '../json.service';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'app-VistaUsuario',
    templateUrl: './vistaUsuario.component.html',
    styleUrls: ['./vistaUsuario.component.css']
  })

  export class VistaUsuario{
    res1: Array<any> = [{"nombre": "prueba1"}];
    constructor(
        private router: Router, public json: JsonService
      ) {
       this.json.getJsonUsuarioActual().subscribe((res: any) => {
            console.log(res);
            this.res1 = res;
          });
      }


    }