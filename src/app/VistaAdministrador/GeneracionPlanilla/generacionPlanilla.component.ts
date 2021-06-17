import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { JsonService } from '../../json.service';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'app-generacionPlanilla',
    templateUrl: './generacionPlanilla.component.html',
    styleUrls: ['./generacionPlanilla.component.css']
  })

  export class GeneracionPlanilla{
    constructor(
        private router: Router, public json: JsonService) {

      }


    }