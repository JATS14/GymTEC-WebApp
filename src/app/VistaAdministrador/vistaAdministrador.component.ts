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

    constructor(
        private router: Router, public json: JsonService
      ) {

      }


    }