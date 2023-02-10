import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Country } from 'src/app/core/entities';
import { CountriesStore } from 'src/app/store/countries.store';

@Component({
  selector: 'app-trace-route',
  templateUrl: './trace-route.component.html',
  styleUrls: ['./trace-route.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TraceRouteComponent {
  constructor(public store: CountriesStore,
    private bottomSheetRef: MatBottomSheetRef<TraceRouteComponent>) { }

  handleSelectedCountry(selectedCountry?: Country) {
    this.bottomSheetRef.dismiss(selectedCountry);
  }
}
