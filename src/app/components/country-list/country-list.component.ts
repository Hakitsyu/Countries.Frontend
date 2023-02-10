import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from 'src/app/core/entities';
import { CountriesStore } from 'src/app/store/countries.store';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss'],
})
export class CountryListComponent {
  constructor(public store: CountriesStore) {}
}
