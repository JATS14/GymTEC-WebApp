
  import { Component } from '@angular/core';
  import {Router} from '@angular/router';
  import { JsonService } from '../../json.service';
  import { NgForm } from '@angular/forms';
  
  
  @Component({
      selector: 'app-gestionarTipoPlanilla',
      templateUrl: './gestionarTipoPlanilla.component.html',
      styleUrls: ['./gestionarTipoPlanilla.component.css']
    })
  
    export class GestionarTipoPlanilla{
      constructor(
          private router: Router, public json: JsonService) {
  
        }
  
  
      }