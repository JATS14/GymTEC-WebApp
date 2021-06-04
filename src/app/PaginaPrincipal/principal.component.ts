import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { JsonService } from '../json.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})

export class PrincipalComponent implements OnInit {

    constructor(
        private router: Router, public json: JsonService
      ) {
      }
      ngOnInit(): void {
      }

}