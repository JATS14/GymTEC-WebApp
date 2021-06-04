import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { JsonService } from '../../json.service';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'app-gestionarPuestos',
    templateUrl: './gestionarPuestos.component.html',
    styleUrls: ['./gestionarPuestos.component.css']
  })

  export class GestionarPuestos{
    constructor(
        private router: Router, public json: JsonService) {

      }


    }