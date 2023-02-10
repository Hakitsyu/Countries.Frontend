import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { finalize, tap } from 'rxjs';
import { RouteDto } from 'src/app/core/dto';
import { Country } from 'src/app/core/entities';
import { BackendGatewayService } from 'src/app/gateway/backend';
import { TraceRouteComponent } from '../trace-route/trace-route.component';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountryComponent {
  @Input() country?: Country;

  public loading: boolean = false;
  public route?: RouteDto;

  constructor(private bottomSheet: MatBottomSheet,
    private service: BackendGatewayService,
    private changeDetection: ChangeDetectorRef) {}

  getFlagValue() {
    return `url(${this.country!.flags[Object.keys(this.country!.flags)[0]]})`;
  }

  getCurrencies() {
    return this.country?.currencies?.map(currency => currency.code).join(',');
  }

  getRegionalBlocks() {
    return this.country?.regionalBlocks?.map(block => block.acronym).join(',');
  }

  getLanguages() {
    return this.country?.languages.map(language => language.name).join(',');
  }

  getTracedRoute() {
    return this.route?.steps?.map(step => step.name).join(' -> ');
  }

  handleTraceRoute() {
    this.bottomSheet.open(TraceRouteComponent)
      .afterDismissed()
      .pipe(
        tap(selectedCountry => {
          console.log(selectedCountry);
          if (!selectedCountry) return;

          this.loading = true;
          this.changeDetection.detectChanges();
          this.traceRoute(selectedCountry)
            .pipe(
              tap((result) => this.route = result),
              finalize(() => {
                this.loading = false;
                this.changeDetection.detectChanges();
                console.log(this.route);
              })
            )
            .subscribe();
        })
      )
      .subscribe();
  }

  private traceRoute(selectedCountry: Country) {
    return this.service.traceRoute({
      from: this.country!.id,
      to: selectedCountry.id
    })
  }
} 
