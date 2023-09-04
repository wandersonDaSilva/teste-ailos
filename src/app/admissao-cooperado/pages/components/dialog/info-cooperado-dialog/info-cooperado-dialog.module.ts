import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from 'src/app/shared/angular-material.module';
import { CpfPipe } from 'src/app/shared/pipes/cpf.pipe';

import { InfoCooperadoDialogComponent } from './info-cooperado-dialog.component';

@NgModule({
    declarations: [InfoCooperadoDialogComponent, CpfPipe],
    imports: [
        CommonModule,
        AngularMaterialModule
    ],
    exports: [CpfPipe],
})
export class InfoCooperadoDialogModule { }
