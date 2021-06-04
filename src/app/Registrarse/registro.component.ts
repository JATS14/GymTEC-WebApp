import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { JsonService } from '../json.service';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'app-registro',
    templateUrl: './registro.component.html',
    styleUrls: ['./registro.component.css']
  })
  export class RegistroComponent{
    constructor(
      private router: Router, public json: JsonService
    ) {
    }

}