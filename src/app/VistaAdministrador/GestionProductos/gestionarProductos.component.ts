import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { JsonService } from '../../json.service';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'app-gestionarProductos',
    templateUrl: './gestionarProductos.component.html',
    styleUrls: ['./gestionarProductos.component.css']
  })

  export class GestionarProductos{
    constructor(
        private router: Router, public json: JsonService) {

      }


    }