import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { JsonService } from '../../json.service';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'app-gestionarEmpleados',
    templateUrl: './gestionarEmpleados.component.html',
    styleUrls: ['./gestionarEmpleados.component.css']
  })

  export class GestionarEmpleados{
    constructor(
        private router: Router, public json: JsonService) {

      }


    }