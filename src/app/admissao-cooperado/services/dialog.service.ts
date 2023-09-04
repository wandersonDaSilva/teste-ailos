import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InfoCooperadoDialogComponent } from '../pages/components/dialog/info-cooperado-dialog/info-cooperado-dialog.component';
import { DicasAdmissaoDialogComponent } from '../pages/components/dialog/dicas-admissao-dialog/dicas-admissao-dialog.component';


@Injectable({ providedIn: 'root' })
export class DialogService {

    constructor(private dialog: MatDialog) { }

    infoCooperado(entity: any): any {
        return this.dialog.open(InfoCooperadoDialogComponent, {
            minWidth: '20vw',
            height: 'auto',
            autoFocus: false,
            panelClass: "",
            data: entity
        });
    }

    dicasAdmissao(): any {
        return this.dialog.open(DicasAdmissaoDialogComponent, {
            width: '40vw',
            height: 'auto',
            autoFocus: false,
            data: {}
        });
    }
}
