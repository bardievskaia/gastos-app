import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GastoListComponent } from './components/gasto-list/gasto-list.component';
import { GastoFormComponent } from './components/gasto-form/gasto-form.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';

const routes: Routes = [
  { path: '', redirectTo: 'gastos', pathMatch: 'full' },
  { path: 'gastos', component: GastoListComponent },
  { path: 'nuevo', component: GastoFormComponent },
  { path: 'editar/:id', component: GastoFormComponent },
  { path: 'estadisticas', component: EstadisticasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}