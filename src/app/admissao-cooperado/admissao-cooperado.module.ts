import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AdmissaoCooperadoRoutingModule } from './admissao-cooperado.routing';
import { DicasAdmissaoDialogModule } from './pages/components/dialog/dicas-admissao-dialog/dicas-admissao-dialog.module';
import { InfoCooperadoDialogModule } from './pages/components/dialog/info-cooperado-dialog/info-cooperado-dialog.module';
import { SidenavModule } from './pages/components/sidenav/sidenav.module';
import { StepsModule } from './pages/components/steps/steps.module';
import { ToolbarModule } from './pages/components/toolbar/toolbar.module';
import { DialogService } from './services/dialog.service';
import { BemVindoModule } from './pages/bem-vindo/bem-vindo.module';

@NgModule({
  imports: [
    CommonModule,
    BemVindoModule,
    InfoCooperadoDialogModule,
    DicasAdmissaoDialogModule,
    SidenavModule,
    StepsModule,
    ToolbarModule,
    AdmissaoCooperadoRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [],
  providers: [
      DialogService,
  ]
})
export class AdmissaoCooperadoModule { }
