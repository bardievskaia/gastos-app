import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { GastoFormComponent } from './components/gasto-form/gasto-form.component';
import { GastoListComponent } from './components/gasto-list/gasto-list.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { FiltrosComponent } from './components/filtros/filtros.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    GastoFormComponent,
    GastoListComponent,
    EstadisticasComponent,
    FiltrosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgChartsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }