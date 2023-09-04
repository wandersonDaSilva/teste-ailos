import { Component, OnInit } from '@angular/core';

import { DialogService } from 'src/app/admissao-cooperado/services/dialog.service';
import { Router } from '@angular/router';
import { ClearSearchService } from 'src/app/admissao-cooperado/services/clear-search.service';
import { LoadingService } from 'src/app/admissao-cooperado/services/loading.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  public newSearch: boolean = false;

  constructor(
    public dialogService: DialogService,
    private clearSearchService: ClearSearchService,
    private router: Router,
    private loadingService: LoadingService
  ) {
  }

  ngOnInit() {
    this.loadingService.hide();
    this.clearSearchService.onEventoExecutado().subscribe(
      (resp) => {
        if(resp) {
          this.newSearch = true;
        } else {
          this.newSearch = false;
        }
      }
    );
  }

  startNewConsulta() {
    this.newSearch = !this.newSearch;
    this.clearSearchService.emitirEvento();
    this.router.navigate(['page/consulta']);
  }

  openDialog() {
    this.dialogService.dicasAdmissao();
  }

  goChangeRouter(rota: string) {
    this.loadingService.show();
    this.router.navigate([rota]);
  }

}
