import { Component, OnInit } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';
import { LoadingService } from 'src/app/admissao-cooperado/services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  public showLoading: boolean = true;
  public subject = new Subject<any>();

  constructor(private loadingService: LoadingService) { }

  ngOnInit() {
    this.loadingService.isLoading$
      .subscribe((resp) => {
        resp ? this.showLoading = resp : this.subject.next(false);
      });

      this.subject.
      pipe(debounceTime(2000))
      .subscribe((resp) => {
        this.showLoading = resp;
      });
  }
}
