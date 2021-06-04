import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
//Ventanas
import { PrincipalComponent } from './PaginaPrincipal/principal.component';

import { RegistroComponent } from './Registrarse/registro.component';

import { VistaUsuario } from './VistaUsuario/vistaUsuario.component';
import { Verclases } from './VistaUsuario/VerClases/verclases.component';

import { VistaAdministrador } from './VistaAdministrador/vistaAdministrador.component';
import { ConfigurarGym } from './VistaAdministrador/ConfigurarGym/configurarGym.component';
import { GestionarEmpleados } from './VistaAdministrador/GestionEmpleados/gestionarEmpleados.component';
import { GestionarInventario } from './VistaAdministrador/GestionInventario/gestionarInventario.component';
import { GestionarProductos } from './VistaAdministrador/GestionProductos/gestionarProductos.component';
import { GestionarPuestos } from './VistaAdministrador/GestionPuesto/gestionarPuestos.component';
import { GestionarServicios } from './VistaAdministrador/GestionServicios/gestionarServicios.component';
import { GestionarSucursal } from './VistaAdministrador/GestionSucursal/gestionarSucursal.component';
import { GestionarTipoEquipo } from './VistaAdministrador/GestionTipoEquipo/gestionarTipoEquipo.component';
import { GestionarTipoPlanilla } from './VistaAdministrador/GestionTipoPlantilla/gestionarTipoPlanilla.component';
import { GestionarTratamiento } from './VistaAdministrador/GestionTratamientoSpa/gestionarTratamiento.component';


@NgModule({
  declarations: [
    AppComponent,

    PrincipalComponent,

    RegistroComponent,

    VistaUsuario,
    Verclases,

    VistaAdministrador,
    ConfigurarGym,
    GestionarEmpleados,
    GestionarInventario,
    GestionarProductos,
    GestionarPuestos,
    GestionarServicios,
    GestionarSucursal,
    GestionarTipoEquipo,
    GestionarTipoPlanilla,
    GestionarTratamiento
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
