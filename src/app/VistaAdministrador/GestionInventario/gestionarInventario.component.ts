import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { JsonService } from '../../json.service';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'app-gestionarInventario',
    templateUrl: './gestionarInventario.component.html',
    styleUrls: ['./gestionarInventario.component.css']
  })

  export class GestionarInventario{
    constructor(
        private router: Router, public json: JsonService) {

      }


    }