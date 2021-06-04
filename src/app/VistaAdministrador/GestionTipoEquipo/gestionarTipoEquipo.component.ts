import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { JsonService } from '../../json.service';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'app-gestionarTipoEquipo',
    templateUrl: './gestionarTipoEquipo.component.html',
    styleUrls: ['./gestionarTipoEquipo.component.css']
  })

  export class GestionarTipoEquipo{
    constructor(
        private router: Router, public json: JsonService) {

      }


    }