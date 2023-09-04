import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'page'},
  {
    path: 'page',
    loadChildren: () => import('./admissao-cooperado/admissao-cooperado.module').then(m => m.AdmissaoCooperadoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
