import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from 'src/app/shared/angular-material.module';

import { ConsultaCpfModule } from '../../consulta-cpf/consulta-cpf.module';
import { ToolbarModule } from '../toolbar/toolbar.module';
import { SidenavComponent } from './sidenav.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule,
    ConsultaCpfModule,
    ToolbarModule,
  ],
  declarations: [SidenavComponent],
})
export class SidenavModule { }
