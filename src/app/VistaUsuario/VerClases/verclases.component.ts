import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { JsonService } from '../../json.service';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'app-verclases',
    templateUrl: './verclases.component.html',
    styleUrls: ['./verclases.component.css']
  })

  export class Verclases{
    constructor(
        private router: Router, public json: JsonService) {

      }


    }