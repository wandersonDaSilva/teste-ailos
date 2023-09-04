import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SidenavComponent } from './pages/components/sidenav/sidenav.component';
import { BemVindoComponent } from './pages/bem-vindo/bem-vindo.component';
import { ConsultaCpfComponent } from './pages/consulta-cpf/consulta-cpf.component';
import { InfoCooperadoComponent } from './pages/info-cooperado/info-cooperado.component';

const routes: Routes = [
  {path: '', component: SidenavComponent,
  children: [
    {
      path: '',
      redirectTo: 'bem-vindo',
      pathMatch: 'full'
    },
    {
      path: 'bem-vindo',
      component: BemVindoComponent,
    },
    {
      path: 'consulta',
      component: ConsultaCpfComponent,
      children: [
        {
          path: 'cpf/:id',
          component: InfoCooperadoComponent
        }
      ]
    },
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmissaoCooperadoRoutingModule { }
