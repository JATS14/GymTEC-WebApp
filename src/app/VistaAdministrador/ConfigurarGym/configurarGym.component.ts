import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { JsonService } from '../../json.service';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'app-configurarGym',
    templateUrl: './configurarGym.component.html',
    styleUrls: ['./configurarGym.component.css']
  })

  export class ConfigurarGym{
    constructor(
        private router: Router, public json: JsonService) {

      }


    }