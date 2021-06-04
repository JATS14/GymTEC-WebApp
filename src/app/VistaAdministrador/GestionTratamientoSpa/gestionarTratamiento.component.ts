import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { JsonService } from '../../json.service';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'app-gestionarTratamientoS',
    templateUrl: './gestionarTratamiento.component.html',
    styleUrls: ['./gestionarTratamiento.component.css']
  })

  export class GestionarTratamiento{
    constructor(
        private router: Router, public json: JsonService) {

      }


    }