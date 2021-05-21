import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

export let routes: Routes = [
  //{path: '', component: PrincipalComponent},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MDBBootstrapModule.forRoot()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
