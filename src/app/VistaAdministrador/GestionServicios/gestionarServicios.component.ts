import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { JsonService } from '../../json.service';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'app-gestionarServicios',
    templateUrl: './gestionarServicios.component.html',
    styleUrls: ['./gestionarServicios.component.css']
  })

  export class GestionarServicios{
    constructor(
        private router: Router, public json: JsonService) {

      }


    }