import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { JsonService } from '../../json.service';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'app-gestionarSucursal',
    templateUrl: './gestionarSucursal.component.html',
    styleUrls: ['./gestionarSucursal.component.css']
  })

  export class GestionarSucursal{
    constructor(
        private router: Router, public json: JsonService) {

      }


    }