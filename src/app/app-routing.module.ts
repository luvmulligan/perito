import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InformeComponent } from './informe/informe.component';
import { LesionadoComponent } from './lesionado/lesionado.component';

const routes: Routes = [
  {
    path: '', //If path doesn't match anything reroute to /authentication/signin
    redirectTo: '/informe',
    pathMatch: 'full',
  },
  {
    path: 'informe',
    component: InformeComponent,
    // children: [{ path: 'lesionado/:id', component: LesionadoComponent }],
  },
  {
    path: 'lesionado/:id',
    component: LesionadoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
