import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-bem-vindo',
  templateUrl: './bem-vindo.component.html',
  styleUrls: ['./bem-vindo.component.css']
})
export class BemVindoComponent implements OnInit {

  constructor(
    private router: Router,
    private loadingService: LoadingService
  ) { }

  ngOnInit() {
    this.loadingService.show();
  }

  ngAfterViewInit() {
    this.loadingService.hide();
  }

  goToSearch() {
    this.router.navigate(['page/consulta']);
  }
}
