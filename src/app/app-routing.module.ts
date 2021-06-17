import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

//Ventanas
import { PrincipalComponent } from './PaginaPrincipal/principal.component';

import { RegistroComponent } from './Registrarse/registro.component';

import { VistaUsuario } from './VistaUsuario/vistaUsuario.component';
import { Verclases } from './VistaUsuario/VerClases/verclases.component';

import { VistaAdministrador } from './VistaAdministrador/vistaAdministrador.component';
import { ConfigurarGym } from './VistaAdministrador/ConfigurarGym/configurarGym.component';
import { GeneracionPlanilla } from './VistaAdministrador/GeneracionPlanilla/generacionPlanilla.component';
import { GestionarEmpleados } from './VistaAdministrador/GestionEmpleados/gestionarEmpleados.component';
import { GestionarInventario } from './VistaAdministrador/GestionInventario/gestionarInventario.component';
import { GestionarProductos } from './VistaAdministrador/GestionProductos/gestionarProductos.component';
import { GestionarPuestos } from './VistaAdministrador/GestionPuesto/gestionarPuestos.component';
import { GestionarServicios } from './VistaAdministrador/GestionServicios/gestionarServicios.component';
import { GestionarSucursal } from './VistaAdministrador/GestionSucursal/gestionarSucursal.component';
import { GestionarTipoEquipo } from './VistaAdministrador/GestionTipoEquipo/gestionarTipoEquipo.component';
import { GestionarTipoPlanilla } from './VistaAdministrador/GestionTipoPlantilla/gestionarTipoPlanilla.component';
import { GestionarTratamiento } from './VistaAdministrador/GestionTratamientoSpa/gestionarTratamiento.component';



export let routes: Routes = [
  {path: '', component: PrincipalComponent},

  {path: 'Registro', component: RegistroComponent},

  {path: 'VistaUsuario', component: VistaUsuario},
  {path: 'Verclases', component: Verclases},

  {path: 'VistaAdministrador', component: VistaAdministrador},
  {path: 'ConfigurarGym', component: ConfigurarGym},
  {path: 'GeneracionPlanilla', component: GeneracionPlanilla},
  {path: 'GestionarEmpleados', component: GestionarEmpleados},
  {path: 'GestionarInventario', component: GestionarInventario},
  {path: 'GestionarProductos', component: GestionarProductos},
  {path: 'GestionarPuestos', component: GestionarPuestos},
  {path: 'GestionarServicios', component: GestionarServicios},
  {path: 'GestionarSucursal', component: GestionarSucursal},
  {path: 'GestionarTipoEquipo', component: GestionarTipoEquipo},
  {path: 'GestionarTipoPlanilla', component: GestionarTipoPlanilla},
  {path: 'GestionarTratamiento', component: GestionarTratamiento},


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MDBBootstrapModule.forRoot()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
