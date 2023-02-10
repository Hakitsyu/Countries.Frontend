import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CountriesStore } from 'src/app/store/countries.store';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {
  readonly form = new FormGroup({
    name: new FormControl(),
    currency: new FormControl(),
    symbol: new FormControl()
  })

  constructor(private store: CountriesStore) {}

  ngOnInit(): void {
    this.form.valueChanges.subscribe(() => {
      const { name, currency, symbol } = this.form.value;
      this.store.updateView(state => state.countries
        .filter(c => !name || c.name.toLowerCase().startsWith(name.toLowerCase()))
        .filter(c => !currency || !!c.currencies?.find(cr => cr.code.toLowerCase() == currency.toLowerCase()))
        .filter(c => !symbol || c.id.toLowerCase() == symbol.toLowerCase()));
    });
  }
}
