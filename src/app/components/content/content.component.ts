import { Component, OnInit } from '@angular/core';
import { tap, finalize } from 'rxjs';
import { Country } from 'src/app/core/entities';
import { BackendGatewayService } from 'src/app/gateway/backend';
import { LoadingService } from 'src/app/modules/loading/loading.service';
import { CountriesStore } from 'src/app/store/countries.store';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  constructor(private service: BackendGatewayService,
    public store: CountriesStore,
    private loading: LoadingService) 
  { }

  ngOnInit(): void {
    this.loadCountries();
  }
 
  private loadCountries() {
    this.loading.queue();
    this.service.getCountries()
      .pipe(
        tap(countries => this.store.setState({
          countries,
          view: countries,
        })),
        finalize(() => this.loading.unqueue())
      )
      .subscribe();
  }
}
